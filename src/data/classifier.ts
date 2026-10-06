export type ClassifierAnswers = {
  existing: boolean | null;
  firefightersRequired: boolean | null;
  needEvacuation: boolean | null;
  oneEel: boolean | null;
  secondaryPower: boolean | null;
  remote: boolean | null;
  staffed: boolean | null;
};

export const CLASSIFIER_DEFAULT: ClassifierAnswers = {
  existing: null,
  firefightersRequired: null,
  needEvacuation: null,
  oneEel: null,
  secondaryPower: null,
  remote: null,
  staffed: null,
};

export type Recommendation = {
  headline: string;
  stack: string[];
  mode: string;
  caveats: string[];
  plain: string;
};

export function recommend(a: ClassifierAnswers): Recommendation | null {
  if (a.existing === null || a.needEvacuation === null || a.firefightersRequired === null) {
    return null;
  }
  if (a.existing) {
    return {
      headline: "This is an existing elevator. EN 81-76 is not a sticker.",
      stack: [
        "LOLER diary first — people-carrying elevators, typically every six months",
        "EN 81-80 ranked safety upgrades",
        "EN 81-82 accessibility upgrades where the shaft allows",
        "EN 81-73-style recall behaviour if you can add it",
        "A real assistance / refuge plan for anyone who cannot use stairs",
      ],
      mode: "Keep the human plan. Specify 20 + 70 + 76 only when you replace the elevator.",
      caveats: [
        "You cannot convert a pre-2025 car into 76 with a software patch.",
        "If firefighters already use this shaft, talk to the fire engineer before touching controls.",
      ],
      plain:
        "Old metal, new eyes. Rank what can kill someone, make the car more usable, and write down who helps a wheelchair user when the alarm sounds. 76 waits for the next machine.",
    };
  }

  const stack: string[] = ["EN 81-20 + EN 81-50 (the base new elevator)", "EN 81-70 Type 2 or larger"];
  if (a.firefightersRequired) stack.push("EN 81-72 firefighters elevator — the fire brigade’s tool");
  stack.push("EN 81-73 behaviour on every standard passenger car");

  if (!a.needEvacuation) {
    return {
      headline: "New elevator, no 76 duty in the strategy — yet.",
      stack,
      mode: "Standard cars park on alarm (73). If people who cannot use stairs occupy this building, the strategy is unfinished.",
      caveats: [
        "Access in (70) without a way out is a half-written building.",
        "A later change of use can make 76 suddenly necessary.",
      ],
      plain:
        "You can legally buy a quiet passenger elevator. You should still ask, out loud, how a wheelchair user leaves when the stairs are the enemy.",
    };
  }

  if (a.oneEel === null || a.secondaryPower === null || a.remote === null || a.staffed === null) return null;

  const classA =
    !a.firefightersRequired && a.oneEel && !a.secondaryPower && !a.remote;

  if (a.firefightersRequired) {
    stack.push("EN 81-76 Class B evacuation elevator — complementary to 72, not a substitute");
  } else if (classA) {
    stack.push("EN 81-76 Class A — one exit floor, rescue-to-EEL on power failure, Type 2 car");
  } else {
    stack.push("EN 81-76 Class B — secondary power, larger car, optional extra EELs / remote");
  }

  let mode = "Provide at least one 76 mode.";
  if (a.remote) {
    mode =
      "Remote-assisted is a Class B feature. It needs a person, video and speech whenever the building is occupied — not only office hours.";
  } else if (a.staffed) {
    mode =
      "Driver-assisted can work if the roster is real. Still consider automatic: it is the only independent self-rescue mode, and staff are busy in a fire.";
  } else {
    mode =
      "Unstaffed or lightly staffed: automatic evacuation operation is the honest mode. It is the only one that lets a person leave without waiting for a helper.";
  }

  return {
    headline: classA && !a.firefightersRequired
      ? "Class A evacuation elevator is on the table"
      : "Class B (and maybe 72 as well) — this is not a simple shaft",
    stack,
    mode,
    caveats: [
      "Protected landings, an EEL with a route to open air, signs, voice, water management — the building has a job.",
      "Keep a plan B for when the elevator is unavailable. 76 says so.",
      "This is training, not a design certificate. Sit the fire engineer and the elevator engineer in the same meeting.",
    ],
    plain: classA
      ? "Simple plot, one way out, no generator: Class A can be honest if automatic rescue to the exit floor is real and the landing is still a place you can breathe."
      : "Complicated plot. Power, size, maybe remote, maybe a firefighter elevator too. Do not let a sales sheet collapse 72 and 76 into one cheaper car.",
  };
}
