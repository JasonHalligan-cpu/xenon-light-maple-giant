import type { SkillId } from "@/data/types";

type Scene = { src: string; alt: string };

/** One picture per question, showing the answer that question is teaching. */
const ANSWER_ART: Record<string, Scene> = {
  "q-family-1": {
    src: "/graphics/ans2/q-family-1d.jpg",
    alt: "Three different elevator doors in one lobby: a standard car, a firefighter car, and an evacuation car.",
  },
  "q-family-2": {
    src: "/graphics/ans2/q-family-2e.jpg",
    alt: "A finished passenger car beside the safety parts that were tested before it was installed.",
  },
  "q-family-3": {
    src: "/graphics/ans2/q-family-3n.jpg",
    alt: "Two dark vertical door panels face each other and part in the middle. They are a different colour from the wall. The panel is on the right-hand side wall.",
  },
  "q-duty-1": {
    src: "/graphics/ans2/q-duty-1.jpg",
    alt: "Building keys and an examination diary on the desk of the person who controls the elevator.",
  },
  "q-duty-2": {
    src: "/graphics/ans2/q-duty-2b.jpg",
    alt: "A six-month calendar beside an examination diary that is already overdue.",
  },
  "q-duty-3": {
    src: "/graphics/ans2/q-duty-3.jpg",
    alt: "A new elevator nameplate next to the in-service examination diary that still has to be kept.",
  },
  "q-20-1": {
    src: "/graphics/ans2/q-20-1n.jpg",
    alt: "A modern passenger elevator stopped at the lobby while a fire alarm glows. It is not a way out.",
  },
  "q-20-2": {
    src: "/graphics/ans2/q-20-2c.jpg",
    alt: "Safety components on a test bench, the integration half that sits beside the finished car.",
  },
  "q-70-1": {
    src: "/graphics/ans2/q-70-1d.jpg",
    alt: "A new-building elevator large enough for a wheelchair user and a companion, with a wide door.",
  },
  "q-70-2": {
    src: "/graphics/ans2/q-70-2m.jpg",
    alt: "A long elevator car with room for a wheelchair user, other passengers, and a stretcher.",
  },
  "q-70-3": {
    src: "/graphics/ans2/q-70-3d.jpg",
    alt: "Thick decorative wall panels inside an elevator, taking space away from the required car size.",
  },
  "q-70-4": {
    src: "/graphics/ans2/q-70-4o.jpg",
    alt: "Power-operated sliding elevator doors open on their own, with nobody holding them.",
  },
  "q-73-1": {
    src: "/graphics/ans2/q-73-1o.jpg",
    alt: "A standard elevator recalled to the exit floor, doors open, taken out of service during a fire alarm.",
  },
  "q-73-2": {
    src: "/graphics/ans2/q-73-2d.jpg",
    alt: "A standard parked elevator beside a fire-instruction notice, unlike a specially signed evacuation car.",
  },
  "q-72-1": {
    src: "/graphics/ans2/q-72-1b.jpg",
    alt: "A firefighter elevator with a key switch, waiting for the fire service, not for passengers.",
  },
  "q-72-2": {
    src: "/graphics/ans2/q-72-2b.jpg",
    alt: "A basic firefighter car the size of an accessible Type 2 car, not a stretcher car.",
  },
  "q-72-3": {
    src: "/graphics/ans2/q-72-3b.jpg",
    alt: "A dry firefighter shaft. Water is for the fire outside, not a sprinkler inside the well.",
  },
  "q-76p-1": {
    src: "/graphics/ans2/q-76p-1.jpg",
    alt: "A specially built evacuation elevator open as a way out, not only a place to wait.",
  },
  "q-76p-2": {
    src: "/graphics/ans2/q-76p-2.jpg",
    alt: "An older passenger elevator unchanged by a laptop. Software cannot turn it into an evacuation elevator.",
  },
  "q-76p-3": {
    src: "/graphics/ans2/q-76p-3o.jpg",
    alt: "An evacuation elevator responding to a fire alarm, not to floodwater or a collapsed building.",
  },
  "q-76p-4": {
    src: "/graphics/ans2/q-76p-4.jpg",
    alt: "An evacuation elevator with a refuge and an evacuation chair still in place as the backup.",
  },
  "q-76c-1": {
    src: "/graphics/ans2/q-76c-1.jpg",
    alt: "A lower building with one exit to the street, no generator, and one evacuation elevator.",
  },
  "q-76c-2": {
    src: "/graphics/ans2/q-76c-2.jpg",
    alt: "A Class B setup: a larger car, a generator, and a staffed control desk.",
  },
  "q-76c-3": {
    src: "/graphics/ans2/q-76c-3c.jpg",
    alt: "A Class A car sized for a wheelchair user and a companion, next to a longer Class B car.",
  },
  "q-76c-4": {
    src: "/graphics/ans2/q-76c-4.jpg",
    alt: "The mains have failed. With no generator, the car has still travelled to the exit floor and opened.",
  },
  "q-76m-1": {
    src: "/graphics/ans2/q-76m-1c.jpg",
    alt: "An empty evacuation car with its own buttons, ready to run without a driver or a remote desk.",
  },
  "q-76m-2": {
    src: "/graphics/ans2/q-76m-2.jpg",
    alt: "A staffed control desk with camera screens and a microphone linked to the elevator.",
  },
  "q-76m-3": {
    src: "/graphics/ans2/q-76m-3.jpg",
    alt: "A simple drive control inside the elevator panel, for a trained person who is in the building.",
  },
  "q-76b-1": {
    src: "/graphics/ans2/q-76b-1n.jpg",
    alt: "An elevator opening onto a lobby that leads straight out to fresh air.",
  },
  "q-76b-2": {
    src: "/graphics/ans2/q-76b-2.jpg",
    alt: "An elevator leaving a smoke-filled landing and opening at a landing that is still safe.",
  },
  "q-76b-3": {
    src: "/graphics/ans2/q-76b-3.jpg",
    alt: "Backup power bringing an evacuation elevator back into use within a minute.",
  },
  "q-76b-4": {
    src: "/graphics/ans2/q-76b-4q.jpg",
    alt: "A tall gap between two landing doors, with an extra door into the shaft in between.",
  },
  "q-76b-5": {
    src: "/graphics/ans2/q-76b-5.jpg",
    alt: "A protected lobby in front of an evacuation elevator, sealed so people can wait and breathe.",
  },
  "q-28-1": {
    src: "/graphics/ans2/q-28-1b.jpg",
    alt: "An elevator alarm that opens a two-way call to a person who can answer.",
  },
  "q-28-2": {
    src: "/graphics/ans2/q-28-2.jpg",
    alt: "Speech between the car and a person at a desk, so someone can actually assist.",
  },
  "q-reg-28": {
    src: "/graphics/ans2/q-reg-28.jpg",
    alt: "The passenger autodialer in the car, separate from the firefighter telephone.",
  },
  "q-ex-1": {
    src: "/graphics/ans2/q-ex-1c.jpg",
    alt: "An old small elevator being assessed for real hazards, not relabelled as a new evacuation car.",
  },
  "q-ex-2": {
    src: "/graphics/ans2/q-ex-2.jpg",
    alt: "A new elevator fitted into an older, tighter shaft, with extra protection where space is missing.",
  },
  "q-cmp-1": {
    src: "/graphics/ans2/q-cmp-1f.jpg",
    alt: "Three cars on one alarm: one parked, one waiting for the fire brigade, one still working as a way out.",
  },
  "q-cmp-2": {
    src: "/graphics/ans2/q-cmp-2.jpg",
    alt: "A firefighter elevator and an evacuation elevator side by side. One does not replace the other.",
  },
  "q-cmp-3": {
    src: "/graphics/ans2/q-cmp-3.jpg",
    alt: "An evacuation elevator open at the exit so a person can leave without waiting for a helper.",
  },
  "q-reg-puwer": {
    src: "/graphics/ans2/q-reg-puwer.jpg",
    alt: "An examination diary and maintenance tools together. LOLER does not cancel the duty to maintain work equipment.",
  },
  "q-reg-fire": {
    src: "/graphics/ans2/q-reg-fire.jpg",
    alt: "A Scottish block of flats whose fire duty is the Scottish fire law, not the English order.",
  },
  "q-reg-eq": {
    src: "/graphics/ans2/q-reg-eq.jpg",
    alt: "An office elevator standing out of service, the only way up to the meeting rooms.",
  },
  "q-reg-riddor": {
    src: "/graphics/ans2/q-reg-riddor.jpg",
    alt: "Someone has left an elevator unhurt. The report book stays closed because not every incident is reportable.",
  },
  "q-reg-mach": {
    src: "/graphics/ans2/q-reg-machl.jpg",
    alt: "A stairlift and a slow vertical platform, placed on the market as machinery rather than as a lift.",
  },
  "q-reg-cdm": {
    src: "/graphics/ans2/q-reg-cdmb.jpg",
    alt: "A pit designed with a way out, so the danger is removed on the drawing rather than left to the work method.",
  },
  "q-reg-wah": {
    src: "/graphics/ans2/q-reg-wah.jpg",
    alt: "A car top prepared for work, with the elevator locked so it cannot move under the person.",
  },
};

const FALLBACK: Scene = {
  src: "/graphics/practice-20-2.jpg",
  alt: "A passenger elevator in its shaft.",
};

export function PlainSketch({
  questionId,
}: {
  questionId: string;
  skillId?: SkillId;
}) {
  const drawn = ANSWER_ART[questionId] ?? FALLBACK;
  return (
    <figure className="mx-auto max-w-md overflow-hidden rounded-xl bg-night text-night-fg shadow-[var(--shadow-border)]">
      <img src={drawn.src} alt={drawn.alt} className="aspect-video w-full object-cover" />
    </figure>
  );
}
