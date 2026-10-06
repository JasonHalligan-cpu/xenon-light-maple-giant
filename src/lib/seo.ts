const SITE = "https://elevatoriq.net";

export const HOME_FAQS = [
  {
    q: "What is EN 81?",
    a: "EN 81 is the European family of elevator safety standards. EN 81-20 is the base for a new passenger lift. EN 81-31 is a goods-only lift a person can step into to load, not to ride. Other parts add one job: 70 is accessibility, 72 is the firefighter lift, 73 is fire recall, and 76 is the evacuation lift.",
  },
  {
    q: "What is the difference between a firefighter lift and an evacuation lift?",
    a: "A firefighter lift, EN 81-72, is the fire brigade’s tool. An evacuation lift, EN 81-76, is for people who cannot use the stairs. They are not the same elevator.",
  },
  {
    q: "What is ASME A17.1?",
    a: "ASME A17.1 / CSA B44 is the safety code for new elevators in the United States and Canada. It is not EN 81. The edition that applies is the one the local authority has adopted.",
  },
  {
    q: "What is LOLER for an elevator?",
    a: "LOLER is the UK rule that a passenger elevator is thoroughly examined, usually every six months. It is the check after the elevator is in the building, not the standard that designed it.",
  },
] as const;

export function pageHead({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}) {
  const meta: Array<Record<string, unknown>> = [
    { title },
    { name: "description", content: description },
  ];
  if (jsonLd) meta.push({ "script:ld+json": jsonLd });
  return {
    meta,
    links: [{ rel: "canonical", href: `${SITE}${path}` }],
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "ElevatorIQ",
        url: `${SITE}/`,
        description:
          "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand.",
      },
      {
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
