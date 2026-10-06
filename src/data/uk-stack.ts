import type { StandardId } from "./types";

export type UkLayer = {
  id: "law" | "recipe" | "check";
  kicker: string;
  title: string;
  code: string;
  plain: string;
  statute: string;
  remember: string[];
};

export const UK_LAYERS: UkLayer[] = [
  {
    id: "law",
    kicker: "Who is on the hook",
    title: "The law",
    code: "2014/33/EU",
    plain:
      "Before anyone rides a new elevator, EU regulations — the Lifts Directive — say it must be safe to put on the market. CE marking and a notified body sit here. Once the building is open, fire strategy and access duties talk to the owner — not the factory.",
    statute:
      "The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators and safety components on the market. Harmonised standards such as EN 81-20 confer a presumption of conformity.",
    remember: [
      "A CE mark is not the examination duty.",
      "Part B decides if the fire strategy wants an evacuation elevator.",
      "Part M and the Equality Act decide whether people can get in on a Tuesday.",
    ],
  },
  {
    id: "recipe",
    kicker: "How you build it",
    title: "The recipe",
    code: "BS EN 81 family",
    plain:
      "This is the mark scheme. 20 is the default passenger elevator. 70 is getting in independently. 73 is the standard car parking in a fire. 72 is the firefighters’ tool. 76 is how people who cannot use stairs get out. Say the part. ‘It meets EN 81’ is an unfinished sentence.",
    statute:
      "Designated BS EN 81 parts are the usual route to presumption of conformity with the Lifts Regulations. EN 81-20/50 are the base. Particular applications (70, 71, 72, 73, 76, 77, 28) stack on top. EN 81-21 covers new elevators in existing buildings; 80 and 82 cover existing installations.",
    remember: [
      "20 is the base. Everything else is a particular job.",
      "76 is not 72 with nicer buttons.",
      "73 is what every standard UK passenger car does when the alarm sounds.",
    ],
  },
  {
    id: "check",
    kicker: "Keeping it in service",
    title: "The health check",
    code: "LOLER 1998",
    plain:
      "Once people are riding it, a different duty starts. The owner (or the person who controls the elevator) must have a passenger elevator thoroughly examined, usually every six months, by a competent person. PUWER sits beside it for work equipment. A shiny new 76 car still needs a diary.",
    statute:
      "The Lifting Operations and Lifting Equipment Regulations 1998 require thorough examination of elevators which lift people at least every six months, unless a written scheme specifies otherwise. Defects which are or could become a danger must be reported. PUWER 1998 covers work equipment generally.",
    remember: [
      "People-carrying elevators: typically every six months.",
      "The report is evidence. ‘The contractor looked at it’ is not.",
      "LOLER talks to the person who keeps the elevator in service.",
    ],
  },
];

export type ShaftHotspot = {
  id: string;
  label: string;
  code: string;
  tone: string;
  plain: string;
  to: string;
  params: { id: StandardId };
};

export const SHAFT_HOTSPOTS: ShaftHotspot[] = [
  {
    id: "76",
    label: "Evacuation car",
    code: "EN 81-76",
    tone: "bg-green/90 text-ok-fg",
    plain: "Keeps working for people who cannot use the stairs. Class A or B. Not the firefighter elevator.",
    to: "/library/$id",
    params: { id: "en81-76" },
  },
  {
    id: "72",
    label: "Firefighter car",
    code: "EN 81-72",
    tone: "bg-orange/90 text-accent-fg",
    plain: "The fire brigade takes this one. Water, second power, firefighter key. Complementary to 76, never a substitute.",
    to: "/library/$id",
    params: { id: "en81-72" },
  },
  {
    id: "73",
    label: "Standard car",
    code: "EN 81-73",
    tone: "bg-yellow/90 text-fg",
    plain: "Parks, opens, stays out of the way. This is what a normal UK passenger elevator does in a fire.",
    to: "/library/$id",
    params: { id: "en81-73" },
  },
  {
    id: "loler",
    label: "In service",
    code: "LOLER + Part B / M",
    tone: "bg-yellow/90 text-fg",
    plain: "The diary, the fire strategy, the access duty. New marking on the car does not replace any of this.",
    to: "/library/$id",
    params: { id: "loler" },
  },
];
