import type { Skill } from "./types";
import { ASME_SKILLS } from "./asme";

export const SKILLS: Skill[] = [
  {
    id: "family-map",
    name: "The EN 81 family",
    floor: "L",
    blurb: "Which part of the shaft does each standard actually cover.",
    relatedStandards: ["directive", "en81-20", "en81-50"],
  },
  {
    id: "dutyholder",
    name: "Who is on the hook",
    floor: "G",
    blurb: "Directive, LOLER, PUWER — the people, not the metal.",
    relatedStandards: ["directive", "loler"],
  },
  {
    id: "en81-20",
    name: "The base passenger elevator",
    floor: "20",
    blurb: "The car, the well, the doors — what every new elevator starts from.",
    relatedStandards: ["en81-20", "en81-50"],
  },
  {
    id: "en81-70",
    name: "Getting in independently",
    floor: "70",
    blurb: "Car types, doors, buttons a wheelchair user can actually use.",
    relatedStandards: ["en81-70", "part-m"],
  },
  {
    id: "en81-73",
    name: "Standard elevators in a fire",
    floor: "73",
    blurb: "Why a normal elevator parks itself and refuses to help.",
    relatedStandards: ["en81-73", "part-b"],
  },
  {
    id: "en81-72",
    name: "Firefighter elevators",
    floor: "72",
    blurb: "The elevator the fire brigade take upstairs, not the one you take down.",
    relatedStandards: ["en81-72", "part-b"],
  },
  {
    id: "en81-76-purpose",
    name: "Why 76 exists",
    floor: "76",
    blurb: "Self-rescue for people who cannot use the stairs.",
    relatedStandards: ["en81-76"],
  },
  {
    id: "en81-76-class",
    name: "Class A and Class B",
    floor: "76",
    blurb: "Simple building versus complex building — pick the right car.",
    relatedStandards: ["en81-76"],
  },
  {
    id: "en81-76-modes",
    name: "Three ways out",
    floor: "76",
    blurb: "Automatic, driver-assisted, remote-assisted.",
    relatedStandards: ["en81-76"],
  },
  {
    id: "en81-76-building",
    name: "EEL, power, water, doors",
    floor: "76",
    blurb: "The building has to play its part, not just the elevator.",
    relatedStandards: ["en81-76", "part-b"],
  },
  {
    id: "en81-28",
    name: "The alarm in the car",
    floor: "28",
    blurb: "Two-way talk when someone is stuck — not a bell that nobody hears.",
    relatedStandards: ["en81-28"],
  },
  {
    id: "en81-31",
    name: "Goods only, but you can step in",
    floor: "31",
    blurb: "A lift for goods. A person may enter to load it. They are not a passenger.",
    relatedStandards: ["en81-31", "en81-20", "machinery"],
  },
  {
    id: "existing",
    name: "Old elevators, new duties",
    floor: "80",
    blurb: "You cannot pretend a 1980s car is a 2025 car. Rank the hazards.",
    relatedStandards: ["en81-80", "en81-82", "en81-21"],
  },
  {
    id: "compare",
    name: "72, 73, and 76 together",
    floor: "★",
    blurb: "Which elevator does what when the alarm sounds.",
    relatedStandards: ["en81-72", "en81-73", "en81-76"],
  },
  ...ASME_SKILLS,
];

export const SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s])) as Record<
  Skill["id"],
  Skill
>;
