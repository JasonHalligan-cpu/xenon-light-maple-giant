const originals = new WeakMap<Text, string>();
const applied = new Set<string>();
const ATTRS = ["alt", "aria-label", "placeholder", "title"] as const;
const attrOriginal = new WeakMap<Element, Partial<Record<(typeof ATTRS)[number], string>>>();
const normCache = new WeakMap<object, Map<string, string>>();

function normalize(source: string) {
  return source.replace(/\s+/g, " ").trim();
}

function normalizedDict(dict: Record<string, string>) {
  const cached = normCache.get(dict);
  if (cached) return cached;
  const map = new Map<string, string>();
  for (const [key, value] of Object.entries(dict)) {
    const normal = normalize(key);
    if (normal && !map.has(normal)) map.set(normal, value);
  }
  normCache.set(dict, map);
  return map;
}

function lookup(dict: Record<string, string>, source: string) {
  const key = normalize(source);
  if (!key) return source;
  const hit = normalizedDict(dict).get(key);
  if (!hit) return source;
  const lead = source.match(/^\s*/)?.[0] ?? "";
  const trail = source.match(/\s*$/)?.[0] ?? "";
  return lead + hit + trail;
}

function skip(node: Node | null): boolean {
  const el = node instanceof Element ? node : node?.parentElement;
  if (!el) return true;
  if (el.closest("[data-no-translate], script, style, textarea, input, noscript")) return true;
  return false;
}

function note(next: string, source: string) {
  if (next !== source) applied.add(next);
}

export function applyLanguage(root: ParentNode, lang: string, dict: Record<string, string>) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    const node = current as Text;
    current = walker.nextNode();
    if (skip(node.parentElement)) continue;
    const value = node.nodeValue ?? "";
    if (!value.trim()) continue;
    const saved = originals.get(node);
    if (saved == null) originals.set(node, value);
    else if (value !== saved && value !== lookup(dict, saved) && !applied.has(value)) {
      originals.set(node, value);
    }
    const source = originals.get(node) ?? value;
    const next = lang === "en" ? source : lookup(dict, source);
    note(next, source);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  const elements = root.querySelectorAll<HTMLElement>("[alt], [aria-label], [placeholder], [title]");
  elements.forEach((el) => {
    if (skip(el)) return;
    const saved = attrOriginal.get(el) ?? {};
    for (const attr of ATTRS) {
      const value = el.getAttribute(attr);
      if (value == null || !value.trim()) continue;
      if (saved[attr] == null) saved[attr] = value;
      else if (value !== saved[attr] && value !== lookup(dict, saved[attr]!) && !applied.has(value)) {
        saved[attr] = value;
      }
      const source = saved[attr] ?? value;
      const next = lang === "en" ? source : lookup(dict, source);
      note(next, source);
      if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
    }
    attrOriginal.set(el, saved);
  });

  document.documentElement.lang = lang;
}
