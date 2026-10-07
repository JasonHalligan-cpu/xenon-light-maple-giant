import type { Standard } from "./types";
import { ASME_STANDARDS } from "./asme";

export const STANDARDS: Standard[] = [
  {
    id: "directive",
    code: "2014/33/EU",
    title: "Lifts Directive — EU regulations",
    everydayTitle: "The law that says an elevator must be safe before it ever carries a person",
    family: "law",
    oneLiner: "Puts essential safety on the manufacturer. Standards like EN 81 show one way to meet it.",
    statute:
      "The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators and safety components on the market. Harmonised standards such as EN 81-20 confer a presumption of conformity. A notified body is involved for most elevator conformity routes. CE marking is not a maintenance certificate.",
    plain:
      "Think of the Directive as the exam the elevator must pass before anyone is allowed to ride it. EN 81 is the mark scheme. Pass the mark scheme and the examiner (the notified body) will usually accept you have passed the exam. Once the elevator is in a building, different law takes over — LOLER, PUWER, fire law — because a safe new elevator can become an unsafe old one.",
    remember: [
      "Standards are the how. The Directive is the must.",
      "A new elevator and an old elevator live under different paperwork.",
      "Marking on the car is not a substitute for thorough examination.",
    ],
    related: ["en81-20", "loler"],
  },
  {
    id: "loler",
    code: "LOLER 1998",
    title: "Lifting Operations and Lifting Equipment Regulations",
    everydayTitle: "The six-month health check for elevators that carry people",
    family: "law",
    oneLiner: "Owners must have passenger elevators thoroughly examined, usually every six months.",
    statute:
      "LOLER places duties on those who own, operate or have control of lifting equipment. Elevators which lift people require thorough examination by a competent person at least every six months, unless a written scheme specifies otherwise. Defects which are or could become a danger must be reported. PUWER sits alongside it for work equipment generally.",
    plain:
      "If you are the person who decides the elevator stays in service, LOLER is talking to you, not to the manufacturer. A competent person (often from an inspection body) looks at the real machine, not the brochure, twice a year for people-carrying elevators. They write a report. If they find something dangerous, you stop using it. This is why a shiny EN 81-76 car still needs a diary.",
    remember: [
      "People-carrying elevators: typically every 6 months.",
      "The report is evidence. ‘The contractor looked at it’ is not.",
      "PUWER covers the workplace equipment duties around it.",
    ],
    related: ["directive", "en81-80"],
  },
  {
    id: "en81-20",
    code: "EN 81-20",
    title: "Passenger and goods passenger elevators",
    everydayTitle: "The recipe for a modern passenger elevator",
    family: "base",
    oneLiner: "The base construction standard that replaced EN 81-1 and EN 81-2.",
    statute:
      "EN 81-20 is the current base for a new passenger or goods passenger elevator that stays in the building. Pair it with EN 81-50, which is where the calculations and the tests on the safety parts live. It replaced the older electric and hydraulic parts, EN 81-1 and EN 81-2. The other EN 81 parts each add one job on top of this base.",
    plain:
      "This is the default elevator. Shaft strength, pit, headroom, car, doors, brakes, overspeed, lighting, emergency lowering — the lot. Every specialist elevator you will meet (accessible, firefighter, evacuation) is ‘EN 81-20, plus extras’. If someone says ‘it meets EN 81’ and cannot say which part, they have not finished the sentence.",
    remember: [
      "20 is the base. 50 is how you prove the parts.",
      "1 and 2 are the grandparents. New cars are 20.",
      "Particular applications (70, 72, 73, 76…) stack on top.",
    ],
    related: ["en81-50", "en81-21"],
  },
  {
    id: "en81-21",
    code: "EN 81-21",
    title: "New passenger elevators in existing buildings",
    everydayTitle: "How to squeeze a safe new elevator into an old shaft",
    family: "existing",
    oneLiner: "Alternative measures when a listed building will not give you a modern pit or headroom.",
    statute:
      "EN 81-21 is the part for a new elevator going into an old building that cannot give you a modern pit, headroom, or shaft size. Other protections stand in so the safety level stays level with EN 81-20. It is not a reason to leave an old car as it is.",
    plain:
      "Old buildings were not poured around a modern elevator well. 21 is the honest compromise: extra protection (for example, retractable stops, inspection controls, reduced-clearance protection) instead of pretending the pit has a modern refuge space. It is for new machines in old buildings, not a free pass to keep a dangerous 1970s car.",
    remember: [
      "Existing building, new elevator: look at 21.",
      "Existing elevator, old hazards: look at 80 and 82.",
      "Equivalent safety, not ‘close enough’.",
    ],
    related: ["en81-20", "en81-80"],
  },
  {
    id: "en81-31",
    code: "EN 81-31:2024",
    title: "Accessible goods only lifts",
    everydayTitle: "Goods only. A person may step in to load it. They do not ride.",
    family: "base",
    oneLiner: "A new goods lift a person can enter, not a passenger car and not a tiny service lift.",
    statute:
      "EN 81-31:2024 is the safety rules for a new accessible goods only lift: traction, positive drive or hydraulic, permanently installed, one load-carrying area, goods only, rigid guides, not more than 15° from vertical, rated speed not over 1 m/s, rated load over 300 kg. It is not for carrying persons. The carrier is accessible if the floor is over 1 m², or the depth is over 1 m, or the clear height is over 1.20 m. With no roof, it is accessible if the landing-door opening is over 1.20 m high. Type A is limited to 0.30 m/s. Type B may run up to 1.0 m/s.",
    plain:
      "EN 81-31 is a goods lift, not a passenger lift. The load travels. A person may step in only to load or unload, then step out. They do not ride. If the car is big enough to walk into, this is the part that applies. If people are meant to ride, use EN 81-20. Type A must not go faster than 0.30 m/s. Type B may go up to 1 m/s. This part is for a new lift that a person loads by hand. It is not for a lift that loads itself, for example on rollers. It is not for loose sand or gravel tipped in as a bulk load. It is not for a lift already installed.",
    remember: [
      "Goods only. People may load it. They do not ride.",
      "Accessible means big enough to step into: over 1 m², or over 1 m deep, or over 1.20 m high.",
      "Type A is 0.30 m/s. Type B is up to 1 m/s. Neither is EN 81-20.",
    ],
    related: ["en81-20", "machinery"],
  },
  {
    id: "en81-28",
    code: "EN 81-28",
    title: "Remote alarm on passenger elevators",
    everydayTitle: "The button that must reach a human, not a void",
    family: "people",
    oneLiner: "Two-way alarm so a trapped passenger can talk to a rescue service.",
    statute:
      "EN 81-28 is the alarm part. Someone stuck in a passenger or goods passenger car has to be able to reach a rescue service. The call works both ways, the car can be identified, the alarm still runs for a set time if the normal supply fails, and stray presses are filtered so the rescue desk is not swamped.",
    plain:
      "A bell in the basement that nobody hears is not an alarm. 28 wants a conversation: you press, a person answers, they know which elevator you are in, and they can still hear you if the building power has died. That is why evacuation and firefighter elevators still care about communication — being in a special car is useless if nobody knows you are there.",
    remember: [
      "Two-way speech, not a one-way buzzer.",
      "Works on backup power.",
      "The rescue service has to know which car called.",
    ],
    related: ["en81-20", "en81-76"],
  },
  {
    id: "en81-50",
    code: "EN 81-50",
    title: "Design rules, calculations, examinations and tests",
    everydayTitle: "50 is the integration half of the base standard",
    family: "base",
    oneLiner: "The integration half: how the safety parts are checked before the elevator is installed.",
    statute:
      "EN 81-50 is used with EN 81-20. It gives design rules, calculations, examinations and tests of elevator components — safety gears, overspeed governors, buffers, landing-door locking devices, electronic PESSRAL, and so on.",
    plain:
      "A new passenger elevator has one base standard, split in two. EN 81-20 is the building half: how the elevator is designed, built and installed. EN 81-50 is the integration half: the calculations and tests on the safety parts, done before that elevator is put in the building.",
    remember: [
      "20 and 50 go together.",
      "The integration checks happen before the elevator reaches the building.",
    ],
    related: ["en81-20"],
  },
  {
    id: "en81-58",
    code: "EN 81-58",
    title: "Landing door fire resistance",
    everydayTitle: "The landing door as a fire door",
    family: "fire",
    oneLiner: "A unified test for how long landing doors hold back fire.",
    statute:
      "EN 81-58 provides a method of testing the fire resistance of elevator landing doors. Fire strategy documents (and EN 81-72 / 76 landing protection) rely on doors that have been shown to hold integrity and insulation for a stated period.",
    plain:
      "An elevator landing is a hole in a fire-resisting wall. 58 is the test that says the door in that hole will not become the shortcut the fire was looking for. Evacuation and firefighter elevators care about this because people will be standing on the landing while the rest of the building is in trouble.",
    remember: [
      "The landing door is part of the building’s fire box.",
      "A pretty car door is not the fire door. The landing door is.",
    ],
    related: ["en81-72", "en81-76"],
  },
  {
    id: "en81-70",
    code: "EN 81-70",
    title: "Accessibility to elevators including persons with disability",
    everydayTitle: "Can a person get in, ride, and get out without help",
    family: "people",
    oneLiner: "Car types, door widths, contrast, and controls for independent use.",
    statute:
      "EN 81-70:2021+A1:2022 sets additional requirements to EN 81-20 for accessible passenger elevators. Table 3 defines car types. Type 1 (1000 × 1300 mm, 450 kg, 800 mm door) is only for constrained existing buildings. Type 2 (1100 × 1400 mm, 630 kg, 900 mm door) is the minimum for new buildings and takes a wheelchair user plus an accompanying person. Types 3–5 grow the car for stretchers, turning, and class C wheelchairs. Doors are automatic horizontal sliding. Decorative finishes may not eat more than 15 mm off the stated sizes. Contrast, lighting of controls, and accessibility functions on destination-control systems are specified.",
    plain:
      "70 is the difference between ‘there is an elevator’ and ‘I can use the elevator’. A Type 1 car is a tight existing-building compromise — one wheelchair, no companion. New buildings should start at Type 2. If you need a stretcher, you are looking at Type 3. If a wheelchair has to turn around inside, Type 4 or 5. Buttons you cannot see or reach do not count. EN 81-76 borrows these car types: Class A evacuation elevators start at Type 2; Class B at Type 3 or 4.",
    remember: [
      "Type 2 is the new-build floor, not Type 1.",
      "Door width and car size are a pair. One without the other fails.",
      "76 picks its cars from 70’s table.",
    ],
    related: ["part-m", "en81-76", "en81-82"],
  },
  {
    id: "en81-71",
    code: "EN 81-71",
    title: "Vandal resistant elevators",
    everydayTitle: "The elevator that is expected to be kicked",
    family: "people",
    oneLiner: "Stronger finishes, controls and doors where misuse is foreseeable.",
    statute:
      "EN 81-71 adds requirements to EN 81-20 for vandal-resistant passenger and goods passenger elevators, typically in categories according to the expected level of vandalism (materials, security of fixtures, resistance of doors and car walls).",
    plain:
      "A hospital car and a car park car do not live the same life. 71 is for the car park: thicker skins, controls that cannot be levered off, doors that still close after a boot. Accessibility (70) and vandal resistance (71) often have to be designed together, because a stainless fortress can become unusable for a person who needs contrast and a large button.",
    remember: [
      "Vandal category is a design input, not a badge.",
      "Strength must not erase accessibility.",
    ],
    related: ["en81-20", "en81-70"],
  },
  {
    id: "en81-72",
    code: "EN 81-72",
    title: "Firefighters elevators",
    everydayTitle: "The elevator the fire service drive, under their control",
    family: "fire",
    oneLiner: "Protected well, secondary power, water protection, fire-service communications.",
    statute:
      "Places the elevator under fire service control.",
    plain:
      "A firefighter elevator is the fire brigade's tool, not a way out for residents. They take it over with a key and ride it up to the bridgehead: the protected floor, usually two floors below the fire, where the crew start their attack. It has to keep working while water from the firefighting above runs down the shaft, so it has a second power supply, a pit that drains, and a phone to fire control. A fire strategy may still use it to move people. That does not make it an EN 81-76 evacuation elevator. Mix the two up and the building gets the wrong car.",
    remember: [
      "Firefighters control it. Passengers do not self-rescue in it.",
      "Water in the well is assumed. Design for it.",
      "Secondary power is not optional.",
    ],
    related: ["en81-73", "en81-76", "part-b"],
  },
  {
    id: "en81-73",
    code: "EN 81-73",
    title: "Behaviour of elevators in the event of fire",
    everydayTitle: "What a normal elevator does when the fire alarm sounds",
    family: "fire",
    oneLiner: "Recall to a designated landing, park, and stay out of the way.",
    statute:
      "Recalls the elevator and places the elevator out of service.",
    plain:
      "This is why the poster still says ‘do not use the elevator in a fire’ for standard cars. 73 is the elevator agreeing with the poster: it goes to a safe floor, opens, and stops being an elevator until a person resets it. It is doing the right thing for a car that has no extra power, no protected lobby, and no water protection. 76 is the exception you have to design, not the default.",
    remember: [
      "Standard elevator + fire alarm = park at the designated floor.",
      "73 is behaviour. 72 and 76 are special machines.",
      "The poster and the controller must tell the same story.",
    ],
    related: ["en81-72", "en81-76", "part-b"],
  },
  {
    id: "en81-76",
    code: "EN 81-76:2025",
    title: "Evacuation of persons with disabilities using elevators",
    everydayTitle: "An elevator that can get you out when the stairs cannot",
    family: "fire",
    featured: true,
    oneLiner: "Class A or B evacuation elevators with automatic, driver, or remote modes — for new elevators only.",
    statute:
      "The elevator remains available for evacuation of persons with disabilities under this chosen mode.",
    plain:
      "For decades the rule was simple: fire starts, elevators stop, people who cannot use stairs wait for a team. 76 is the first European standard that lets a specially designed elevator keep working as a way out for those people. It is not ‘any elevator with a wheelchair sticker’. The building needs a protected landing, a thought-through exit floor, power that lasts, and a mode that matches the management plan. Class A is the simpler kit for simpler buildings (one exit floor, no second power, no remote driving). Class B is the fuller kit. Automatic operation is the only one where a person can leave without waiting for a trained driver.",
    remember: [
      "New elevators only. It does not bless an old car.",
      "Automatic mode = independent self-rescue. The others need a person.",
      "The building evacuation strategy is the parent document. The elevator is a tool inside it.",
      "Not for flood, quake, explosion, or chemical attack.",
    ],
    related: ["en81-70", "en81-72", "en81-73", "part-b"],
  },
  {
    id: "en81-77",
    code: "EN 81-77",
    title: "Elevators subject to seismic conditions",
    everydayTitle: "What the elevator does when the building shakes",
    family: "base",
    oneLiner: "Seismic detection, retention of the car, and a safe restart.",
    statute:
      "EN 81-77 adds requirements to EN 81-20 for elevators installed in seismic regions: retention of car and counterweight, seismic detection, and behaviour after an event so the elevator is not a new hazard.",
    plain:
      "76 explicitly will not pretend to evacuate you during an earthquake. 77 is the standard that keeps the car from becoming a wrecking ball. Different emergency, different tool.",
    remember: [
      "Seismic design is 77, not 76.",
      "After a quake, ‘running’ may be the wrong answer.",
    ],
    related: ["en81-20", "en81-76"],
  },
  {
    id: "en81-80",
    code: "EN 81-80",
    title: "Rules for improving safety of existing elevators",
    everydayTitle: "A ranked to-do list for elevators that pre-date modern rules",
    family: "existing",
    oneLiner: "Hazard identification, priority (high / medium / low), then practicable upgrades.",
    statute:
      "EN 81-80:2019 is a methodology for bringing existing permanently installed passenger and goods passenger elevators toward the safety level of new elevators. Identify hazardous situations, evaluate risk, classify priority, filter what is practicable. It is not a requirement to rebuild every car tomorrow; it is a structured way to stop ignoring known killers (unprotected well, missing door locks, no alarm, no unintended car movement protection, and so on).",
    plain:
      "Old elevators were legal when they were new. They are still in shafts. 80 is how a dutyholder looks at one with modern eyes and writes a real programme: high-priority hazards first, then the rest, and a reason on paper when something cannot be done. Pair it with 82 if the gap is accessibility rather than a crushing hazard.",
    remember: [
      "Priority ranking, not vibes.",
      "Practicable is a filter, not a shrug.",
      "80 = safety of existing. 82 = access of existing.",
    ],
    related: ["en81-82", "loler", "en81-21"],
  },
  {
    id: "en81-82",
    code: "EN 81-82",
    title: "Rules for upgrading existing elevators for persons with disability",
    everydayTitle: "Making yesterday’s car usable by more people",
    family: "existing",
    oneLiner: "A method for improving accessibility of elevators that are already installed.",
    statute:
      "EN 81-82 gives rules for upgrading existing elevators so persons with disability can use them more independently, applying EN 81-70 thinking where the building will allow it.",
    plain:
      "You cannot always drop a Type 2 car into a Type 1 hole. 82 is the grown-up conversation: better contrast, better door dwell, a mirror, a handrail, a larger button, voice announcement — whatever actually helps and will fit. It is how Equality Act reasonable-adjustment duties often get done in metal.",
    remember: [
      "Existing car, accessibility gap: 82.",
      "New car: 70, not 82.",
    ],
    related: ["en81-70", "en81-80", "part-m"],
  },
  {
    id: "part-b",
    code: "Approved Document B / BS 9999",
    title: "Fire safety of the building",
    everydayTitle: "The fire strategy that the elevator has to serve",
    family: "fire",
    oneLiner: "Whether you even need a 72 or 76 elevator is a building decision, not an elevator-sales decision.",
    statute:
      "Building fire law (in England, Building Regulations Part B and the associated guidance, together with BS 9991 / BS 9999 fire-strategy practice) decides when a firefighters elevator is required, how people who cannot use stairs are evacuated, and what a protected lobby must be. EN 81-72, 73 and 76 are the elevator industry’s answers to questions the fire strategy has already asked.",
    plain:
      "Buy the elevator after you know the story of the building on fire. How many people need an elevator to leave? Where is the exit floor? Who is driving? How long must power last? A 76 car in a building with no protected landing is a box that cannot do its job. The fire engineer and the elevator engineer have to sit in the same meeting.",
    remember: [
      "Strategy first, elevator specification second.",
      "A firefighter elevator requirement is usually a height / risk trigger in national fire guidance.",
    ],
    related: ["en81-72", "en81-73", "en81-76"],
  },
  {
    id: "part-m",
    code: "Approved Document M / Equality Act",
    title: "Access to and use of buildings",
    everydayTitle: "The building’s duty to let people in — including via the elevator",
    family: "people",
    oneLiner: "Access law points at EN 81-70 sizes, contrast, and controls.",
    statute:
      "Approved Document M (and equivalent guidance in other UK nations) plus the Equality Act 2010 reasonable-adjustment duty set the building-side expectation that passenger elevators used by the public are independently usable. EN 81-70 is the usual technical expression of that for new elevators.",
    plain:
      "If the only way to the hearing room is an elevator with a 700 mm door and a key, that is not an accessible building with an unfortunate elevator. It is a building that failed access. 70 is how the elevator holds up its end. 76 is how that same person leaves when the hearing room is on fire.",
    remember: [
      "Getting in (70 / M) and getting out (76 / B) are a pair.",
      "Reasonable adjustment is an ongoing duty on existing buildings.",
    ],
    related: ["en81-70", "en81-82"],
  },
  {
    id: "puwer",
    code: "PUWER 1998",
    title: "Provision and Use of Work Equipment Regulations",
    everydayTitle: "If the elevator is used for work, it is work equipment",
    family: "law",
    oneLiner: "Suitable, maintained, inspected, and used by people who have been told how.",
    statute:
      "The Provision and Use of Work Equipment Regulations 1998 require work equipment to be suitable, maintained in an efficient state, inspected where necessary, and used only by people who have information and training. An elevator provided for use at work is work equipment. LOLER adds the lifting-specific examination. PUWER does not switch off.",
    plain:
      "LOLER is the six-month look at the elevator as a lifting machine. PUWER is the everyday duty around it: it must be the right kit, it must be looked after, and the people who use or release it must know what they are doing. A workplace goods elevator, a platform used by staff, and the passenger elevator in an office all sit here.",
    remember: [
      "Work equipment stays under PUWER even when LOLER also applies.",
      "Maintenance and training are PUWER jobs, not extras.",
    ],
    related: ["loler", "hswa"],
  },
  {
    id: "hswa",
    code: "HSWA 1974",
    title: "Health and Safety at Work etc. Act",
    everydayTitle: "The parent duty every other elevator rule hangs from",
    family: "law",
    oneLiner: "Employers and people in control of premises must keep people safe so far as reasonably practicable.",
    statute:
      "The Health and Safety at Work etc. Act 1974 places general duties on employers towards employees and others, and on people who control premises used as a workplace. Those duties are qualified by ‘so far as is reasonably practicable’. LOLER, PUWER and the management regulations are the detail under this Act.",
    plain:
      "This is the Act the inspector is standing on when no single elevator regulation quite names the problem. If you employ people, or you control the building they work in, you have to run the elevator in a way that does not hurt them, as far as is reasonably practicable. The six-month examination is one way of showing you took that seriously. It is not the whole duty.",
    remember: [
      "Reasonably practicable means a real balance of risk and sacrifice, written down.",
      "The specific regulations do not replace this Act.",
    ],
    related: ["loler", "puwer", "mhs"],
  },
  {
    id: "mhs",
    code: "MHSWR 1999",
    title: "Management of Health and Safety at Work Regulations",
    everydayTitle: "Someone has to assess the elevator and write down who does what",
    family: "law",
    oneLiner: "Risk assessment, arrangements, and competent help.",
    statute:
      "The Management of Health and Safety at Work Regulations 1999 require a suitable and sufficient assessment of risks, arrangements for planning and control, and access to competent health and safety help. An elevator that people rely on is part of that assessment.",
    plain:
      "Who decides the elevator stays in service? Who calls the competent person? What happens if the alarm test fails? Those answers belong in the management arrangements, not in a drawer of old reports. The fire risk assessment is a separate duty. This one is the general management of the risk.",
    remember: [
      "A missing arrangement is a management failure, not a parts failure.",
      "Competent help means someone who actually understands elevators.",
    ],
    related: ["hswa", "loler", "fire-safety"],
  },
  {
    id: "fire-safety",
    code: "Fire safety law",
    title: "The duty to assess fire and keep the precautions real",
    everydayTitle: "If the strategy uses an elevator, the elevator has to do what the strategy says",
    family: "law",
    oneLiner: "England and Wales, Scotland, and Northern Ireland each have their own fire safety duty.",
    statute:
      "In England and Wales the Regulatory Reform (Fire Safety) Order 2005 requires the responsible person to make a fire risk assessment and maintain general fire precautions. In Scotland the duties sit under the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006. In Northern Ireland they sit under the Fire and Rescue Services (Northern Ireland) Order 2006 and the Fire Safety Regulations (Northern Ireland) 2010.",
    plain:
      "Do not write ‘FSO’ on a Scottish or Northern Irish building and think you have named the law. The job is the same shape everywhere: a responsible person, an assessment, and precautions that work on the night. If that assessment says people leave by an evacuation elevator, or the fire brigade take a firefighter elevator, those elevators are part of the precautions. A poster is not a precaution.",
    remember: [
      "England and Wales: the Fire Safety Order.",
      "Scotland and Northern Ireland: their own fire safety law, not the FSO.",
      "An elevator named in the strategy has to be kept able to do that job.",
    ],
    related: ["part-b", "en81-72", "en81-73", "en81-76"],
  },
  {
    id: "equality",
    code: "Equality Act 2010",
    title: "Equality Act",
    everydayTitle: "The ongoing duty to adjust, including the elevator people have to use",
    family: "law",
    oneLiner: "Reasonable adjustments where a feature of the building puts a disabled person at a disadvantage.",
    statute:
      "The Equality Act 2010 applies in England, Wales and Scotland. Where a physical feature puts a disabled person at a substantial disadvantage, the duty to make reasonable adjustments can include the way an elevator is provided, signed, or kept in service. Northern Ireland still relies mainly on the Disability Discrimination Act 1995.",
    plain:
      "An elevator that exists on the drawing and is out of service every other week is not an adjustment. Reasonable does not mean ‘whatever the contractor last quoted’. It does mean you look at the disadvantage and do what is reasonable to remove it. EN 81-70 and EN 81-82 are common ways to do the metalwork. They are not the Act.",
    remember: [
      "The Act is the duty. 70 and 82 are ways of meeting it.",
      "Northern Ireland is not the Equality Act.",
    ],
    related: ["part-m", "en81-70", "en81-82"],
  },
  {
    id: "building-regs",
    code: "Building Regulations",
    title: "The rules for building work, including a new or altered elevator",
    everydayTitle: "Installing an elevator is building work, and each nation writes its own",
    family: "law",
    oneLiner: "England, Wales, Scotland and Northern Ireland do not share one building regulation.",
    statute:
      "Building work in England is controlled by the Building Regulations 2010. Wales, Scotland and Northern Ireland have their own building regulations. Fire and access provisions — often met by following Approved Document B and M in England, or the national equivalent — decide protected lobbies, firefighter elevators and access to storeys.",
    plain:
      "The approved document is guidance. The regulation is the must. An elevator shaft is a hole through floors that were meant to stop fire, and it is often the only way some people reach a storey. That is why building control, not the elevator brochure, decides whether the opening, the lobby and the power are good enough.",
    remember: [
      "Name the nation. ‘Part B’ is not the Scottish regulation.",
      "Guidance shows a way. The regulation is what you have to achieve.",
    ],
    related: ["part-b", "part-m", "fire-safety"],
  },
  {
    id: "cdm",
    code: "CDM 2015",
    title: "Construction (Design and Management) Regulations",
    everydayTitle: "Design the danger out. Do not leave it to the people doing the work",
    family: "law",
    oneLiner: "Clients and designers have to take out a danger they can see coming, before the car is in the shaft.",
    statute:
      "The Construction (Design and Management) Regulations 2015 apply to construction work, including the installation and substantial alteration of an elevator. Clients, designers and contractors must plan, manage and monitor the work, and designers must eliminate foreseeable risks so far as reasonably practicable.",
    plain:
      "A pit no one can get out of, a machine room with no safe way in, a panel you can only reach from a ladder over the shaft: those are choices made on the drawing. The architect, the elevator designer and the client share them when the elevator goes in, and when it is changed. Repair and upkeep of the elevator can also be construction work, so they are planned too. Resetting a fault is not a construction project.",
    remember: [
      "A new elevator, or a change to one: this law is in the room.",
      "Repair and upkeep can still be construction work. A fault reset is not.",
    ],
    related: ["hswa", "work-at-height", "directive"],
  },
  {
    id: "riddor",
    code: "RIDDOR 2013",
    title: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations",
    everydayTitle: "You only report the accidents the rules name, not every incident",
    family: "law",
    oneLiner: "Some injuries, and some broken parts, have to be reported.",
    statute:
      "RIDDOR 2013 requires responsible persons to report specified injuries, fatalities and listed dangerous occurrences. The collapse, overturning or failure of a load-bearing part of an elevator or lifting equipment is a dangerous occurrence. Not every entrapment is reportable.",
    plain:
      "Someone stuck for twenty minutes and not hurt is still an emergency. That alone is not a report. You do report a serious injury, a death, or a part that holds the elevator if it breaks.",
    remember: [
      "If a part that holds the elevator breaks, that is the one to remember.",
      "Being stuck is not, by itself, enough.",
    ],
    related: ["loler", "hswa"],
  },
  {
    id: "workplace",
    code: "Workplace Regs 1992",
    title: "Workplace (Health, Safety and Welfare) Regulations",
    everydayTitle: "The workplace itself has to be safe to move through",
    family: "law",
    oneLiner: "Maintenance of the workplace, and a specific line for escalators and moving walkways.",
    statute:
      "The Workplace (Health, Safety and Welfare) Regulations 1992 require the workplace, and equipment and devices in it, to be maintained in an efficient state. Escalators and moving walkways must function safely and have any necessary safety devices. Elevators that carry people at work are dealt with mainly by LOLER and PUWER.",
    plain:
      "These regulations are why a broken escalator is not ‘just a facilities issue’. They are not a second copy of LOLER. If the kit moves people on a slope, start here and with the machine’s own standard. If it is an elevator, LOLER is still the examination duty.",
    remember: [
      "Escalators and moving walkways are named here.",
      "A passenger elevator still belongs to LOLER.",
    ],
    related: ["loler", "puwer"],
  },
  {
    id: "electricity",
    code: "EaWR 1989",
    title: "Electricity at Work Regulations",
    everydayTitle: "The electrics in the shaft have to be safe to the touch and in a fault",
    family: "law",
    oneLiner: "Electrical systems must be constructed and maintained to prevent danger.",
    statute:
      "The Electricity at Work Regulations 1989 require electrical systems to be of such construction and so maintained as to prevent danger, so far as is reasonably practicable. Strength, insulation, isolation and work on or near live parts are all in scope. An elevator’s power, including a secondary supply, is an electrical system.",
    plain:
      "Water in a firefighter shaft, a homemade jump lead to ‘keep the car going’, a panel left open for a temporary supply: those are electricity problems as well as elevator problems. The second supply on a 72 or 76 car does not sit outside this duty because an elevator standard also mentions it.",
    remember: [
      "Isolation has to be real before work starts.",
      "A standby generator is still an electrical system.",
    ],
    related: ["en81-72", "en81-76", "puwer"],
  },
  {
    id: "work-at-height",
    code: "WAHR 2005",
    title: "Work at Height Regulations",
    everydayTitle: "The responsible duty under the Work at Height Regulations covers the car top. The work must be planned, and the car must not make an uncontrolled movement under the person",
    family: "law",
    oneLiner: "Avoid work at height where you can. Where you cannot, plan it.",
    statute:
      "The Work at Height Regulations 2005 require work at height to be avoided where reasonably practicable, and otherwise planned, supervised and carried out by competent people, with measures to prevent falling and to reduce the distance and consequences. Work on a car top, in a shaft or from a landing into a well is work at height.",
    plain:
      "‘We have always stood on the car’ is not a safe system. The regulations want the work designed so people are not over the void, and if they must be, they are attached, the car must not make an uncontrolled movement under them, and someone knows how to get them down. This sits beside CDM on a new job and beside PUWER on a maintenance visit.",
    remember: [
      "Car-top work is work at height.",
      "Competence includes rescue, not only the task.",
    ],
    related: ["cdm", "puwer"],
  },
  {
    id: "machinery",
    code: "SMSR 2008",
    title: "Supply of Machinery (Safety) Regulations",
    everydayTitle: "The law for the lifting machines that are not ‘elevators’",
    family: "law",
    oneLiner: "Stairlifts, slow platforms and many goods-only hoists sit here, not under the Lifts Regulations.",
    statute:
      "The Machinery Directive applies to machinery placed on the market, including many lifting appliances. The Lifts Directive does not cover every machine that moves people: elevators at 0.15 m/s or less, and several special cases, are outside it. Those machines are usually machinery.",
    plain:
      "Call a stairlift or a slow platform an ‘elevator’ in a meeting and you may pull the wrong law into the room. If it is a passenger or goods-passenger elevator within the Lifts Directive, that is the placing-on-the-market law. If it is slower, or it is a platform or stairlift, start with the machinery regulations and the standard written for that machine. Do not CE-mark it as the wrong product.",
    remember: [
      "You follow one of those two laws. You do not use both.",
      "How fast it moves, and what the law calls it, decides which one.",
    ],
    related: ["directive", "loler"],
  },
  {
    id: "confined",
    code: "Confined Spaces 1997",
    title: "Confined Spaces Regulations",
    everydayTitle: "A pit is not automatically a confined space — and sometimes it is",
    family: "law",
    oneLiner: "Only when a specified risk is reasonably foreseeable.",
    statute:
      "The Confined Spaces Regulations 1997 apply to a place which is substantially enclosed and where there is a reasonably foreseeable specified risk, such as fire, fumes, lack of oxygen, drowning, or a free-flowing solid. Entry then requires a safe system of work. An elevator well or pit is enclosed. It is a confined space only if that risk is foreseeable.",
    plain:
      "Do not label every pit ‘confined space’ on a sign and think the job is done. Do not ignore a pit that floods, or a shaft that can fill with exhaust or smoke. If the specified risk is real, people do not climb in because the job is short. They go in under a system that includes the air, the rescue and the communication.",
    remember: [
      "Enclosed is not enough. There has to be a specified risk.",
      "Flooding and bad air are the usual reasons a pit qualifies.",
    ],
    related: ["work-at-height", "puwer"],
  },
  {
    id: "pressure",
    code: "PSSR 2000",
    title: "Pressure Systems Safety Regulations",
    everydayTitle: "A hydraulic elevator can also be a pressure system",
    family: "law",
    oneLiner: "Some accumulators and vessels need their own written scheme, as well as LOLER.",
    statute:
      "The Pressure Systems Safety Regulations 2000 can apply to a pressure system on an elevator, such as an accumulator or a vessel, where the regulations’ thresholds are met. A written scheme of examination is then required. LOLER examination of the elevator does not automatically examine that vessel.",
    plain:
      "The ram that lifts the car and the vessel that stores pressure are not the same object. The elevator report can be clean while the accumulator has never had the examination the pressure regulations want. Ask, on a hydraulic job, whether a written scheme exists. If nobody can find it, that is the finding.",
    remember: [
      "Hydraulic does not always mean PSSR. Ask about the vessel.",
      "A LOLER report is not a pressure-system report.",
    ],
    related: ["loler", "en81-20"],
  },
  ...ASME_STANDARDS,
];

export const STANDARD_BY_ID = Object.fromEntries(
  STANDARDS.map((s) => [s.id, s]),
) as Record<Standard["id"], Standard>;
