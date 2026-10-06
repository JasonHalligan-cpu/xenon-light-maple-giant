import type { Lesson, Question, Skill, Standard } from "./types";

export const ASME_SKILLS: Skill[] = [
  {
    id: "asme-family",
    name: "The A17 family",
    floor: "A17",
    blurb: "Which ASME book does which job.",
    relatedStandards: ["a17-1", "asme-ahj"],
    region: "asme",
  },
  {
    id: "asme-duty",
    name: "Who enforces it",
    floor: "AHJ",
    blurb: "The city adopts an edition. The inspector checks that edition.",
    relatedStandards: ["asme-ahj", "a17-2"],
    region: "asme",
  },
  {
    id: "asme-base",
    name: "A new passenger elevator",
    floor: "2",
    blurb: "A17.1 is the code for the new car. Electric and hydraulic are parts of it.",
    relatedStandards: ["a17-1"],
    region: "asme",
  },
  {
    id: "asme-access",
    name: "Getting in",
    floor: "ADA",
    blurb: "Size, doors, and buttons a wheelchair user can use.",
    relatedStandards: ["asme-ada", "a17-1"],
    region: "asme",
  },
  {
    id: "asme-phase1",
    name: "Phase I recall",
    floor: "I",
    blurb: "The ordinary car parks for the fire. It is not a way out.",
    relatedStandards: ["asme-phase1"],
    region: "asme",
  },
  {
    id: "asme-phase2",
    name: "Phase II",
    floor: "II",
    blurb: "The firefighters’ key. Their tool, not the residents’ exit.",
    relatedStandards: ["asme-phase2", "asme-fsae"],
    region: "asme",
  },
  {
    id: "asme-oeo",
    name: "Why occupant evacuation exists",
    floor: "OEO",
    blurb: "A car that stays available so people can leave.",
    relatedStandards: ["asme-oeo", "asme-ibc"],
    region: "asme",
  },
  {
    id: "asme-which",
    name: "Which car the building asks for",
    floor: "IBC",
    blurb: "Fire service access elevator, or occupant evacuation elevator.",
    relatedStandards: ["asme-fsae", "asme-oeo", "asme-ibc"],
    region: "asme",
  },
  {
    id: "asme-run",
    name: "How evacuation runs",
    floor: "OEO",
    blurb: "Occupant evacuation is not Phase II with the key left in.",
    relatedStandards: ["asme-oeo", "asme-phase2"],
    region: "asme",
  },
  {
    id: "asme-alarm",
    name: "The phone in the car",
    floor: "☎",
    blurb: "Two-way talk when someone is stuck. Not the firefighters’ line.",
    relatedStandards: ["a17-1"],
    region: "asme",
  },
  {
    id: "asme-existing",
    name: "Elevators already there",
    floor: "A17.3",
    blurb: "An old car is not made new by quoting the code for a new one.",
    relatedStandards: ["a17-3", "a17-1"],
    region: "asme",
  },
  {
    id: "asme-compare",
    name: "Three cars, one alarm",
    floor: "★",
    blurb: "Phase I parks. Phase II is the key. Occupant evacuation is the way out.",
    relatedStandards: ["asme-phase1", "asme-phase2", "asme-oeo"],
    region: "asme",
  },
];

export const ASME_STANDARDS: Standard[] = [
  {
    id: "a17-1",
    code: "ASME A17.1 / CSA B44",
    title: "Safety Code for Elevators and Escalators",
    everydayTitle: "The code for a new elevator in the United States and Canada",
    family: "base",
    region: "asme",
    oneLiner: "The rule book for a new elevator. It is not EN 81.",
    statute:
      "ASME A17.1 / CSA B44 is the Safety Code for Elevators and Escalators. It covers new elevators, including electric elevators and hydraulic elevators. A state, city, or province adopts an edition. That adopted edition is the one that applies.",
    plain:
      "This is the North American code for a new elevator. A line in EN 81-20 is not a line in A17.1. Ask which edition the city has adopted before you quote a clause.",
    remember: [
      "A17.1 is the new-elevator code.",
      "The edition is the one the authority having jurisdiction adopted.",
      "It is not EN 81.",
    ],
    related: ["asme-ahj", "a17-2", "a17-3"],
  },
  {
    id: "asme-ahj",
    code: "AHJ",
    title: "Authority having jurisdiction",
    everydayTitle: "The city, state, or province that adopts the code and enforces it",
    family: "law",
    region: "asme",
    oneLiner: "There is no single federal switch that turns one edition on everywhere.",
    statute:
      "An authority having jurisdiction adopts an edition of ASME A17.1 / CSA B44 and enforces it. Two cities can be on two different editions.",
    plain:
      "The code does not apply itself. The place adopts an edition, and that place checks the elevator against that edition. Ask which one before you argue a clause.",
    remember: [
      "Ask which edition.",
      "Two cities can differ.",
      "The inspector enforces the adopted edition, not the one you prefer.",
    ],
    related: ["a17-1", "a17-2"],
  },
  {
    id: "a17-2",
    code: "ASME A17.2",
    title: "Guide for Inspection of Elevators, Escalators, and Moving Walks",
    everydayTitle: "How an inspector looks at an elevator",
    family: "law",
    region: "asme",
    oneLiner: "A17.2 is the inspection guide. It is not the code that builds the car.",
    statute:
      "ASME A17.2 is a guide for inspection. It is not a substitute for the adopted edition of A17.1, and it is not the safety code for existing elevators.",
    plain:
      "A17.1 is how a new elevator is built. A17.2 is how someone inspects. Do not hand an inspector the construction code and call it the inspection guide, or the other way round.",
    remember: [
      "Inspection guide, not the construction code.",
      "The adopted A17.1 edition is still the rule for a new car.",
    ],
    related: ["a17-1", "asme-ahj"],
  },
  {
    id: "a17-3",
    code: "ASME A17.3",
    title: "Safety Code for Existing Elevators and Escalators",
    everydayTitle: "The code for an elevator that is already in the building",
    family: "existing",
    region: "asme",
    oneLiner: "An old car is judged as an existing elevator, not as a new one.",
    statute:
      "ASME A17.3 is the safety code for existing elevators and escalators, where the authority having jurisdiction has adopted it. It is not ASME A17.1.",
    plain:
      "Quoting the new-elevator code at a car from 1988 does not make that car new. If the city uses A17.3 for elevators already there, that is the book. Alterations can pull parts of the new code in. Ask which alteration rule applies.",
    remember: [
      "Existing is not new.",
      "A17.3 is the existing-elevator code.",
      "An alteration can change which rules apply.",
    ],
    related: ["a17-1", "asme-ahj"],
  },
  {
    id: "asme-ada",
    code: "ADA / ICC A117.1",
    title: "Accessible elevators",
    everydayTitle: "The rules that let a wheelchair user ride",
    family: "people",
    region: "asme",
    oneLiner: "Car size, door time, and buttons you can reach. Not a fire mode.",
    statute:
      "Accessible elevators are set by the adopted building code and accessibility standard, commonly the ADA Standards and ICC A117.1, together with the accessibility requirements in ASME A17.1. The car operating panel is on a side wall. Controls are within reach. Door timing gives time to enter.",
    plain:
      "This is about getting in and using the buttons. It does not decide what the car does in a fire. A car that meets the accessibility rules can still park itself when the alarm rings.",
    remember: [
      "Accessibility is not a fire mode.",
      "The car panel is on a side wall, within reach.",
      "Door time is part of getting in.",
    ],
    related: ["a17-1", "asme-ibc"],
  },
  {
    id: "asme-phase1",
    code: "Phase I",
    title: "Emergency recall operation",
    everydayTitle: "The ordinary car goes to the recall floor and stays out of service",
    family: "fire",
    region: "asme",
    oneLiner: "Phase I parks the car. It does not evacuate people.",
    statute:
      "Phase I emergency recall operation returns elevators to a designated level and removes them from normal service. It is initiated by a key or by the fire alarm, as the adopted code requires.",
    plain:
      "The alarm rings. The ordinary car comes to the recall floor, opens, and then will not take passenger calls. That is Phase I. It is not a way out, and it is not the firefighters driving the car.",
    remember: [
      "Recall, then out of service.",
      "Not a passenger exit.",
      "Not Phase II.",
    ],
    related: ["asme-phase2", "asme-oeo"],
  },
  {
    id: "asme-phase2",
    code: "Phase II",
    title: "Emergency in-car operation",
    everydayTitle: "Firefighters drive the car with a key",
    family: "fire",
    region: "asme",
    oneLiner: "Phase II is the firefighters’ tool.",
    statute:
      "Phase II emergency in-car operation lets firefighters run the car from inside with a key, after Phase I recall. It is not occupant evacuation operation.",
    plain:
      "The crew put the key in and drive the car. Passengers do not. A key switch on the landing is not an elevator that stays open for people who cannot use the stairs.",
    remember: [
      "Key in the car. Firefighters only.",
      "It follows Phase I.",
      "It is not occupant evacuation.",
    ],
    related: ["asme-phase1", "asme-fsae", "asme-oeo"],
  },
  {
    id: "asme-fsae",
    code: "IBC fire service access elevator",
    title: "Fire service access elevator",
    everydayTitle: "The building code’s car for the fire service",
    family: "fire",
    region: "asme",
    oneLiner: "The building can require a car the fire service can use. That is not the residents’ exit.",
    statute:
      "The International Building Code can require a fire service access elevator. It is for firefighters. It is additional to ordinary Phase I and Phase II, with lobby, power, and water protection as that code requires. It is not an occupant evacuation elevator.",
    plain:
      "A tall building can be told to give the fire service a car they can take upstairs. That car is still their tool. Telling wheelchair users to wait for that car is not an evacuation plan.",
    remember: [
      "For the fire service.",
      "The building code decides when one is required.",
      "It does not replace an occupant evacuation elevator.",
    ],
    related: ["asme-phase2", "asme-ibc", "asme-oeo"],
  },
  {
    id: "asme-oeo",
    code: "Occupant evacuation",
    title: "Occupant evacuation operation",
    everydayTitle: "A car that stays available so people can leave",
    family: "fire",
    region: "asme",
    featured: true,
    oneLiner: "People who cannot use the stairs leave by this car. It is not Phase II.",
    statute:
      "Later editions of ASME A17.1 include occupant evacuation operation. The International Building Code can require occupant evacuation elevators. The elevator code describes how the car runs. The building code decides when the building must have one.",
    plain:
      "This is the way out by elevator. It is not the ordinary car parking, and it is not firefighters driving with a key. Do not sell Phase II as if it were this.",
    remember: [
      "A way out for occupants.",
      "Not Phase I. Not Phase II.",
      "The building code and the elevator code are both in the sentence.",
    ],
    related: ["asme-ibc", "asme-phase1", "asme-phase2"],
  },
  {
    id: "asme-ibc",
    code: "IBC",
    title: "International Building Code",
    everydayTitle: "The building code that asks for the special car",
    family: "law",
    region: "asme",
    oneLiner: "The elevator code says how. The building code often says whether.",
    statute:
      "The International Building Code, as adopted, sets when a building needs a fire service access elevator or occupant evacuation elevators, and the lobby, sign, and power conditions around them. ASME A17.1 sets how the elevator operates.",
    plain:
      "Do not ask the elevator code to invent a lobby the architect left out. The building code is the one that says the building must have the protected space, the power, and which kind of car. A17.1 then says how that car behaves.",
    remember: [
      "Building code: whether, and the lobby.",
      "Elevator code: how the car runs.",
      "Use the edition that place adopted.",
    ],
    related: ["asme-fsae", "asme-oeo", "a17-1"],
  },
];

export const ASME_LESSONS: Lesson[] = [
  {
    id: "asme-family",
    title: "Which ASME book",
    kicker: "ASME",
    minutes: 6,
    skillIds: ["asme-family"],
    standardIds: ["a17-1", "asme-ahj"],
    region: "asme",
    summary: "A17.1 is the new-elevator code. The edition is the one that place adopted. It is not EN 81.",
    sections: [
      {
        heading: "One family, different jobs",
        statute:
          "ASME A17.1 / CSA B44 is the Safety Code for Elevators and Escalators. A17.2 is a guide for inspection. A17.3 is the safety code for existing elevators. Later editions of A17.1 also cover firefighter operation and occupant evacuation operation.",
        plain:
          "If someone says ‘it meets ASME’, ask which book and which edition. A17.1 is how a new elevator is built. A17.2 is how someone inspects. A17.3 is for an elevator already in the building. Phase I, Phase II, and occupant evacuation are different jobs inside that family.",
        why: "A line from EN 81 pasted onto a US job names the wrong code. A line from A17.1 pasted onto a European job does the same thing the other way.",
      },
      {
        heading: "The edition is local",
        statute:
          "A state, city, or province adopts an edition. The authority having jurisdiction enforces that edition.",
        plain:
          "There is no single switch that puts the newest edition on in every city. Two jobs in two cities can be on two editions. Ask which one before you quote a clause.",
        why: "Quoting a clause the city has not adopted is how a specification fails the inspection.",
      },
    ],
    checkQuestionIds: ["q-asme-family-1", "q-asme-family-2"],
  },
  {
    id: "asme-duty",
    title: "Who has to enforce it",
    kicker: "AHJ",
    minutes: 6,
    skillIds: ["asme-duty"],
    standardIds: ["asme-ahj", "a17-2"],
    region: "asme",
    summary: "The authority having jurisdiction adopts the code. The inspector checks the elevator against that edition.",
    sections: [
      {
        heading: "Not a federal diary",
        statute:
          "Enforcement sits with the authority having jurisdiction. ASME A17.2 is a guide for inspection. It does not replace the adopted code.",
        plain:
          "This is not LOLER, and it is not a six-month UK examination with a different cover. The city or province decides the edition and who inspects. The owner still has to keep the elevator in line with what that place requires.",
        why: "Handing over a European declaration, or an A17.1 clause the city has not adopted, does not close an inspection.",
      },
      {
        heading: "Build, inspect, existing",
        statute:
          "A17.1 is the construction code for a new elevator. A17.2 guides inspection. A17.3, where adopted, is the safety code for existing elevators.",
        plain:
          "Three books. New car. Inspection. Elevator already there. Do not use one as if it were the other.",
        why: "The wrong book is how an old car gets specified as if it were new, or a new car gets checked against a guide that is not the adopted code.",
      },
    ],
    checkQuestionIds: ["q-asme-duty-1", "q-asme-duty-2"],
  },
  {
    id: "asme-base",
    title: "The new passenger elevator",
    kicker: "A17.1",
    minutes: 6,
    skillIds: ["asme-base"],
    standardIds: ["a17-1"],
    region: "asme",
    summary: "Every special car starts from the new-elevator code. Electric and hydraulic are parts of A17.1, not a different family.",
    sections: [
      {
        heading: "The base",
        statute:
          "ASME A17.1 / CSA B44 sets the requirements for new electric elevators and new hydraulic elevators, among other equipment. Special operation, such as firefighter operation or occupant evacuation, is additional.",
        plain:
          "A new passenger elevator starts here. Electric or hydraulic is which part of the same code, not a reason to leave the code. Firefighter operation and occupant evacuation are extras on top. They assume the base car.",
        why: "You cannot add a fire mode to a car that does not meet the code for a new elevator.",
      },
      {
        heading: "What the base does not decide",
        statute:
          "Whether a building needs a fire service access elevator or occupant evacuation elevators is a building-code question. A17.1 describes the elevator.",
        plain:
          "The elevator code does not look at the height of the building and decide the fire strategy by itself. The building code asks for the special car. A17.1 says how that car is built and how it runs.",
        why: "A sales sheet that says ‘A17.1, so you do not need the building code’ has skipped the question that decides which car.",
      },
    ],
    checkQuestionIds: ["q-asme-base-1", "q-asme-base-2"],
  },
  {
    id: "asme-access",
    title: "Getting in",
    kicker: "Accessibility",
    minutes: 6,
    skillIds: ["asme-access"],
    standardIds: ["asme-ada", "a17-1"],
    region: "asme",
    summary: "Car size, door time, and a panel you can reach. That does not make the car a way out in a fire.",
    sections: [
      {
        heading: "Reach and time",
        statute:
          "Accessible elevators follow the adopted accessibility standard and the accessibility requirements in A17.1. The car operating panel is on a side wall. Controls are within a reach range. Doors stay open long enough to enter.",
        plain:
          "A wheelchair user has to get in, turn, and use the buttons without a struggle. The panel is on the side wall, not out of reach on the wrong face of the car. The door does not slam shut on the way in.",
        why: "A car that fails this is not accessible, even if the brochure says it meets the elevator code.",
      },
      {
        heading: "Not a fire mode",
        statute:
          "Accessibility requirements do not provide Phase II operation or occupant evacuation operation.",
        plain:
          "Being able to ride the car on a normal day is not the same as the car staying available when the alarm rings. An accessible car still parks on Phase I unless a different mode was specified.",
        why: "Mixing up accessibility and evacuation is how a building gets a car people can enter, and no car they can leave in.",
      },
    ],
    checkQuestionIds: ["q-asme-access-1", "q-asme-access-2"],
  },
  {
    id: "asme-phase1",
    title: "Phase I parks the car",
    kicker: "Phase I",
    minutes: 6,
    skillIds: ["asme-phase1"],
    standardIds: ["asme-phase1"],
    region: "asme",
    summary: "The ordinary car goes to the recall floor and comes out of normal service.",
    sections: [
      {
        heading: "Recall",
        statute:
          "Phase I emergency recall operation returns the elevator to the designated level and removes it from normal passenger service.",
        plain:
          "The alarm sounds. The car comes to the recall floor and opens. Then it will not answer ordinary calls. People use the stairs, unless a different elevator was specified for those who cannot.",
        why: "Telling residents to stay in the ordinary car is telling them to stay in a car that is about to refuse them.",
      },
      {
        heading: "Not the other two",
        statute:
          "Phase I is not Phase II in-car operation, and it is not occupant evacuation operation.",
        plain:
          "Phase I parks. Phase II is the firefighters’ key. Occupant evacuation is the car that stays available so people can leave. Three different manners.",
        why: "One sign in the lobby that says ‘use the elevator’ is wrong for the car that has just parked itself.",
      },
    ],
    checkQuestionIds: ["q-asme-p1-1", "q-asme-p1-2"],
  },
  {
    id: "asme-phase2",
    title: "Phase II is the key",
    kicker: "Phase II",
    minutes: 6,
    skillIds: ["asme-phase2"],
    standardIds: ["asme-phase2", "asme-fsae"],
    region: "asme",
    summary: "Firefighters drive this car. A fire service access elevator is still their tool.",
    sections: [
      {
        heading: "In the car",
        statute:
          "Phase II emergency in-car operation allows firefighters to operate the car from the car operating panel with a key, after Phase I recall.",
        plain:
          "The crew take the car. They use the key inside. Passengers do not ride it as a way out. The landing key that started Phase I is not this step.",
        why: "A key switch is not an evacuation elevator. People who cannot use the stairs are not a fire crew.",
      },
      {
        heading: "The building can ask for their car",
        statute:
          "The International Building Code can require a fire service access elevator. That elevator is for firefighters. It does not replace occupant evacuation elevators.",
        plain:
          "A tall building may have to give the fire service a protected car, with the lobby and the power the building code asks for. That car is still theirs. It is not the residents’ exit.",
        why: "Buying the fire service car and telling wheelchair users to wait for the crew is an old plan, and it is not occupant evacuation.",
      },
    ],
    checkQuestionIds: ["q-asme-p2-1", "q-asme-p2-2"],
  },
  {
    id: "asme-oeo",
    title: "Why occupant evacuation exists",
    kicker: "OEO",
    minutes: 6,
    skillIds: ["asme-oeo"],
    standardIds: ["asme-oeo"],
    region: "asme",
    featured: true,
    summary: "Some people cannot use the stairs. This is the car that stays available so they can leave.",
    sections: [
      {
        heading: "A way out",
        statute:
          "Occupant evacuation operation is elevator operation intended to evacuate occupants. It is included in later editions of ASME A17.1. It is not Phase I and it is not Phase II.",
        plain:
          "The ordinary car has parked. The firefighters have their own key. This third car, if the building specified it, is how people leave when the stairs are not usable for them.",
        why: "If the only cars in the building park or wait for a key, the person who cannot use the stairs has been left in the corridor.",
      },
      {
        heading: "Not EN 81-76",
        statute:
          "Occupant evacuation operation is an ASME and building-code provision. EN 81-76 is a European standard. The words are not interchangeable.",
        plain:
          "The job can look the same in a meeting: people who cannot use stairs leave by elevator. The code number is not the same. Do not write EN 81-76 on a US job and call it done, or write OEO on a European job and call that done.",
        why: "Same picture, wrong book. The inspector is holding the book that place adopted.",
      },
    ],
    checkQuestionIds: ["q-asme-oeo-1", "q-asme-oeo-2"],
  },
  {
    id: "asme-which",
    title: "Which car the building asks for",
    kicker: "IBC",
    minutes: 7,
    skillIds: ["asme-which"],
    standardIds: ["asme-ibc", "asme-fsae", "asme-oeo"],
    region: "asme",
    summary: "The building code decides fire service access, occupant evacuation, or both. One does not delete the other.",
    sections: [
      {
        heading: "Two different requests",
        statute:
          "The International Building Code can require a fire service access elevator, occupant evacuation elevators, or both, depending on the building. They are not substitutes.",
        plain:
          "One car is for the fire service to go up. The other is for occupants to come down. A tall building can need both. Buying only the fire service car does not answer the evacuation question.",
        why: "This is the fork. Treating them as flavours of the same product is how the building gets one car and the wrong job.",
      },
      {
        heading: "The lobby is a building job",
        statute:
          "The building code sets the protected lobby, signage, and power conditions for these elevators. The elevator code does not invent a lobby that was not designed.",
        plain:
          "If the drawing has no protected lobby, the elevator contractor cannot specification-write one into the car. The building has to provide it. Then the car can do the job the code describes.",
        why: "A car without the lobby the code asks for is not the car the building code required.",
      },
    ],
    checkQuestionIds: ["q-asme-which-1", "q-asme-which-2"],
  },
  {
    id: "asme-run",
    title: "How evacuation runs",
    kicker: "OEO",
    minutes: 6,
    skillIds: ["asme-run"],
    standardIds: ["asme-oeo", "asme-phase2"],
    region: "asme",
    summary: "Occupant evacuation is a defined operation. It is not Phase II with the key left in for residents.",
    sections: [
      {
        heading: "Not the firefighters’ key",
        statute:
          "Occupant evacuation operation is separate from Phase II emergency in-car operation. Phase II is restricted to firefighters.",
        plain:
          "You do not evacuate occupants by handing them the firefighters’ key. The evacuation car follows its own operation. The firefighters’ car follows Phase II.",
        why: "Leaving the Phase II key in, and calling that an evacuation plan, puts residents in the firefighters’ car.",
      },
      {
        heading: "It has to be the real operation",
        statute:
          "Where occupant evacuation operation is provided, it has to meet the requirements of the adopted edition, including the building interfaces that edition and the building code require.",
        plain:
          "A sign that says ‘use the elevator’ is not the operation. The car, the alarm interface, the lobby, and the power have to be the ones the adopted edition describes. If any of those is missing, you do not have the mode. You have a sign.",
        why: "The headline is the real operation. Everything else is how not to fake it.",
      },
    ],
    checkQuestionIds: ["q-asme-run-1", "q-asme-run-2"],
  },
  {
    id: "asme-alarm",
    title: "The phone in the car",
    kicker: "Communication",
    minutes: 5,
    skillIds: ["asme-alarm"],
    standardIds: ["a17-1"],
    region: "asme",
    summary: "A stuck passenger needs two-way talk. That line is not the firefighters’ phone.",
    sections: [
      {
        heading: "Someone answers",
        statute:
          "ASME A17.1 requires emergency two-way communications so a person in the car can reach assistance. The communication has to work as that code requires, including on conditions the code names.",
        plain:
          "A bell in a cupboard that nobody hears is not this. The person presses, a person answers, and they can talk. That is the passenger line.",
        why: "Being in a special car is useless if nobody knows you are in it.",
      },
      {
        heading: "A different line for the crew",
        statute:
          "Firefighter communication, where required for firefighter operation, is a separate provision from the passenger emergency communication.",
        plain:
          "The officer and the crew have their own line. Do not count that phone as the button a trapped passenger uses, or count the passenger button as the firefighters’ line.",
        why: "Mixing the two lines is how the wrong person answers, or nobody does.",
      },
    ],
    checkQuestionIds: ["q-asme-alarm-1", "q-asme-alarm-2"],
  },
  {
    id: "asme-existing",
    title: "Elevators already in the shaft",
    kicker: "A17.3",
    minutes: 6,
    skillIds: ["asme-existing"],
    standardIds: ["a17-3", "a17-1"],
    region: "asme",
    summary: "An old car is not made new by quoting A17.1. A17.3 is the existing-elevator code, where it is adopted.",
    sections: [
      {
        heading: "Existing is a different book",
        statute:
          "ASME A17.3 is the safety code for existing elevators and escalators. It applies where the authority having jurisdiction has adopted it. ASME A17.1 applies to new elevators, and to alterations as the adopted code requires.",
        plain:
          "The car from 1988 is not a 2024 car because the specification says A17.1 on the cover. If the city uses A17.3 for elevators already there, that is the book. If the work is an alteration, ask which alteration rules pull the new code in.",
        why: "Pretending an old car meets the new code is how a hazard stays in the shaft with a new label on it.",
      },
      {
        heading: "Inspection is still not construction",
        statute:
          "ASME A17.2 guides inspection. It does not convert an existing elevator into a new elevator.",
        plain:
          "An inspector can find what is wrong. The finding does not, by itself, rebuild the car to the new code. The remedy follows the rule that applies to that elevator: existing, altered, or new.",
        why: "A clean inspection sticker is not a new-elevator certificate.",
      },
    ],
    checkQuestionIds: ["q-asme-old-1", "q-asme-old-2"],
  },
  {
    id: "asme-three",
    title: "Three cars, one alarm",
    kicker: "Compare",
    minutes: 6,
    skillIds: ["asme-compare"],
    standardIds: ["asme-phase1", "asme-phase2", "asme-oeo"],
    region: "asme",
    summary: "Phase I parks. Phase II is the firefighters’ key. Occupant evacuation keeps working for people who cannot use the stairs.",
    sections: [
      {
        heading: "Three manners",
        statute:
          "Phase I emergency recall removes the ordinary elevator from normal service. Phase II lets firefighters operate a car with a key. Occupant evacuation operation, where provided, is for evacuating occupants. A fire service access elevator is for the fire service and does not replace occupant evacuation.",
        plain:
          "Same alarm. The ordinary car parks. The firefighters’ car waits for the key. The evacuation car, if you specified one, stays available for people who cannot use the stairs. Three signs. Three jobs.",
        why: "One lobby with one message and three different machines is how someone boards the wrong door.",
      },
      {
        heading: "Do not swap them",
        statute:
          "Phase II and a fire service access elevator are not substitutes for occupant evacuation elevators. Occupant evacuation operation is not a substitute for the fire service car the building code requires.",
        plain:
          "A tall building can need the fire service car and a way out for occupants. Buying only one and renaming it does not answer both questions.",
        why: "The codes are a fork, not a stack you can collapse into the cheaper car.",
      },
    ],
    checkQuestionIds: ["q-asme-cmp-1", "q-asme-cmp-2"],
  },
];

export const ASME_QUESTIONS: Question[] = [
  {
    id: "q-asme-family-1",
    skillId: "asme-family",
    region: "asme",
    prompt: "A spec says the elevator is ‘fully ASME compliant’. What do you still need?",
    choices: [
      "Nothing. ASME is one clause.",
      "Which book and which edition the city adopted.",
      "Only the paint colour.",
      "EN 81-20, because it is the same text.",
    ],
    answer: 1,
    statute: "ASME A17.1, A17.2, and A17.3 are different documents. An authority having jurisdiction adopts an edition.",
    plain: "ASME is a family. A17.1 builds a new car. A17.2 guides inspection. A17.3 is for an elevator already there. The edition is the one that place adopted.",
    why: "Without the book and the edition, you do not know what was bought.",
  },
  {
    id: "q-asme-family-2",
    skillId: "asme-family",
    region: "asme",
    prompt: "Which document is the safety code for a new elevator in the US and Canada?",
    choices: [
      "EN 81-20",
      "ASME A17.2",
      "ASME A17.1 / CSA B44",
      "LOLER",
    ],
    answer: 2,
    statute: "ASME A17.1 / CSA B44 is the Safety Code for Elevators and Escalators.",
    plain: "A17.1 is the new-elevator code. A17.2 is the inspection guide. EN 81 and LOLER are the other family.",
    why: "Naming the inspection guide as the construction code puts the wrong book on the drawing.",
  },
  {
    id: "q-asme-duty-1",
    skillId: "asme-duty",
    region: "asme",
    prompt: "Who decides which edition of A17.1 applies in a city?",
    choices: [
      "The manufacturer, worldwide.",
      "The authority having jurisdiction that adopted it.",
      "EN 81.",
      "Whoever printed the brochure.",
    ],
    answer: 1,
    statute: "An authority having jurisdiction adopts and enforces an edition.",
    plain: "The city, state, or province adopts an edition and enforces that edition. Two cities can differ.",
    why: "Quoting an edition the city has not adopted fails the inspection.",
  },
  {
    id: "q-asme-duty-2",
    skillId: "asme-duty",
    region: "asme",
    prompt: "ASME A17.2 is…",
    choices: [
      "The code for a new elevator.",
      "A guide for inspection.",
      "The European lifts directive.",
      "Occupant evacuation operation.",
    ],
    answer: 1,
    statute: "ASME A17.2 is a guide for inspection of elevators, escalators, and moving walks.",
    plain: "A17.2 is how someone inspects. A17.1 is how a new elevator is built.",
    why: "Using the inspection guide as the construction code, or the other way round, names the wrong book.",
  },
  {
    id: "q-asme-base-1",
    skillId: "asme-base",
    region: "asme",
    prompt: "A new hydraulic passenger elevator in a US city is covered first by…",
    choices: [
      "EN 81-2 only.",
      "The adopted edition of ASME A17.1 / CSA B44.",
      "A17.3, because hydraulic means existing.",
      "Phase II.",
    ],
    answer: 1,
    statute: "ASME A17.1 includes requirements for new hydraulic elevators as well as electric elevators.",
    plain: "Hydraulic is a part of the new-elevator code, not a reason to leave it. The edition is the one the city adopted.",
    why: "Calling every hydraulic car ‘existing’ skips the code for a new one.",
  },
  {
    id: "q-asme-base-2",
    skillId: "asme-base",
    region: "asme",
    prompt: "Who decides that a building needs an occupant evacuation elevator?",
    choices: [
      "The building code, as adopted.",
      "The car paint specification.",
      "Phase I, by itself.",
      "A17.2, because it is an inspection.",
    ],
    answer: 0,
    statute: "The International Building Code can require occupant evacuation elevators. A17.1 describes the operation.",
    plain: "The building code asks for the car. The elevator code says how it runs. One sentence needs both.",
    why: "Asking A17.1 to invent the building’s fire strategy skips the building code.",
  },
  {
    id: "q-asme-access-1",
    skillId: "asme-access",
    region: "asme",
    prompt: "Where does the car operating panel go in an accessible car?",
    choices: [
      "On the ceiling.",
      "On a side wall, within reach.",
      "Only on the landing, outside the car.",
      "On the back wall, as high as it will fit.",
    ],
    answer: 1,
    statute: "Accessibility standards and A17.1 place the car operating panel on a side wall within the required reach.",
    plain: "The panel is on the side wall, where a seated person can use it. It is not out of reach, and it is not only a landing button.",
    why: "A panel in the wrong place means the car is not usable, whatever the brochure says.",
  },
  {
    id: "q-asme-access-2",
    skillId: "asme-access",
    region: "asme",
    prompt: "An accessible car, with no other mode specified, does what when the fire alarm rings?",
    choices: [
      "Becomes an occupant evacuation elevator.",
      "Follows Phase I and comes out of normal service.",
      "Hands the passenger the firefighters’ key.",
      "Ignores the alarm because the buttons are reachable.",
    ],
    answer: 1,
    statute: "Accessibility does not provide Phase II or occupant evacuation operation.",
    plain: "Being able to ride on a normal day is not a fire mode. The ordinary accessible car still parks.",
    why: "Mixing accessibility and evacuation leaves people able to enter, and unable to leave.",
  },
  {
    id: "q-asme-p1-1",
    skillId: "asme-phase1",
    region: "asme",
    prompt: "Phase I does what?",
    choices: [
      "Lets residents drive the car with a key.",
      "Returns the car to the recall floor and takes it out of normal service.",
      "Is the same as occupant evacuation.",
      "Inspects the existing car under A17.3.",
    ],
    answer: 1,
    statute: "Phase I emergency recall returns elevators to a designated level and removes them from normal service.",
    plain: "The car comes home and then refuses ordinary calls. People use the stairs, unless another car was specified.",
    why: "Staying in that car is staying in a car that is about to park.",
  },
  {
    id: "q-asme-p1-2",
    skillId: "asme-phase1",
    region: "asme",
    prompt: "Phase I is the same operation as…",
    choices: [
      "None of the others. It only parks the car.",
      "Phase II.",
      "Occupant evacuation.",
      "A17.2 inspection.",
    ],
    answer: 0,
    statute: "Phase I, Phase II, and occupant evacuation operation are different.",
    plain: "Phase I parks. Phase II is the firefighters’ key. Occupant evacuation is the way out.",
    why: "One sign for three machines sends someone to the wrong door.",
  },
  {
    id: "q-asme-p2-1",
    skillId: "asme-phase2",
    region: "asme",
    prompt: "Phase II is for…",
    choices: [
      "Any resident who finds the key.",
      "Firefighters operating the car from inside.",
      "The six-month examination.",
      "A passenger who is stuck and needs the phone.",
    ],
    answer: 1,
    statute: "Phase II emergency in-car operation lets firefighters run the car with a key.",
    plain: "The crew drive it. Passengers do not. The passenger phone is a different line.",
    why: "A key is not a way out for people who cannot use the stairs.",
  },
  {
    id: "q-asme-p2-2",
    skillId: "asme-phase2",
    region: "asme",
    prompt: "A fire service access elevator is…",
    choices: [
      "The residents’ evacuation car.",
      "A car for the fire service, required by the building code when that code says so.",
      "Phase I on an ordinary car.",
      "ASME A17.3.",
    ],
    answer: 1,
    statute: "The International Building Code can require a fire service access elevator for firefighters. It is not an occupant evacuation elevator.",
    plain: "It is the fire service car. It does not replace a car for occupants to leave.",
    why: "Telling wheelchair users to wait for that car is not an evacuation plan.",
  },
  {
    id: "q-asme-oeo-1",
    skillId: "asme-oeo",
    region: "asme",
    prompt: "Occupant evacuation operation is for…",
    choices: [
      "Parking the ordinary car.",
      "Evacuating occupants, including people who cannot use the stairs.",
      "Only the firefighters’ key.",
      "Inspecting an existing elevator.",
    ],
    answer: 1,
    statute: "Occupant evacuation operation is for evacuating occupants. It is not Phase I or Phase II.",
    plain: "This is the way out by elevator. The ordinary car has parked. The firefighters have their own key.",
    why: "Without this car, the person who cannot use the stairs is left in the corridor.",
  },
  {
    id: "q-asme-oeo-2",
    skillId: "asme-oeo",
    region: "asme",
    prompt: "EN 81-76 on a US specification means…",
    choices: [
      "The job is done, because the text is the same as occupant evacuation.",
      "The wrong code family. Occupant evacuation is the ASME and building-code provision.",
      "Phase I.",
      "A17.2.",
    ],
    answer: 1,
    statute: "EN 81-76 and ASME occupant evacuation operation are not interchangeable.",
    plain: "The picture can match. The book does not. Use the code that place adopted.",
    why: "The inspector is holding the adopted book, not the European one.",
  },
  {
    id: "q-asme-which-1",
    skillId: "asme-which",
    region: "asme",
    prompt: "A tall building needs a fire service access elevator. The client wants only occupant evacuation instead. You say…",
    choices: [
      "Yes. One deletes the other.",
      "No. The building can need both. One is not a substitute.",
      "Yes, if the buttons are reachable.",
      "Yes, if you rename Phase I.",
    ],
    answer: 1,
    statute: "A fire service access elevator and occupant evacuation elevators are not substitutes.",
    plain: "One car is for the fire service. The other is for occupants. A tall building can need both.",
    why: "Collapsing them into the cheaper car leaves one job undone.",
  },
  {
    id: "q-asme-which-2",
    skillId: "asme-which",
    region: "asme",
    prompt: "The protected lobby was not drawn. Who has to provide it?",
    choices: [
      "The elevator code, by adding a sentence in the controller.",
      "The building, because the building code asks for that lobby.",
      "The passenger, on the day.",
      "A17.2.",
    ],
    answer: 1,
    statute: "The building code sets the lobby. The elevator code does not invent one.",
    plain: "No lobby, no compliant special car. The drawing has to show the space.",
    why: "A car without the lobby the code asks for is not the car that was required.",
  },
  {
    id: "q-asme-run-1",
    skillId: "asme-run",
    region: "asme",
    prompt: "Can residents evacuate by using the Phase II key?",
    choices: [
      "Yes. That is occupant evacuation.",
      "No. Phase II is for firefighters. Evacuation is a different operation.",
      "Yes, if the car is accessible.",
      "Yes, because Phase I already parked.",
    ],
    answer: 1,
    statute: "Phase II is restricted to firefighters. Occupant evacuation operation is separate.",
    plain: "Do not hand residents the firefighters’ key and call it a plan.",
    why: "That puts occupants in the firefighters’ car.",
  },
  {
    id: "q-asme-run-2",
    skillId: "asme-run",
    region: "asme",
    prompt: "A sign that says ‘use the elevator in a fire’ is…",
    choices: [
      "Enough, even if the car, lobby, and power were never specified.",
      "Not the operation. The adopted edition has to be met.",
      "Phase I.",
      "A17.3.",
    ],
    answer: 1,
    statute: "Occupant evacuation operation has to meet the adopted edition, including the building interfaces.",
    plain: "A sign is not the mode. The car, the alarm interface, the lobby, and the power have to be real.",
    why: "The headline is the real operation. A sign is how to fake it.",
  },
  {
    id: "q-asme-alarm-1",
    skillId: "asme-alarm",
    region: "asme",
    prompt: "The passenger emergency communication has to…",
    choices: [
      "Be a bell nobody answers.",
      "Let a person in the car talk to someone who can help.",
      "Be the firefighters’ radio only.",
      "Replace Phase II.",
    ],
    answer: 1,
    statute: "A17.1 requires emergency two-way communications from the car.",
    plain: "Press, and a person answers. A bell in a cupboard is not that.",
    why: "A special car is useless if nobody knows you are in it.",
  },
  {
    id: "q-asme-alarm-2",
    skillId: "asme-alarm",
    region: "asme",
    prompt: "The firefighters’ communication line is…",
    choices: [
      "The same button a trapped passenger uses.",
      "A separate line from the passenger emergency phone.",
      "Phase I.",
      "The inspection guide.",
    ],
    answer: 1,
    statute: "Firefighter communication is separate from passenger emergency communication.",
    plain: "The crew’s line and the passenger’s line are not the same button.",
    why: "Mixing them is how the wrong person answers.",
  },
  {
    id: "q-asme-old-1",
    skillId: "asme-existing",
    region: "asme",
    prompt: "An elevator installed in 1988 is specified as ‘A17.1 current edition’ with no alteration. That is…",
    choices: [
      "Correct, because the newest code always replaces the old car.",
      "Wrong. An existing car follows the existing-elevator rules the city adopted, unless the work is an alteration that pulls the new code in.",
      "Phase II.",
      "EN 81-80, automatically.",
    ],
    answer: 1,
    statute: "A17.3 is the safety code for existing elevators where adopted. A17.1 applies to new elevators and to alterations as the code requires.",
    plain: "A new label does not rebuild an old car. Ask whether the work is an alteration, and which book the city uses for elevators already there.",
    why: "Pretending the old car is new leaves the hazard in the shaft.",
  },
  {
    id: "q-asme-old-2",
    skillId: "asme-existing",
    region: "asme",
    prompt: "A passed inspection under the inspection guide means…",
    choices: [
      "The car was rebuilt to the latest A17.1.",
      "It was inspected. It was not turned into a new elevator by the inspection.",
      "Occupant evacuation was added.",
      "EN 81 applies.",
    ],
    answer: 1,
    statute: "A17.2 guides inspection. It does not convert an existing elevator into a new one.",
    plain: "A sticker is not a new-elevator certificate.",
    why: "The remedy still follows existing, altered, or new, whichever applies.",
  },
  {
    id: "q-asme-cmp-1",
    skillId: "asme-compare",
    region: "asme",
    prompt: "Alarm sounds. What is the right order: ordinary car, firefighters’ car, evacuation car?",
    choices: [
      "All three keep taking passenger calls.",
      "Parks. Firefighters’ key. Way out, if that car was specified.",
      "The ordinary car becomes the evacuation car because it is accessible.",
      "They are three names for Phase I.",
    ],
    answer: 1,
    statute: "Phase I parks. Phase II is firefighter operation. Occupant evacuation, where provided, evacuates occupants.",
    plain: "Same alarm, three manners. Park. Key. Way out.",
    why: "One message for three cars is how someone boards the wrong door.",
  },
  {
    id: "q-asme-cmp-2",
    skillId: "asme-compare",
    region: "asme",
    prompt: "Can Phase II stand in for occupant evacuation?",
    choices: [
      "Yes, if the key is left in.",
      "No. One is the firefighters’ tool. The other is the occupants’ way out.",
      "Yes, because both happen during a fire.",
      "Yes, if the car has a phone.",
    ],
    answer: 1,
    statute: "Phase II and occupant evacuation are not substitutes. A fire service access elevator does not replace occupant evacuation elevators.",
    plain: "The firefighters’ car and the way-out car can both be needed. One does not delete the other.",
    why: "They are a fork, not a stack you can collapse into one cheaper car.",
  },
];

export const ASME_TEST_IDS = [
  "q-asme-family-1",
  "q-asme-duty-1",
  "q-asme-base-1",
  "q-asme-access-1",
  "q-asme-access-2",
  "q-asme-p1-1",
  "q-asme-p2-1",
  "q-asme-p2-2",
  "q-asme-oeo-1",
  "q-asme-which-1",
  "q-asme-run-1",
  "q-asme-cmp-1",
] as const;

export const ASME_TEST_PASS = 10;
