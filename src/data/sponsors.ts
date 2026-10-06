export const SPONSOR_PACKAGES = [
  {
    id: "lobby",
    title: "Lobby takeover",
    kicker: "First doors",
    price: "Lead partner",
    reach: "Every visitor, every session",
    placement: "Cover and landing — the first thing a specifier sees.",
    who: "Elevator manufacturers, major contractors, notified bodies.",
    spec: "Landscape 16:9 art, 8-word headline, 20-word line, one link.",
    size: "billboard" as const,
    advertId: "ashcombe",
  },
  {
    id: "floor",
    title: "Featured floor",
    kicker: "After the lesson",
    price: "Code partner",
    reach: "Anyone who finishes a floor",
    placement: "Sits under ‘floor complete’ on EN 81-76, 72, 73 and LOLER.",
    who: "Evacuation-elevator makers, fire-strategy houses, accessibility specialists.",
    spec: "Square mark, 6-word claim, 16-word support, one link.",
    size: "card" as const,
    advertId: "beacon",
  },
  {
    id: "codes",
    title: "Code library strip",
    kicker: "While they browse",
    price: "Directory",
    reach: "Dutyholders looking up a part",
    placement: "A labelled strip on the EU regulations library.",
    who: "Thorough-examination bodies, parts suppliers, training providers.",
    spec: "Wide strip, 5-word name, 12-word offer.",
    size: "strip" as const,
    advertId: "northbank",
  },
  {
    id: "drill",
    title: "Practice rest card",
    kicker: "When the doors open",
    price: "Session",
    reach: "After every adaptive set",
    placement: "On the practice results screen — high attention, low noise.",
    who: "CPD providers, software for thorough examination, kit suppliers.",
    spec: "Card, 6-word headline, 14-word line.",
    size: "card" as const,
    advertId: "harbour",
  },
  {
    id: "scenario",
    title: "Scenario partner",
    kicker: "In the building",
    price: "Story",
    reach: "People working a live case",
    placement: "On the UK scenarios index — midnight hotel, listed shaft, substitution.",
    who: "Consultancies that live in the fire strategy and the elevator spec.",
    spec: "Card with case line, 18 words, one link.",
    size: "card" as const,
    advertId: "kiln",
  },
] as const;

export type SponsorPackageId = (typeof SPONSOR_PACKAGES)[number]["id"];

export const SPONSOR_BY_ID = Object.fromEntries(
  SPONSOR_PACKAGES.map((p) => [p.id, p]),
) as Record<SponsorPackageId, (typeof SPONSOR_PACKAGES)[number]>;

export const SPONSOR_AUDIENCE = [
  { label: "Specifiers", line: "Architects, M&E, fire engineers naming 72, 73 or 76." },
  { label: "Dutyholders", line: "Building managers who keep LOLER diaries and Part B." },
  { label: "Contractors", line: "Elevator firms quoting a UK shaft, not a brochure." },
  { label: "Inspectors", line: "Thorough-examination houses and notified bodies." },
] as const;

export const ADVERTS = [
  {
    id: "ashcombe",
    brand: "Ashcombe Elevators",
    town: "Sheffield",
    slot: "lobby" as SponsorPackageId,
    kicker: "Evacuation cars",
    headline: "The car that stays when the stairs fail.",
    line: "Class A and Class B evacuation elevators, specified for a UK fire strategy — not a brochure.",
    cta: "Open the 76 range",
    tone: "bg-orange text-accent-fg",
    img: "/graphics/ad-ashcombe.jpg",
    alt: "Empty hospital elevator lobby with a wide-door evacuation car open",
    pitch:
      "Ashcombe builds passenger and evacuation cars in Sheffield. The pretend range on this page is the one a fire engineer names when Part B and EN 81-76 have to live in the same shaft.",
    points: [
      "Independent power and a landing that still works in a fire.",
      "Dual-height controls and a floor you can turn a wheelchair on.",
      "Complementary to a firefighter elevator — never a substitute.",
    ],
  },
  {
    id: "beacon",
    brand: "Beacon Fire Strategy",
    town: "Manchester",
    slot: "floor" as SponsorPackageId,
    kicker: "Fire strategy",
    headline: "72 waits. 76 keeps working. We write both.",
    line: "Fire strategies that name the right car — firefighter, evacuation, or park.",
    cta: "Read a sample strategy",
    tone: "bg-night text-night-fg",
    img: "/graphics/car-firefighter-o.jpg",
    alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor",
    pitch:
      "Beacon is a pretend fire-engineering house. They sit in the meeting where someone tries to use a firefighter elevator as an evacuation elevator, and they say no.",
    points: [
      "EN 81-72 is the fire brigade’s tool.",
      "EN 81-76 is for people who cannot use the stairs.",
      "EN 81-73 is what a normal passenger car does in a fire: park.",
    ],
  },
  {
    id: "northbank",
    brand: "Northbank Examiners",
    town: "Leeds",
    slot: "codes" as SponsorPackageId,
    kicker: "LOLER",
    headline: "The six-month diary, kept.",
    line: "Thorough examination for passenger, goods and evacuation elevators across the UK.",
    cta: "Book an examination",
    tone: "bg-green text-ok-fg",
    img: "/graphics/ad-northbank.jpg",
    alt: "Elevator machine room set for a thorough examination",
    pitch:
      "Northbank is a pretend competent-person house. They do not sell cars. They write the report the dutyholder has to keep.",
    points: [
      "LOLER is in-service law, not a CE mark.",
      "A new 76 plate does not pause the diary.",
      "Reports in landing language the building manager can act on.",
    ],
  },
  {
    id: "harbour",
    brand: "Harbour CPD",
    town: "Bristol",
    slot: "drill" as SponsorPackageId,
    kicker: "Dutyholder training",
    headline: "Eight questions, then a real landing.",
    line: "Half-day sessions for managers who own the LOLER file and the fire strategy.",
    cta: "See the next sitting",
    tone: "bg-yellow text-fg",
    img: "/graphics/car-ordinary-j.jpg",
    alt: "Empty standard passenger elevator with doors open onto a landing",
    pitch:
      "Harbour is pretend continuing professional development. They train the person who has to say ‘park, wait, or keep working’ at 2am.",
    points: [
      "Interleaved 72 / 73 / 76 so the three cars stop blending.",
      "Scenarios, not slides: midnight hotel, listed shaft, substitution.",
      "A certificate the insurer will actually read.",
    ],
  },
  {
    id: "kiln",
    brand: "Kiln & Rail",
    town: "Glasgow",
    slot: "scenario" as SponsorPackageId,
    kicker: "Existing shafts",
    headline: "The listed building still needs a safe car.",
    line: "Modernisation that keeps the stone, and still meets the recipe.",
    cta: "Walk a listed shaft",
    tone: "bg-raised text-fg",
    img: "/graphics/shaft-floors.jpg",
    alt: "Cutaway of a UK building showing the elevator shaft",
    pitch:
      "Kiln & Rail is a pretend modernisation firm. They live in EN 81-80 and the awkward conversation about a car that is already in the well.",
    points: [
      "Existing elevators are a different conversation to a new one.",
      "Part M still applies when you change the car.",
      "A firefighter sticker is not an evacuation elevator.",
    ],
  },
] as const;

export type AdvertId = (typeof ADVERTS)[number]["id"];

export const ADVERT_BY_ID = Object.fromEntries(ADVERTS.map((a) => [a.id, a])) as Record<
  AdvertId,
  (typeof ADVERTS)[number]
>;

export function advertForSlot(slot: SponsorPackageId) {
  const pack = SPONSOR_BY_ID[slot];
  return ADVERT_BY_ID[pack.advertId];
}
