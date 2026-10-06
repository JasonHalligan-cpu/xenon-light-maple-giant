import { i as __toESM } from "../_runtime.mjs";
import { K as redirect, S as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, r as formatPct, t as clamp } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { a as ASME_TEST_IDS, i as ASME_STANDARDS, n as ASME_QUESTIONS, r as ASME_SKILLS, t as ASME_LESSONS } from "./asme-CKED6CLd.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { a as Layers, c as Building2, i as Repeat, l as BookOpen, o as GraduationCap, r as ShoppingBag, s as ClipboardCheck, t as TriangleAlert, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsors-DHrn0ksZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPONSOR_PACKAGES = [
	{
		id: "lobby",
		title: "Lobby takeover",
		kicker: "First doors",
		price: "Lead partner",
		reach: "Every visitor, every session",
		placement: "Cover and landing — the first thing a specifier sees.",
		who: "Elevator manufacturers, major contractors, notified bodies.",
		spec: "Landscape 16:9 art, 8-word headline, 20-word line, one link.",
		size: "billboard",
		advertId: "ashcombe"
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
		size: "card",
		advertId: "beacon"
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
		size: "strip",
		advertId: "northbank"
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
		size: "card",
		advertId: "harbour"
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
		size: "card",
		advertId: "kiln"
	}
];
var SPONSOR_BY_ID = Object.fromEntries(SPONSOR_PACKAGES.map((p) => [p.id, p]));
var SPONSOR_AUDIENCE = [
	{
		label: "Specifiers",
		line: "Architects, M&E, fire engineers naming 72, 73 or 76."
	},
	{
		label: "Dutyholders",
		line: "Building managers who keep LOLER diaries and Part B."
	},
	{
		label: "Contractors",
		line: "Elevator firms quoting a UK shaft, not a brochure."
	},
	{
		label: "Inspectors",
		line: "Thorough-examination houses and notified bodies."
	}
];
var ADVERTS = [
	{
		id: "ashcombe",
		brand: "Ashcombe Elevators",
		town: "Sheffield",
		slot: "lobby",
		kicker: "Evacuation cars",
		headline: "The car that stays when the stairs fail.",
		line: "Class A and Class B evacuation elevators, specified for a UK fire strategy — not a brochure.",
		cta: "Open the 76 range",
		tone: "bg-orange text-accent-fg",
		img: "/graphics/ad-ashcombe.jpg",
		alt: "Empty hospital elevator lobby with a wide-door evacuation car open",
		pitch: "Ashcombe builds passenger and evacuation cars in Sheffield. The pretend range on this page is the one a fire engineer names when Part B and EN 81-76 have to live in the same shaft.",
		points: [
			"Independent power and a landing that still works in a fire.",
			"Dual-height controls and a floor you can turn a wheelchair on.",
			"Complementary to a firefighter elevator — never a substitute."
		]
	},
	{
		id: "beacon",
		brand: "Beacon Fire Strategy",
		town: "Manchester",
		slot: "floor",
		kicker: "Fire strategy",
		headline: "72 waits. 76 keeps working. We write both.",
		line: "Fire strategies that name the right car — firefighter, evacuation, or park.",
		cta: "Read a sample strategy",
		tone: "bg-night text-night-fg",
		img: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor",
		pitch: "Beacon is a pretend fire-engineering house. They sit in the meeting where someone tries to use a firefighter elevator as an evacuation elevator, and they say no.",
		points: [
			"EN 81-72 is the fire brigade’s tool.",
			"EN 81-76 is for people who cannot use the stairs.",
			"EN 81-73 is what a normal passenger car does in a fire: park."
		]
	},
	{
		id: "northbank",
		brand: "Northbank Examiners",
		town: "Leeds",
		slot: "codes",
		kicker: "LOLER",
		headline: "The six-month diary, kept.",
		line: "Thorough examination for passenger, goods and evacuation elevators across the UK.",
		cta: "Book an examination",
		tone: "bg-green text-ok-fg",
		img: "/graphics/ad-northbank.jpg",
		alt: "Elevator machine room set for a thorough examination",
		pitch: "Northbank is a pretend competent-person house. They do not sell cars. They write the report the dutyholder has to keep.",
		points: [
			"LOLER is in-service law, not a CE mark.",
			"A new 76 plate does not pause the diary.",
			"Reports in landing language the building manager can act on."
		]
	},
	{
		id: "harbour",
		brand: "Harbour CPD",
		town: "Bristol",
		slot: "drill",
		kicker: "Dutyholder training",
		headline: "Eight questions, then a real landing.",
		line: "Half-day sessions for managers who own the LOLER file and the fire strategy.",
		cta: "See the next sitting",
		tone: "bg-yellow text-fg",
		img: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open onto a landing",
		pitch: "Harbour is pretend continuing professional development. They train the person who has to say ‘park, wait, or keep working’ at 2am.",
		points: [
			"Interleaved 72 / 73 / 76 so the three cars stop blending.",
			"Scenarios, not slides: midnight hotel, listed shaft, substitution.",
			"A certificate the insurer will actually read."
		]
	},
	{
		id: "kiln",
		brand: "Kiln & Rail",
		town: "Glasgow",
		slot: "scenario",
		kicker: "Existing shafts",
		headline: "The listed building still needs a safe car.",
		line: "Modernisation that keeps the stone, and still meets the recipe.",
		cta: "Walk a listed shaft",
		tone: "bg-raised text-fg",
		img: "/graphics/shaft-floors.jpg",
		alt: "Cutaway of a UK building showing the elevator shaft",
		pitch: "Kiln & Rail is a pretend modernisation firm. They live in EN 81-80 and the awkward conversation about a car that is already in the well.",
		points: [
			"Existing elevators are a different conversation to a new one.",
			"Part M still applies when you change the car.",
			"A firefighter sticker is not an evacuation elevator."
		]
	}
];
var ADVERT_BY_ID = Object.fromEntries(ADVERTS.map((a) => [a.id, a]));
function advertForSlot(slot) {
	return ADVERT_BY_ID[SPONSOR_BY_ID[slot].advertId];
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/store-rccTNpPy.js
var QUESTIONS = [
	{
		id: "q-family-1",
		skillId: "family-map",
		prompt: "A spec says the elevator is ‘fully EN 81 compliant’. What is the right response?",
		choices: [
			"Accept it — EN 81 is one standard.",
			"Ask which part: 20 is the base, others are particular jobs.",
			"Assume it includes firefighters and evacuation features.",
			"Reject EN 81; only ASME A17.1 matters in Europe."
		],
		answer: 1,
		statute: "The EN 81 series has many parts. EN 81-20 is the base passenger-elevator standard. Particular applications (70, 72, 73, 76, 80…) add extra requirements.",
		plain: "EN 81 is a family name, not one standard. Without the part number you cannot tell what was bought. EN 81-20 is the standard car. EN 81-72 is the firefighter elevator. EN 81-76 is the evacuation elevator.",
		why: "Vague compliance language is how the wrong machine gets into the shaft."
	},
	{
		id: "q-family-2",
		skillId: "family-map",
		prompt: "Which pair is the modern base for a new passenger elevator?",
		choices: [
			"EN 81-1 and EN 81-2",
			"EN 81-20 and EN 81-50",
			"EN 81-72 and EN 81-76",
			"LOLER and PUWER"
		],
		answer: 1,
		statute: "EN 81-20 (construction/installation) is used with EN 81-50 (calculations and type tests). They superseded 81-1 and 81-2.",
		plain: "20 is the assembled elevator. 50 is the lab. 1 and 2 are the grandparents.",
		why: "A specification still citing 81-1 for a new car is out of date."
	},
	{
		id: "q-duty-1",
		skillId: "dutyholder",
		prompt: "Who is LOLER mainly talking to?",
		choices: [
			"The manufacturer, before CE marking.",
			"The person who owns, operates, or controls the elevator in use.",
			"The fire brigade, on arrival.",
			"The passenger, via the poster in the car."
		],
		answer: 1,
		statute: "LOLER places duties on those who own, operate or have control of lifting equipment. People-carrying elevators need thorough examination, typically every six months.",
		plain: "After handover, the responsible duty sits with the owner, or with whoever controls the elevator. LOLER requires a passenger elevator to be thoroughly examined, usually every six months, and the report acted on. A missed examination is a breach of the responsible duty.",
		why: "A new evacuation elevator does not remove the responsible duty. The six-month examination still has to be done."
	},
	{
		id: "q-duty-2",
		skillId: "dutyholder",
		prompt: "A passenger elevator’s last thorough examination was nine months ago. What is the issue?",
		choices: [
			"None — annual is the default for passenger elevators.",
			"LOLER’s usual interval for people-carrying elevators is six months.",
			"EN 81-20 requires monthly type tests.",
			"Only firefighter elevators are examined."
		],
		answer: 1,
		statute: "Thorough examination of elevators which lift people is typically at least every six months unless a written scheme says otherwise.",
		plain: "The last examination was nine months ago. The responsible duty, where an elevator carries people, is a thorough examination at least every six months, unless a written scheme sets a different period. The age of the elevator does not change the responsible duty.",
		why: "Naming the elevator on a drawing, including as an evacuation elevator, does not move the responsible duty. While the elevator is in use, late examination is a breach of LOLER."
	},
	{
		id: "q-20-1",
		skillId: "en81-20",
		prompt: "Does EN 81-20 by itself make an elevator usable in a fire by a wheelchair user?",
		choices: [
			"Yes — 20 includes evacuation operation.",
			"No — 20 is the default car. Fire behaviour and evacuation are other parts.",
			"Yes, if the car is larger than 1000 kg.",
			"Only if the installer adds a poster."
		],
		answer: 1,
		statute: "Particular applications such as EN 81-73, 72 and 76 are additional to EN 81-20.",
		plain: "20 gets you a modern passenger elevator. It does not keep that elevator running as a way out.",
		why: "Specify the correct additional part with EN 81-20: behaviour in fire, firefighter, or evacuation. Without it, the elevator stops and stays put when the fire alarm rings."
	},
	{
		id: "q-20-2",
		skillId: "en81-20",
		prompt: "EN 81-50 is best described as…",
		choices: [
			"The accessibility table of car types.",
			"Design rules, calculations and type tests for components, used with 20.",
			"The existing-elevator upgrade method.",
			"The Lifts Directive itself."
		],
		answer: 1,
		statute: "EN 81-50 provides design rules, calculations, examinations and tests of elevator components, used with EN 81-20.",
		plain: "50 is the integration half of the base standard.",
		why: "People confuse 50 with 80 because both have ‘tests’ energy. Different stage of life."
	},
	{
		id: "q-70-1",
		skillId: "en81-70",
		prompt: "What is the minimum EN 81-70 car type for a new building?",
		choices: [
			"Type 1 — 1000 × 1300 mm, 450 kg, 800 mm door",
			"Type 2 — 1100 × 1400 mm, 630 kg, 900 mm door",
			"Type 5 — because turning space is always required",
			"Whatever fits the architectural core"
		],
		answer: 1,
		statute: "Type 2 is the minimum size for new buildings and takes a wheelchair user plus an accompanying person. Type 1 is only for constrained existing buildings.",
		plain: "New build: Type 2 or larger. Type 1 is the ‘we had no choice’ car.",
		why: "Class A evacuation elevators also start at Type 2. This number keeps coming back."
	},
	{
		id: "q-70-2",
		skillId: "en81-70",
		prompt: "A Type 3 car is the one you pick when…",
		choices: [
			"You only have an existing 800 mm opening.",
			"You need a wheelchair user plus some other passengers, and a stretcher may have to go in.",
			"You want adjacent doors in a tiny shaft.",
			"You are specifying a goods-only hoist."
		],
		answer: 1,
		statute: "Type 3 is 1100 × 2100 mm, 1000 kg, 900 mm door — wheelchair plus other passengers, and stretchers.",
		plain: "Longer car. Stretcher energy. This is also the Class B 76 starting size (Type 3 or 4).",
		why: "Hospitals and public concourses reach for Type 3 without being asked twice."
	},
	{
		id: "q-70-3",
		skillId: "en81-70",
		prompt: "Decorative panelling is added to a Type 2 car and eats 40 mm off the width. Problem?",
		choices: [
			"No — finishes are extra to Table 3.",
			"Yes — finishes must not take more than 15 mm off the stated sizes.",
			"Only a problem if contrast is also poor.",
			"Only a problem in existing buildings."
		],
		answer: 1,
		statute: "Decorative finishes are limited to 15 mm thickness against the Table 3 dimensions, which are measured between structural walls.",
		plain: "The marble you fell in love with can make a legal car illegal. Measure twice.",
		why: "Interior designers and elevator standards collide here more than anywhere."
	},
	{
		id: "q-73-1",
		skillId: "en81-73",
		prompt: "A fire alarm sounds. A standard EN 81-73 elevator should…",
		choices: [
			"Keep answering landing calls so staff can sweep floors.",
			"Recall to a designated landing, let people out, and stay out of normal service.",
			"Go to the roof for firefighter access.",
			"Switch automatically into EN 81-76 automatic mode."
		],
		answer: 1,
		statute: "EN 81-73: on a fire signal the elevator is recalled to a designated landing and taken out of normal service so it cannot be called to a fire floor.",
		plain: "It parks. That is a success. It is not a way out for someone who cannot use stairs.",
		why: "This is the behaviour 76 exists to replace, on purpose, with extra hardware."
	},
	{
		id: "q-73-2",
		skillId: "en81-73",
		prompt: "Why do posters still say ‘do not use the elevator in a fire’?",
		choices: [
			"Because EN 81-76 banned all elevator use.",
			"Because most elevators are standard 73 elevators that will park themselves, and they are not protected evacuation or firefighter cars.",
			"Because LOLER forbids elevator use after 6 pm.",
			"Because Type 1 cars overheat."
		],
		answer: 1,
		statute: "73 is the machine-side of the long-standing instruction not to use standard elevators in fire.",
		plain: "The poster is true for standard cars. Special cars need special signs, or people will board the wrong one.",
		why: "Two messages in one lobby without hardware to match is how harm happens."
	},
	{
		id: "q-72-1",
		skillId: "en81-72",
		prompt: "Who is a firefighters elevator primarily for?",
		choices: [
			"Independent civilian self-rescue.",
			"The fire service, under their control, with secondary power and water protection.",
			"Goods only, during a fire.",
			"Anyone who presses the landing button after the alarm."
		],
		answer: 1,
		statute: "EN 81-72 elevators are used by firefighters. Secondary power, water-protected electrics, fire-service communication and a firefighters elevator switch are required. It is not a passenger self-evacuation elevator.",
		plain: "Yellow helmets drive it. You do not.",
		why: "Selling 72 as if it were 76 is the classic substitution error."
	},
	{
		id: "q-72-2",
		skillId: "en81-72",
		prompt: "Minimum car size for a basic firefighters elevator (no stretcher duty)?",
		choices: [
			"1000 × 1300 mm, 450 kg",
			"1100 × 1400 mm, 630 kg, 800 mm door",
			"1400 × 2000 mm, 1275 kg",
			"Whatever the fire engine bay allows"
		],
		answer: 1,
		statute: "At no time shall the size be less than 1100 × 1400 mm with 630 kg and a clear entrance of at least 800 mm. Stretcher / evacuation intent pushes you to 1100 × 2100 mm at 1000 kg.",
		plain: "Same footprint as an EN 81-70 Type 2, but that does not make it an accessible evacuation elevator.",
		why: "Size overlap is why people confuse 70, 72 and 76. The controls and the power tell them apart."
	},
	{
		id: "q-72-3",
		skillId: "en81-72",
		prompt: "Sprinklers in a firefighters elevator well?",
		choices: [
			"Required, to protect the car.",
			"Must not be provided in the well and machinery spaces.",
			"Only in the pit.",
			"Only on Class B 76 elevators."
		],
		answer: 1,
		statute: "The firefighters elevator well and machinery spaces shall not contain sprinklers.",
		plain: "Water on the fire, not a shower on the tool the fire brigade are riding.",
		why: "72 designs for hose water running into the well — that is different from a sprinkler head over the controller."
	},
	{
		id: "q-76p-1",
		skillId: "en81-76-purpose",
		prompt: "What is new about EN 81-76:2025?",
		choices: [
			"It is the first European standard specifying an elevator that may be used to evacuate persons with disabilities.",
			"It replaces EN 81-20 for all passenger elevators.",
			"It requires every existing elevator to become an evacuation elevator by 2027.",
			"It bans firefighter elevators in residential buildings."
		],
		answer: 0,
		statute: "EN 81-76:2025 is the first European Standard for an elevator which might be used for evacuation of persons with disabilities. It supersedes CEN/TS 81-76:2011 and applies to new elevators.",
		plain: "The old rule was wait at a refuge. 76 lets a specially built new elevator be a way out.",
		why: "That is the main point. The rest of EN 81-76 sets the requirements so a normal passenger elevator cannot be treated as an evacuation elevator."
	},
	{
		id: "q-76p-2",
		skillId: "en81-76-purpose",
		prompt: "Can you declare a 2018 passenger elevator an EN 81-76 evacuation elevator after a software patch?",
		choices: [
			"Yes, if you add a pictogram.",
			"No. 76 applies to new elevators; it is not applicable to elevators manufactured before it was published.",
			"Yes, via EN 81-80 high-priority measures.",
			"Only in England, not Scotland."
		],
		answer: 1,
		statute: "EN 81-76 is for new elevators. It does not reach back and rewrite cars that were already built. It adds evacuation rules on top of EN 81-20.",
		plain: "You can improve an old car. You cannot time-travel it into 76.",
		why: "This is the sentence that stops a dangerous sticker."
	},
	{
		id: "q-76p-3",
		skillId: "en81-76-purpose",
		prompt: "EN 81-76 is the right tool for evacuation during which event?",
		choices: [
			"Earthquake",
			"Flooding of the well",
			"A fire alarm (and similar orderly evacuations the strategy names)",
			"Chemical attack"
		],
		answer: 2,
		statute: "76 does not apply to evacuation due to explosion, CBRN, flooding, storm or earthquake. Those need further risk assessment. It is written around supporting faster evacuation of persons with disabilities, including in case of fire alarm.",
		plain: "Fire alarm, not the building coming down or filling with water.",
		why: "Scope is a safety feature. Over-claiming kills the standard’s honesty."
	},
	{
		id: "q-76c-1",
		skillId: "en81-76-class",
		prompt: "Pick the Class A building.",
		choices: [
			"A 40-storey office that already needs a firefighters elevator, with two exit levels and a generator.",
			"A lower building that does not need a firefighters elevator, with one evacuation exit level and no secondary power.",
			"Any building with a Type 5 car.",
			"Any existing elevator with a refuge lobby."
		],
		answer: 1,
		statute: "Class A: building height would not require a firefighting elevator; only one EEL; secondary power not available; no remote operation.",
		plain: "Simpler building, one way out, no generator, no remote driving.",
		why: "Class is about the plot, not about how disabled the occupants are."
	},
	{
		id: "q-76c-2",
		skillId: "en81-76-class",
		prompt: "Class B must have…",
		choices: [
			"No second power supply, to keep it simple.",
			"A secondary power supply, and it may have more than one EEL and remote operation.",
			"Sprinklers in the well.",
			"Type 1 cars only."
		],
		answer: 1,
		statute: "Class B requires secondary power, may have more than one EEL, supports remote-assisted operation, and uses a larger car (Type 3 or 4). It must become available within 60 seconds of a supply change.",
		plain: "B is the fuller kit: power, options, bigger car.",
		why: "If you want remote assistance, you are in B. There is no ‘Class A remote’."
	},
	{
		id: "q-76c-3",
		skillId: "en81-76-class",
		prompt: "Minimum car type for a Class A evacuation elevator?",
		choices: [
			"EN 81-70 Type 1",
			"EN 81-70 Type 2",
			"EN 81-70 Type 5 only",
			"No minimum — 76 does not talk to 70"
		],
		answer: 1,
		statute: "Class A minimum car size is EN 81-70 Table 3 Type 2. Class B is Type 3 or Type 4. If stretchers or beds are intended, Type 3 even on the simpler path.",
		plain: "A: wheelchair plus companion. B: stretcher-shaped or turning-shaped.",
		why: "Memorise 70’s table once; 76 keeps using it."
	},
	{
		id: "q-76m-1",
		skillId: "en81-76-modes",
		prompt: "Which mode enables independent self-rescue?",
		choices: [
			"Driver-assisted only",
			"Remote-assisted only",
			"Automatic evacuation operation",
			"EN 81-73 recall"
		],
		answer: 2,
		statute: "Automatic evacuation operation takes passengers directly to the EEL once called. It is the only mode that enables independent self-rescue.",
		plain: "Press, ride, exit. No driver in the car, no operator on a joystick.",
		why: "If the building is empty of staff at 2 a.m., automatic is the mode that still works."
	},
	{
		id: "q-76m-2",
		skillId: "en81-76-modes",
		prompt: "Remote-assisted operation requires…",
		choices: [
			"Class A hardware and a poster.",
			"Class B, two-way communication, and video monitoring, with a person actually there.",
			"Only a mobile phone in the car.",
			"Firefighter keys under EN 81-72."
		],
		answer: 1,
		statute: "Remote-assisted evacuation is control from outside the car, with two-way communication and video, and is a Class B concept.",
		plain: "A staffed desk, cameras, speech. Not a laptop someone might open.",
		why: "Unstaffed remote is driver-assisted without the driver."
	},
	{
		id: "q-76m-3",
		skillId: "en81-76-modes",
		prompt: "Driver-assisted mode is a good fit when…",
		choices: [
			"A midnight residential tower with no waking staff.",
			"A hospital or care setting where trained people will be in the building and can ride the car.",
			"You want occupants to leave without any assistance ever.",
			"You only have Class A and need remote control."
		],
		answer: 1,
		statute: "The assistant is able to drive the car using a test control from the emergency rescue control inside the elevator control panel.",
		plain: "The assistant is able to drive the car using a test control from the emergency rescue control inside the elevator control panel. That person has to be in the building.",
		why: "Choose how the elevator will run so it matches the people who will actually be there. If you specify a driver and nobody is there to drive, people can be left in the building."
	},
	{
		id: "q-76b-1",
		skillId: "en81-76-building",
		prompt: "What is an EEL?",
		choices: [
			"The machine room.",
			"An evacuation exit landing — a floor from which you can actually leave the building.",
			"The pit water limit.",
			"A type of buffer."
		],
		answer: 1,
		statute: "The EEL is the floor used to exit the building during evacuation. Recall takes the car there. Each EEL needs position indication and a visual indicator of evacuation service capability.",
		plain: "The way-out floor. If you cannot walk to open air from it, it is not an EEL.",
		why: "Relocating someone to a smoke-logged basement is not evacuation."
	},
	{
		id: "q-76b-2",
		skillId: "en81-76-building",
		prompt: "A suspend-service signal is for when…",
		choices: [
			"The elevator has finished a successful evacuation.",
			"The elevator must be taken out of evacuation service (for example smoke in a safe area) and sent to a landing with a safe route out.",
			"Firefighters want to take over a 72 car.",
			"LOLER is due next month."
		],
		answer: 1,
		statute: "A suspend-service signal sends the elevator to the SSL and takes it out of service. SSL can be the same as an EEL and must have a safe accessible route out.",
		plain: "The landing is no longer safe, so the car stops being a way out and goes somewhere that still is.",
		why: "A heroic elevator that opens onto smoke is not heroic."
	},
	{
		id: "q-76b-3",
		skillId: "en81-76-building",
		prompt: "After a power change, a Class B evacuation elevator must be available again within…",
		choices: [
			"10 minutes",
			"60 seconds",
			"The next LOLER visit",
			"24 hours"
		],
		answer: 1,
		statute: "On power disruption or supply change the elevator must become available for service within 60 seconds. Class B requires secondary power.",
		plain: "A minute, not a tea break. Generators that ‘usually’ start do not count.",
		why: "Evacuation time is measured in minutes. The elevator has to be in that arithmetic."
	},
	{
		id: "q-76b-4",
		skillId: "en81-76-building",
		prompt: "Consecutive landing entrances more than 7 m apart on an evacuation elevator need…",
		choices: [
			"Nothing extra.",
			"Intermediate emergency evacuation doors.",
			"A spiral stair in the well.",
			"Type 1 cars."
		],
		answer: 1,
		statute: "Intermediate emergency evacuation doors are required if the distance between consecutive landing entrances is greater than 7 m.",
		plain: "Big floor-to-floor jumps need a way into the shaft in between, for the bad day.",
		why: "Atriums and skipped floors are where this bites."
	},
	{
		id: "q-28-1",
		skillId: "en81-28",
		prompt: "EN 81-28 wants the alarm to be…",
		choices: [
			"A bell in the pit that the caretaker might hear.",
			"Two-way speech to a rescue service that knows which elevator called, still working on backup power.",
			"An email to the facilities inbox.",
			"A flashing light only, for vandal resistance."
		],
		answer: 1,
		statute: "Alarm systems must let trapped persons contact a rescue service, two-way, identifiable, and available on loss of normal supply.",
		plain: "A conversation with a human who knows where you are, even when the building is dark.",
		why: "An evacuation elevator that fails mid-flight is still a trap. 28 is the voice out."
	},
	{
		id: "q-28-2",
		skillId: "en81-28",
		prompt: "Why do driver-assisted and remote 76 modes care about communication?",
		choices: [
			"They do not — 28 is only for hotels.",
			"Those modes depend on a person who is not you. Speech (and for remote, video) is how that person does the job.",
			"Only for advertising screens.",
			"Because EN 81-71 requires a siren."
		],
		answer: 1,
		statute: "Driver and remote modes include communication; remote also wants video monitoring. 28 is the baseline trapped-passenger alarm.",
		plain: "If nobody can talk, nobody can assist. Automatic mode still needs 28 when the car dies.",
		why: "Communication is part of availability."
	},
	{
		id: "q-ex-1",
		skillId: "existing",
		prompt: "You have a 1992 elevator with no two-way alarm and a tiny car. Which pair of standards is the honest starting point?",
		choices: [
			"EN 81-76 and EN 81-72, applied retrospectively.",
			"EN 81-80 for safety hazards and EN 81-82 for accessibility upgrades.",
			"EN 81-50 type tests on site.",
			"Ignore it until replacement."
		],
		answer: 1,
		statute: "80 is the methodology for existing-elevator safety improvements. 82 is the accessibility upgrade method. 76 is for new elevators.",
		plain: "Rank the dangers, improve access where it will fit, and do not pretend it is a 2025 evacuation elevator.",
		why: "Honesty about old cars is a dutyholder skill."
	},
	{
		id: "q-ex-2",
		skillId: "existing",
		prompt: "EN 81-21 is for…",
		choices: [
			"Upgrading an old controller to 76 automatic mode.",
			"Installing a new elevator into an existing building where pit or headroom will not meet 20.",
			"Seismic retention of the counterweight.",
			"LOLER report templates."
		],
		answer: 1,
		statute: "EN 81-21 gives alternative technical requirements to 20 for new passenger elevators in existing buildings — reduced pit, reduced headroom, tight wells — with equivalent safety.",
		plain: "New machine, old hole. Extra protection instead of imaginary clearances.",
		why: "21 is not a free pass to keep a dangerous old car."
	},
	{
		id: "q-cmp-1",
		skillId: "compare",
		prompt: "Alarm sounds. Match the manners: 73, 72, 76.",
		choices: [
			"All three keep answering passenger calls.",
			"73 parks; 72 waits for firefighters; 76 (if provided and still safe) keeps working for people who cannot use stairs.",
			"72 parks; 76 is for goods; 73 is for stretchers.",
			"They are three names for one controller mode."
		],
		answer: 1,
		statute: "73: recall and out of service. 72: fire-service control, remains available as their tool. 76: remains available for evacuation of persons with disabilities under the chosen mode.",
		plain: "Park. Fire brigade. Way out. Say it until it is boring.",
		why: "This is the comparison ElevatorIQ exists to make unforgettable."
	},
	{
		id: "q-cmp-2",
		skillId: "compare",
		prompt: "A tall building needs a firefighters elevator. The client wants only EN 81-76 Class A instead. Your advice?",
		choices: [
			"Fine — 76 replaces 72 in all buildings.",
			"No. Class A is not intended where a firefighters elevator is required, and 76 is not a substitute for 72. You may need both.",
			"Fit Type 1 cars and call them dual-use.",
			"Rely on EN 81-73 posters."
		],
		answer: 1,
		statute: "Class A is intended where building height would not require a firefighting elevator. 72 and 76 are complementary, not substitutes.",
		plain: "The fire brigade still need their tool. People who cannot use stairs still need a way out. That can be two cars, or a very carefully designed strategy — not a downgrade.",
		why: "This is the expensive question. Get it right at planning."
	},
	{
		id: "q-cmp-3",
		skillId: "compare",
		prompt: "Independent civilian self-rescue is the job of…",
		choices: [
			"EN 81-73 recall",
			"EN 81-72 firefighter control",
			"EN 81-76 automatic evacuation operation",
			"EN 81-28 alone"
		],
		answer: 2,
		statute: "Automatic 76 operation is the only 76 mode that enables independent self-rescue. 72 is fire-service control. 73 parks.",
		plain: "Self-rescue means the person leaves without waiting for a trained helper to be free.",
		why: "That is the human point of the standard, not the clause number."
	},
	{
		id: "q-duty-3",
		skillId: "dutyholder",
		prompt: "CE marking on a new elevator means…",
		choices: [
			"The elevator is exempt from LOLER forever.",
			"The elevator met the placing-on-the-market rules at birth. In-service duties still apply.",
			"Firefighters have accepted it as a 72 elevator.",
			"The car is automatically an evacuation elevator."
		],
		answer: 1,
		statute: "Conformity marking relates to the Lifts Directive / Lifts Regulations at the point of placing on the market. LOLER and fire law continue after the handover.",
		plain: "CE marking shows the elevator met the EU regulations when it was sold. The responsible duty under LOLER, and under fire safety law, still applies after handover.",
		why: "The mark is not an exemption from the responsible duty."
	},
	{
		id: "q-76p-4",
		skillId: "en81-76-purpose",
		prompt: "Is EN 81-76 a substitute for evacuation chairs and refuges when the elevator is unavailable?",
		choices: [
			"Yes — once 76 is fitted, other aids may be removed.",
			"No. The standard does not cover provision of aids for when the evacuation elevator is unavailable.",
			"Only in Class B buildings.",
			"Only if automatic mode is selected."
		],
		answer: 1,
		statute: "The document does not apply to the provision of evacuation aids to assist when the evacuation elevator is unavailable. Unavailability of the evacuation elevator is an out-of-scope hazard.",
		plain: "Plan B stays. Elevators break. That is not cynicism; it is the standard being honest.",
		why: "Removing the refuge because a shiny car arrived is how people get stuck."
	},
	{
		id: "q-76c-4",
		skillId: "en81-76-class",
		prompt: "Class A on loss of mains power should…",
		choices: [
			"Stay wherever it is until an engineer arrives.",
			"Use automatic rescue to the EEL so people can leave.",
			"Switch to firefighter service.",
			"Lower into the pit."
		],
		answer: 1,
		statute: "Class A has no secondary power system; it requires automatic rescue operation to move the elevator to the EEL on power failure.",
		plain: "There is no generator. If the power fails, the car must still move itself to the evacuation exit floor so people can leave.",
		why: "A Class A car that dies between floors has failed its one power trick."
	},
	{
		id: "q-70-4",
		skillId: "en81-70",
		prompt: "Power operated sliding doors in EN 81-70 exist because…",
		choices: [
			"They look more expensive.",
			"A person using a wheelchair or walking aid cannot be asked to wrestle a hinged door and hold it.",
			"Firefighters prefer them for hose runs.",
			"EN 81-73 requires them to park."
		],
		answer: 1,
		statute: "Doors must be power operated sliding doors, with minimum clear openings by car type.",
		plain: "Independent use includes getting through the opening without a doorman.",
		why: "76 also requires horizontal sliding doors on car and landings. Same idea, higher stakes."
	},
	{
		id: "q-family-3",
		skillId: "family-map",
		prompt: "Which standard is the accessibility extra on top of 20?",
		choices: [
			"EN 81-70",
			"EN 81-58",
			"EN 81-77",
			"EN 81-50"
		],
		answer: 0,
		statute: "EN 81-70 provides additional requirements to EN 81-20 for accessible passenger elevators.",
		plain: "70 is how a person including a person with disability uses the car on a standard day.",
		why: "76 is how they leave on a bad day. Pair them."
	},
	{
		id: "q-76b-5",
		skillId: "en81-76-building",
		prompt: "Safe areas in front of an evacuation elevator are…",
		choices: [
			"Optional artwork zones.",
			"Fire- and smoke-protected landings. Unused floors can be shut behind fire doors or shutters instead of offering a full safe area.",
			"The machine room.",
			"Any corridor with a green running-man sign."
		],
		answer: 1,
		statute: "Fire- and smoke-protected landing areas are required in front of evacuation elevators. They are not required on every served floor; unused landings can be protected by fire shutters or doors.",
		plain: "The place you wait for the car must still be a place you can breathe.",
		why: "Most 76 failures will be lobby failures, not controller failures."
	},
	{
		id: "q-reg-puwer",
		skillId: "dutyholder",
		prompt: "LOLER applies to a workplace elevator. Does PUWER still apply?",
		choices: [
			"No. LOLER replaces PUWER for every elevator.",
			"Yes. The elevator is still work equipment, so maintenance and training stay under PUWER.",
			"Only if the elevator is a firefighter elevator.",
			"Only during the six-month examination."
		],
		answer: 1,
		statute: "PUWER requires work equipment to be suitable, maintained, inspected where necessary, and used by people who have been given information and training. LOLER adds the lifting-specific examination. It does not switch PUWER off.",
		plain: "The responsible duty under LOLER does not cancel the responsible duty under PUWER. The elevator is still work equipment. It must be maintained, and the people who use it must be trained.",
		why: "A clean examination report does not show that the responsible duty to train users has been met."
	},
	{
		id: "q-reg-fire",
		skillId: "dutyholder",
		prompt: "Which fire safety law applies to a block of flats in Scotland?",
		choices: [
			"The Regulatory Reform (Fire Safety) Order 2005.",
			"The Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006.",
			"The Equality Act 2010.",
			"EN 81-73 on its own."
		],
		answer: 1,
		statute: "The Fire Safety Order applies in England and Wales. Scotland uses the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006. Northern Ireland has its own order and regulations.",
		plain: "The responsible duty for a block of flats in Scotland sits under the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006. The Fire Safety Order 2005 does not apply. That order applies in England and Wales.",
		why: "Where the fire strategy relies on an elevator, the responsible duty is to keep that elevator able to do the job the strategy gives it. Citing the Fire Safety Order on a Scottish building names the wrong duty."
	},
	{
		id: "q-reg-eq",
		skillId: "dutyholder",
		prompt: "An elevator in an English office is out of service most weeks, and it is the only way to the meeting rooms. Which duty is that?",
		choices: [
			"EN 81-50 type testing.",
			"The Equality Act duty to make reasonable adjustments.",
			"RIDDOR, automatically.",
			"The Pressure Systems Safety Regulations."
		],
		answer: 1,
		statute: "Where a physical feature puts a disabled person at a substantial disadvantage, the Equality Act 2010 can require reasonable adjustments to the way an elevator is provided and kept in service. Northern Ireland still relies mainly on the Disability Discrimination Act 1995.",
		plain: "The responsible duty is to make a reasonable adjustment when the elevator is the only way in and a disabled person is put at a substantial disadvantage. Leaving that elevator out of service most weeks is a failure of the duty.",
		why: "EN 81-70 is a way to build the car. The responsible duty is to keep access real."
	},
	{
		id: "q-reg-riddor",
		skillId: "dutyholder",
		prompt: "Someone is trapped for twenty minutes and steps out unhurt. Is that automatically RIDDOR?",
		choices: [
			"Yes. Every entrapment is a dangerous occurrence.",
			"No. Being trapped is not, by itself, the test. A failed load-bearing part, or a specified injury, is.",
			"Yes, if the elevator is hydraulic.",
			"Only if the car is an evacuation elevator."
		],
		answer: 1,
		statute: "RIDDOR requires specified injuries, fatalities and listed dangerous occurrences to be reported. The collapse, overturning or failure of a load-bearing part of an elevator is a dangerous occurrence.",
		plain: "You only report the accidents the rules name, not every incident.",
		why: "Walking out unhurt after being stuck is not enough. You do report a serious injury, a death, or a part that holds the elevator if it breaks."
	},
	{
		id: "q-reg-mach",
		skillId: "family-map",
		prompt: "A stairlift and a platform that travels at 0.15 m/s or less are usually placed on the market under…",
		choices: [
			"The Lifts Directive, the same as a passenger elevator.",
			"The Supply of Machinery (Safety) Regulations, because they sit outside the Lifts Regulations.",
			"LOLER only, with no product law.",
			"EN 81-76."
		],
		answer: 1,
		statute: "The Lifts Regulations do not cover every machine that moves people. Elevators at 0.15 m/s or less, and several special cases, are outside them. Those machines are usually machinery.",
		plain: "The responsible duty when placing a stairlift or a slow platform on the market is under the machinery regulations, not the Lifts Regulations.",
		why: "The duty follows the product. You follow one of those two laws. You do not use both."
	},
	{
		id: "q-reg-cdm",
		skillId: "dutyholder",
		prompt: "When does CDM sit on an elevator?",
		choices: [
			"On every routine call-out.",
			"When the elevator is being installed or substantially altered. Designers have to remove foreseeable risk.",
			"Only after the first LOLER examination.",
			"Only if the car is over 1000 kg."
		],
		answer: 1,
		statute: "The Construction (Design and Management) Regulations 2015 apply to construction work, including installation and substantial alteration of an elevator.",
		plain: "Design the danger out. Do not leave it to the people doing the work.",
		why: "This duty applies when the elevator is put in, or changed in a big way. A normal repair visit is not this duty."
	},
	{
		id: "q-reg-wah",
		skillId: "dutyholder",
		prompt: "Work on the car top is…",
		choices: [
			"Not work at height, because the car has a roof.",
			"Work at height. It has to be planned, and the car must not make an uncontrolled movement under the person.",
			"Covered only by EN 81-58.",
			"Illegal in every case."
		],
		answer: 1,
		statute: "The Work at Height Regulations 2005 require work at height to be avoided where reasonably practicable, and otherwise planned and done by competent people. Car-top, shaft and landing-into-well work is work at height.",
		plain: "The responsible duty under the Work at Height Regulations covers the car top. The work must be planned, and the car must not make an uncontrolled movement under the person.",
		why: "The responsible duty includes a way to get the person down, not only a way to do the task."
	},
	{
		id: "q-reg-28",
		skillId: "en81-28",
		prompt: "EN 81-28 is…",
		choices: [
			"The firefighter phone from the car to the officer at the access level.",
			"The elevator autodialer: it calls a rescue service, the service knows which car called, and it works if the power fails.",
			"The test for fire doors.",
			"The six-month thorough examination."
		],
		answer: 1,
		statute: "EN 81-28 requires an alarm so a trapped person can contact a rescue service. It is two-way, identifiable, and available on loss of the normal supply. A firefighter elevator has a separate communication line.",
		plain: "The responsible duty under EN 81-28 is the elevator autodialer. A trapped passenger uses it to speak to a rescue service. The firefighter line is a separate phone, from the car to the officer at the fire service access level.",
		why: "The responsible duty is not met by treating the firefighter phone as the elevator autodialer, or the autodialer as the firefighter line."
	},
	...ASME_QUESTIONS
];
var QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
var SKILLS = [
	{
		id: "family-map",
		name: "The EN 81 family",
		floor: "L",
		blurb: "Which part of the shaft does each standard actually cover.",
		relatedStandards: [
			"directive",
			"en81-20",
			"en81-50"
		]
	},
	{
		id: "dutyholder",
		name: "Who is on the hook",
		floor: "G",
		blurb: "Directive, LOLER, PUWER — the people, not the metal.",
		relatedStandards: ["directive", "loler"]
	},
	{
		id: "en81-20",
		name: "The base passenger elevator",
		floor: "20",
		blurb: "The car, the well, the doors — what every new elevator starts from.",
		relatedStandards: ["en81-20", "en81-50"]
	},
	{
		id: "en81-70",
		name: "Getting in independently",
		floor: "70",
		blurb: "Car types, doors, buttons a wheelchair user can actually use.",
		relatedStandards: ["en81-70", "part-m"]
	},
	{
		id: "en81-73",
		name: "Standard elevators in a fire",
		floor: "73",
		blurb: "Why a normal elevator parks itself and refuses to help.",
		relatedStandards: ["en81-73", "part-b"]
	},
	{
		id: "en81-72",
		name: "Firefighter elevators",
		floor: "72",
		blurb: "The elevator the fire brigade take upstairs, not the one you take down.",
		relatedStandards: ["en81-72", "part-b"]
	},
	{
		id: "en81-76-purpose",
		name: "Why 76 exists",
		floor: "76",
		blurb: "Self-rescue for people who cannot use the stairs.",
		relatedStandards: ["en81-76"]
	},
	{
		id: "en81-76-class",
		name: "Class A and Class B",
		floor: "76",
		blurb: "Simple building versus complex building — pick the right car.",
		relatedStandards: ["en81-76"]
	},
	{
		id: "en81-76-modes",
		name: "Three ways out",
		floor: "76",
		blurb: "Automatic, driver-assisted, remote-assisted.",
		relatedStandards: ["en81-76"]
	},
	{
		id: "en81-76-building",
		name: "EEL, power, water, doors",
		floor: "76",
		blurb: "The building has to play its part, not just the elevator.",
		relatedStandards: ["en81-76", "part-b"]
	},
	{
		id: "en81-28",
		name: "The alarm in the car",
		floor: "28",
		blurb: "Two-way talk when someone is stuck — not a bell that nobody hears.",
		relatedStandards: ["en81-28"]
	},
	{
		id: "existing",
		name: "Old elevators, new duties",
		floor: "80",
		blurb: "You cannot pretend a 1980s car is a 2025 car. Rank the hazards.",
		relatedStandards: [
			"en81-80",
			"en81-82",
			"en81-21"
		]
	},
	{
		id: "compare",
		name: "72, 73, and 76 together",
		floor: "★",
		blurb: "Which elevator does what when the alarm sounds.",
		relatedStandards: [
			"en81-72",
			"en81-73",
			"en81-76"
		]
	},
	...ASME_SKILLS
];
var SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s]));
var P_TRANSIT = .14;
var P_GUESS = .25;
var P_SLIP = .1;
var P_L0 = .22;
var MASTERY = .8;
function initMastery() {
	return Object.fromEntries(SKILLS.map((s) => [s.id, P_L0]));
}
function observe(pL, correct) {
	const prior = clamp(pL, .02, .98);
	const posterior = correct ? prior * .9 / (prior * .9 + (1 - prior) * P_GUESS) : prior * P_SLIP / (prior * P_SLIP + (1 - prior) * .75);
	return clamp(posterior + (1 - posterior) * P_TRANSIT, .02, .98);
}
function introduce(pL) {
	return clamp(pL + (1 - pL) * .08, .02, .95);
}
function qualityFrom(correct, firstTry) {
	if (correct && firstTry) return 5;
	if (correct) return 3;
	return 1;
}
function reviewSm2(card, quality, now = Date.now()) {
	const ease0 = card?.ease ?? 2.5;
	const reps0 = card?.reps ?? 0;
	const interval0 = card?.interval ?? 0;
	const lapses0 = card?.lapses ?? 0;
	const ease = Math.max(1.3, ease0 + (.1 - (5 - quality) * (.08 + (5 - quality) * .02)));
	if (quality < 3) return {
		ease,
		interval: 1,
		reps: 0,
		due: now + 6e5,
		lapses: lapses0 + 1
	};
	let interval = 1;
	const reps = reps0 + 1;
	if (reps === 1) interval = 1;
	else if (reps === 2) interval = 3;
	else interval = Math.round(interval0 * ease);
	return {
		ease,
		interval,
		reps,
		due: now + interval * 24 * 60 * 60 * 1e3,
		lapses: lapses0
	};
}
function pickQuestions(opts) {
	const now = opts.now ?? Date.now();
	const region = opts.region ?? "eu";
	const recent = new Set(opts.recentIds.slice(-8));
	const scored = QUESTIONS.filter((q) => (q.region ?? "eu") === region && !recent.has(q.id)).map((q) => {
		const pL = opts.mastery[q.skillId] ?? .22;
		const card = opts.sm2[q.id];
		const dueBoost = card && card.due <= now ? 1.35 : card ? .7 : 1;
		const zone = pL > .2 && pL < .88 ? 1.25 : .8;
		const prefer = opts.preferSkills?.includes(q.skillId) ? 1.4 : 1;
		const weak = 1 + (1 - pL);
		const jitter = .92 + Math.random() * .16;
		return {
			q,
			score: dueBoost * zone * prefer * weak * jitter
		};
	});
	scored.sort((a, b) => b.score - a.score);
	const picked = [];
	const usedSkills = [];
	for (const row of scored) {
		if (picked.length >= opts.n) break;
		if (usedSkills.filter((s) => s === row.q.skillId).length >= 2 && picked.length + 1 < opts.n) continue;
		picked.push(row.q);
		usedSkills.push(row.q.skillId);
	}
	if (picked.length < opts.n) for (const row of scored) {
		if (picked.length >= opts.n) break;
		if (!picked.includes(row.q)) picked.push(row.q);
	}
	return picked;
}
var PLACEMENT_IDS = [
	"q-family-1",
	"q-duty-1",
	"q-70-1",
	"q-73-1",
	"q-72-1",
	"q-76p-1",
	"q-76c-1",
	"q-76m-1"
];
function skillsIn(region = "eu") {
	return SKILLS.filter((s) => (s.region ?? "eu") === region);
}
function overallMastery(mastery, region = "eu") {
	const vals = skillsIn(region).map((s) => mastery[s.id] ?? .22);
	if (!vals.length) return 0;
	return vals.reduce((a, b) => a + b, 0) / vals.length;
}
function weakSkills(mastery, n = 3, region = "eu") {
	return skillsIn(region).sort((a, b) => (mastery[a.id] ?? 0) - (mastery[b.id] ?? 0)).slice(0, n).map((s) => s.id);
}
function masteredCount(mastery, region = "eu") {
	return skillsIn(region).filter((s) => (mastery[s.id] ?? 0) >= MASTERY).length;
}
var empty = {
	mastery: initMastery(),
	sm2: {},
	lessonsDone: [],
	scenariosDone: [],
	recentQuestionIds: [],
	log: [],
	streak: 0,
	lastActiveDay: "",
	answers: 0,
	correct: 0,
	placementDone: false,
	displayName: "",
	codeRegion: "eu"
};
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function nextStreak(last, streak) {
	if (last === today()) return streak || 1;
	const y = /* @__PURE__ */ new Date();
	y.setDate(y.getDate() - 1);
	if (last === y.toISOString().slice(0, 10)) return streak + 1;
	return 1;
}
var useProgress = create()(persist((set, get) => ({
	hydrated: false,
	setHydrated: (v) => set({ hydrated: v }),
	...empty,
	markAnswer: ({ questionId, skillId, correct, firstTry }) => {
		const s = get();
		const pL = observe(s.mastery[skillId] ?? .22, correct);
		const q = qualityFrom(correct, firstTry);
		const card = reviewSm2(s.sm2[questionId], q);
		const streak = nextStreak(s.lastActiveDay, s.streak);
		set({
			mastery: {
				...s.mastery,
				[skillId]: pL
			},
			sm2: {
				...s.sm2,
				[questionId]: card
			},
			recentQuestionIds: [...s.recentQuestionIds, questionId].slice(-24),
			log: [...s.log, {
				ts: Date.now(),
				questionId,
				skillId,
				correct
			}].slice(-200),
			answers: s.answers + 1,
			correct: s.correct + (correct ? 1 : 0),
			streak,
			lastActiveDay: today()
		});
	},
	completeLesson: (lessonId, skillIds) => {
		const s = get();
		if (s.lessonsDone.includes(lessonId)) return;
		const mastery = { ...s.mastery };
		for (const id of skillIds) mastery[id] = introduce(mastery[id] ?? .22);
		set({
			lessonsDone: [...s.lessonsDone, lessonId],
			mastery,
			streak: nextStreak(s.lastActiveDay, s.streak),
			lastActiveDay: today()
		});
	},
	completeScenario: (id, skillIds, successRate) => {
		const s = get();
		const mastery = { ...s.mastery };
		for (const sid of skillIds) mastery[sid] = observe(mastery[sid] ?? .22, successRate >= .67);
		set({
			scenariosDone: s.scenariosDone.includes(id) ? s.scenariosDone : [...s.scenariosDone, id],
			mastery,
			streak: nextStreak(s.lastActiveDay, s.streak),
			lastActiveDay: today()
		});
	},
	finishPlacement: () => set({ placementDone: true }),
	touchStreak: () => {
		const s = get();
		set({
			streak: nextStreak(s.lastActiveDay, s.streak),
			lastActiveDay: today()
		});
	},
	reset: () => set({
		...empty,
		hydrated: true
	}),
	setName: (displayName) => set({ displayName }),
	setCodeRegion: (codeRegion) => set({ codeRegion })
}), {
	name: "liftiq-progress-v1",
	skipHydration: true,
	partialize: (s) => ({
		mastery: s.mastery,
		sm2: s.sm2,
		lessonsDone: s.lessonsDone,
		scenariosDone: s.scenariosDone,
		recentQuestionIds: s.recentQuestionIds,
		log: s.log,
		streak: s.streak,
		lastActiveDay: s.lastActiveDay,
		answers: s.answers,
		correct: s.correct,
		placementDone: s.placementDone,
		displayName: s.displayName,
		codeRegion: s.codeRegion
	})
}));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/seo-BIvSe_ST.js
var SITE = "https://elevatoriq.net";
var HOME_FAQS = [
	{
		q: "What is EN 81?",
		a: "EN 81 is the European family of elevator safety standards. EN 81-20 is the base for a new passenger lift. Other parts add one job: 70 is accessibility, 72 is the firefighter lift, 73 is fire recall, and 76 is the evacuation lift."
	},
	{
		q: "What is the difference between a firefighter lift and an evacuation lift?",
		a: "A firefighter lift, EN 81-72, is the fire brigade’s tool. An evacuation lift, EN 81-76, is for people who cannot use the stairs. They are not the same elevator."
	},
	{
		q: "What is ASME A17.1?",
		a: "ASME A17.1 / CSA B44 is the safety code for new elevators in the United States and Canada. It is not EN 81. The edition that applies is the one the local authority has adopted."
	},
	{
		q: "What is LOLER for an elevator?",
		a: "LOLER is the UK rule that a passenger elevator is thoroughly examined, usually every six months. It is the check after the elevator is in the building, not the standard that designed it."
	}
];
function pageHead({ title, description, path, jsonLd }) {
	const meta = [{ title }, {
		name: "description",
		content: description
	}];
	if (jsonLd) meta.push({ "script:ld+json": jsonLd });
	return {
		meta,
		links: [{
			rel: "canonical",
			href: `${SITE}${path}`
		}]
	};
}
function homeJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "WebSite",
			name: "ElevatorIQ",
			url: `${SITE}/`,
			description: "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand."
		}, {
			"@type": "FAQPage",
			mainEntity: HOME_FAQS.map((item) => ({
				"@type": "Question",
				name: item.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.a
				}
			}))
		}]
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/question-card-BPUdogeq.js
function QuestionCard({ question, index, total, onResolved, onCorrect, onMiss, holdOnMiss = false, exam = false }) {
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [firstWrong, setFirstWrong] = (0, import_react.useState)(false);
	const [locked, setLocked] = (0, import_react.useState)(false);
	const continueRef = (0, import_react.useRef)(null);
	const revealed = picked !== null;
	const correct = picked === question.answer;
	(0, import_react.useEffect)(() => {
		if (!locked) return;
		continueRef.current?.scrollIntoView({
			block: "center",
			behavior: "smooth"
		});
	}, [locked]);
	function choose(i) {
		if (locked) return;
		setPicked(i);
		if (exam) {
			setLocked(true);
			if (i !== question.answer) setFirstWrong(true);
			else onCorrect?.();
			return;
		}
		if (i === question.answer) {
			setLocked(true);
			onCorrect?.();
		} else {
			setFirstWrong(true);
			onMiss?.(i);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-faint",
				children: [
					index + 1,
					" of ",
					total
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-pretty sm:text-3xl",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: question.choices.map((choice, i) => {
					const isPicked = picked === i;
					const isAnswer = i === question.answer;
					const show = revealed && (isPicked || locked && isAnswer);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: locked,
						onClick: () => choose(i),
						className: cn("flex min-h-14 w-full items-start gap-3 rounded-xl px-4 py-3 text-left text-base transition-colors duration-150", "shadow-[var(--shadow-border)]", !show && "bg-surface hover:bg-inset", show && isAnswer && "bg-green text-ok-fg", show && isPicked && !isAnswer && "bg-orange text-accent-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 font-mono text-xs text-muted",
							children: String.fromCharCode(65 + i)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: choice })]
					}) }, choice);
				})
			}),
			revealed && !(holdOnMiss && !locked) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					ref: continueRef,
					onClick: () => onResolved(correct, !firstWrong),
					className: "w-full sm:w-auto",
					children: "Continue"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base text-muted",
					children: "Try again."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: question.statute,
					plain: question.plain,
					why: question.why
				})]
			}) : null
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/progress-4DtlLoWp.js
function Progress({ value, className, tone = "accent" }) {
	const pct = Math.max(0, Math.min(100, Math.round(value * 100)));
	const fill = tone === "ok" ? "bg-ok" : tone === "paper" ? "bg-paper" : "bg-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-fg/10", className),
		role: "progressbar",
		"aria-valuenow": pct,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-300", fill),
			style: { width: `${pct}%` }
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/plain-sketch--IG_AuEP.js
var RETEACH = {
	"q-family-1": {
		angle: "Walk the lobby",
		teach: "Picture three doors. One parks in a fire. One waits for the fire brigade. One can be a way out. All three can say EN 81. The part number is which door you are standing at.",
		prompt: "A brochure says only “EN 81”. What do you still not know?",
		choices: [
			"Which part, and therefore which job the car does.",
			"The paint colour.",
			"Whether the building has stairs."
		],
		answer: 0
	},
	"q-family-2": {
		angle: "Factory, then the lab",
		teach: "20 is the finished passenger elevator in the shaft. 50 is the sums and the tests on the pieces that went into it. 1 and 2 are the old pair those two replaced.",
		prompt: "A new car still specified as EN 81-1 is…",
		choices: [
			"Written to the retired base, not 20 with 50.",
			"Automatically a firefighter elevator.",
			"Exempt from LOLER."
		],
		answer: 0
	},
	"q-duty-1": {
		angle: "After the keys are handed over",
		teach: "The manufacturer’s job ends when the elevator is allowed onto the market. After that, the responsible duty under LOLER sits with the owner or whoever controls the elevator. The fire brigade do not hold that duty.",
		prompt: "Nine months with no thorough examination is whose problem?",
		choices: [
			"The person who controls the elevator in use.",
			"The passenger who rode it.",
			"The standard that designed the buttons."
		],
		answer: 0
	},
	"q-duty-2": {
		angle: "The diary, not the brochure",
		teach: "People-carrying elevators are usually examined every six months. A new evacuation car does not get a longer gap. Nine months is a late diary, even if the car is shiny.",
		prompt: "Which clock is LOLER using for a passenger elevator?",
		choices: [
			"About every six months, unless a written scheme says otherwise.",
			"Once a year by default.",
			"Only when the fire alarm is tested."
		],
		answer: 0
	},
	"q-20-1": {
		angle: "The everyday car",
		teach: "20 is the car you ride to a meeting. It does not, by itself, park-and-stay (that is 73), wait for the fire brigade (72), or keep running as a way out (76). Those are extra parts stacked on top.",
		prompt: "A wheelchair user in a fire needs which extra, not 20 alone?",
		choices: [
			"An evacuation part such as EN 81-76, designed in.",
			"A heavier rated load on the same 20 car.",
			"A poster inside a standard car."
		],
		answer: 0
	},
	"q-20-2": {
		angle: "Two different test days",
		teach: "50 is the integration half for a new elevator, beside 20. 80 is later, when an old elevator is still in a building and you are ranking what to fix. Same word “test”, different life stage.",
		prompt: "EN 81-50 belongs with…",
		choices: [
			"EN 81-20, on a new passenger elevator.",
			"LOLER’s six-month visit.",
			"A 1990 car you are trying to badge as 76."
		],
		answer: 0
	},
	"q-70-1": {
		angle: "Who fits in the car",
		teach: "Type 2 is a wheelchair user plus someone with them: 1100 × 1400 mm, 630 kg, 900 mm door. Type 1 is the squeezed car for an old building that cannot give you that. A new building does not get to start at Type 1.",
		prompt: "New building, first accessible car. You write…",
		choices: [
			"Type 2 or larger.",
			"Type 1, because it is the smallest in the table.",
			"Whatever the architect left in the core."
		],
		answer: 0
	},
	"q-70-2": {
		angle: "The long car",
		teach: "Type 3 is the longer one: 1100 × 2100 mm, 1000 kg. A wheelchair user, other people, and a stretcher can be the reason. It is also where Class B evacuation cars start.",
		prompt: "A hospital wants a stretcher in the car. Which type is that story?",
		choices: [
			"Type 3.",
			"Type 1.",
			"A goods-only hoist."
		],
		answer: 0
	},
	"q-70-3": {
		angle: "The marble problem",
		teach: "Table 3 sizes are measured between the structural walls. Decoration may steal at most 15 mm. Forty millimetres of panelling is the lining eating the wheelchair.",
		prompt: "Finishes take 40 mm off a Type 2 width. That car is…",
		choices: [
			"No longer the size the table promised.",
			"Fine, because finishes sit outside the rule.",
			"Only wrong if the colour contrast is poor."
		],
		answer: 0
	},
	"q-73-1": {
		angle: "The trained dog",
		teach: "Alarm. The standard car goes to the floor it was told, opens, and stops being an elevator. People who were in it get out. It does not keep collecting floors, and it does not turn into an evacuation car.",
		prompt: "After a standard car has recalled, what should a landing call do?",
		choices: [
			"Nothing useful — the car is out of normal service.",
			"Bring it back up to sweep the fire floor.",
			"Start automatic evacuation mode."
		],
		answer: 0
	},
	"q-73-2": {
		angle: "The poster and the hardware",
		teach: "The poster is true for the ordinary car, because that car will park. A firefighter car and an evacuation car need different signs. One lobby with one message and three different machines is how someone boards the wrong door.",
		prompt: "The “do not use the elevator” poster belongs, without extra words, on…",
		choices: [
			"The standard car that will park.",
			"Every door, including a signed 76 car.",
			"Only the machine room."
		],
		answer: 0
	},
	"q-72-1": {
		angle: "Who holds the key",
		teach: "This car is a tool. The fire brigade take it with their switch. It has a second supply and it is built to stay alive when water runs down the shaft. A passenger does not self-rescue in it by pressing a landing button.",
		prompt: "After the alarm, a firefighter elevator is waiting for…",
		choices: [
			"The fire service, under their control.",
			"Any resident who can reach the button.",
			"Goods pallets."
		],
		answer: 0
	},
	"q-72-2": {
		angle: "Same footprint, different job",
		teach: "The smallest firefighter car is 1100 × 1400 mm, 630 kg, 800 mm door — the same sort of footprint as an accessible Type 2. The size does not make it an evacuation elevator. The key, the power and the water protection do.",
		prompt: "A car the size of Type 2 is a firefighter elevator only if…",
		choices: [
			"It is also built and controlled to EN 81-72.",
			"The floor area matches, full stop.",
			"Someone fits a larger mirror."
		],
		answer: 0
	},
	"q-72-3": {
		angle: "Two kinds of water",
		teach: "Hose water in the shaft is expected, so the electrics are protected and the pit can drain. A sprinkler head in the well or the machine space is a shower on the controller. That one is not allowed.",
		prompt: "Which water is the firefighter elevator designed around?",
		choices: [
			"Firefighting water running in, not sprinklers over the gear.",
			"Sprinklers in the well, to cool the car.",
			"A flooded pit on purpose."
		],
		answer: 0
	},
	"q-76p-1": {
		angle: "The old wait",
		teach: "For years the plan was a refuge and a wait. 76 is the first European standard that lets a new, specially built elevator be a way out for people who cannot use the stairs. It does not rewrite every passenger elevator.",
		prompt: "76 changes the plan for whom?",
		choices: [
			"People who cannot use the stairs, in a new elevator built for it.",
			"Every existing passenger elevator from next year.",
			"Goods elevators only."
		],
		answer: 0
	},
	"q-76p-2": {
		angle: "You cannot time-travel a car",
		teach: "A 2018 elevator was built before 76 existed. Software and a sign do not make it that standard. You can improve an old car under the existing-elevator rules. You cannot re-date its birth.",
		prompt: "A software patch on a 2018 car gives you…",
		choices: [
			"A better old car, not an EN 81-76 elevator.",
			"A full 76 evacuation elevator.",
			"An exemption from the fire strategy."
		],
		answer: 0
	},
	"q-76p-3": {
		angle: "The event on the alarm panel",
		teach: "76 is for a fire alarm and the orderly evacuation the strategy names. It steps aside for earthquake, flood, storm, explosion and chemical attack. If the well itself is on fire or full of water, this is not the way out.",
		prompt: "Which event is inside 76’s job?",
		choices: [
			"A fire alarm, with the landing still a safe place to wait.",
			"The building flooding.",
			"An earthquake."
		],
		answer: 0
	},
	"q-76c-1": {
		angle: "The simpler plot",
		teach: "Class A is a lower building that does not already need a firefighter elevator, one way-out floor, no second power supply, no one driving it from a desk. Height and kit decide the class, not how disabled the occupants are.",
		prompt: "A 40-storey tower that already needs a firefighter elevator is…",
		choices: [
			"Not a Class A story.",
			"Class A if the car is large.",
			"Class A because it has a refuge."
		],
		answer: 0
	},
	"q-76c-2": {
		angle: "The fuller kit",
		teach: "Class B brings a second power supply, a larger car, and the option of more than one exit floor and a person driving from outside the car. There is no remote desk on Class A.",
		prompt: "You want someone in a control room to send the car. That is…",
		choices: [
			"Class B.",
			"Class A with a poster.",
			"EN 81-73."
		],
		answer: 0
	},
	"q-76c-3": {
		angle: "Borrow the 70 table",
		teach: "Class A starts at Type 2: wheelchair and a companion. Class B starts at Type 3 or Type 4, the longer or the turning car. 76 does not invent a new size table. It points at 70.",
		prompt: "Class A, no stretcher. Minimum car?",
		choices: [
			"Type 2.",
			"Type 1.",
			"No minimum."
		],
		answer: 0
	},
	"q-76m-1": {
		angle: "Two in the morning",
		teach: "Automatic means you call the car and it takes you to the way-out floor. Nobody has to be awake to drive it. Driver and remote both need another person. Recall-and-park is the standard car giving up.",
		prompt: "Independent self-rescue is which behaviour?",
		choices: [
			"The car comes when you call and goes to the exit floor by itself.",
			"A firefighter takes the key.",
			"The car parks and opens at the designated floor."
		],
		answer: 0
	},
	"q-76m-2": {
		angle: "A staffed desk",
		teach: "Remote means a person outside the car can see you, talk to you and send the car. That needs Class B, speech and video, and a human who is actually there. A phone in a drawer is not a mode.",
		prompt: "Remote with nobody on the desk is…",
		choices: [
			"A mode you have not really provided.",
			"Still Class A automatic.",
			"A firefighter elevator."
		],
		answer: 0
	},
	"q-76m-3": {
		angle: "The roster",
		teach: "Driver-assisted is a trained person in the car, collecting people. A hospital that staffs the night can do that. A block of flats with no waking staff cannot. The mode has to match who is in the building.",
		prompt: "Driver-assisted without a trained person on duty is…",
		choices: [
			"A plan that fails when the alarm is real.",
			"The same as automatic.",
			"What Class A remote means."
		],
		answer: 0
	},
	"q-76b-1": {
		angle: "Can you leave the building?",
		teach: "EEL means evacuation exit landing: the floor where the car stops and you can actually get outside. A floor you cannot leave is just another landing. Recall is supposed to aim at a real way out.",
		prompt: "The car stops at a basement with no route to open air. That floor is…",
		choices: [
			"Not an evacuation exit landing.",
			"A valid EEL if the sign is green.",
			"The machine room."
		],
		answer: 0
	},
	"q-76b-2": {
		angle: "The landing has turned",
		teach: "Suspend service is the “stop, this way out is no longer safe” signal. The car goes to a landing that still has a safe route, and it comes out of evacuation service. It is not the celebration at the end, and it is not the fire brigade taking a 72 car.",
		prompt: "Smoke fills the safe area. The evacuation car should…",
		choices: [
			"Leave evacuation service and go to a landing that is still a way out.",
			"Keep opening there so nobody waits.",
			"Wait for the next LOLER visit."
		],
		answer: 0
	},
	"q-76b-3": {
		angle: "One minute",
		teach: "When the supply changes, a Class B car has to be back in the evacuation within 60 seconds. A generator that “usually” starts after a few minutes is outside that sum. Evacuation does not pause for an engineer.",
		prompt: "The standby supply takes four minutes. Against 76 that is…",
		choices: [
			"Too slow. The limit is 60 seconds.",
			"Fine, if it starts eventually.",
			"A LOLER interval."
		],
		answer: 0
	},
	"q-76b-4": {
		angle: "The long drop between doors",
		teach: "If two landing doors are more than 7 m apart, someone stuck between them needs a door into the shaft in the middle. Tall atriums and skipped floors are where this appears. It is not a spiral stair inside the well.",
		prompt: "Landing doors 9 m apart on an evacuation elevator need…",
		choices: [
			"An intermediate emergency evacuation door.",
			"Nothing, if the car is Type 2.",
			"A poster on each floor."
		],
		answer: 0
	},
	"q-28-1": {
		angle: "A person who knows the shaft",
		teach: "The alarm is a conversation. The trapped person can talk both ways to a rescue service that can tell which elevator called, and it still works when the normal power has gone. A bell in the pit is not that.",
		prompt: "The building is dark and someone is in the car. 28 still expects…",
		choices: [
			"Two-way speech to a rescue service that can identify the elevator.",
			"An email to facilities.",
			"A light and no voice."
		],
		answer: 0
	},
	"q-28-2": {
		angle: "Assistance needs a voice",
		teach: "Driver mode and remote mode both depend on another person. If they cannot hear you, they cannot assist. Remote also needs video. Automatic mode still needs the alarm for the moment the car simply stops.",
		prompt: "Why does a remote evacuation car care about speech and video?",
		choices: [
			"The person helping is not in the car with you.",
			"It is only for hotel background music.",
			"EN 81-71 wants a siren."
		],
		answer: 0
	},
	"q-ex-1": {
		angle: "An old car stays old",
		teach: "A 1992 elevator is not pulled forward into 72 or 76. 80 is how you rank the safety gaps. 82 is how you improve access where the building will allow it. Pretending it is a new evacuation elevator is the dishonest move.",
		prompt: "Honest starting pair for that 1992 car?",
		choices: [
			"EN 81-80 and EN 81-82.",
			"EN 81-76 and EN 81-72, applied backwards.",
			"Leave it until it is replaced, with no look."
		],
		answer: 0
	},
	"q-ex-2": {
		angle: "New machine, old hole",
		teach: "21 is for a new passenger elevator dropped into an existing building whose pit, headroom or well cannot meet 20. You add protection so the tight hole is still safe. It is not a way to badge an old controller as 76.",
		prompt: "EN 81-21 shows up when…",
		choices: [
			"The new elevator will not fit the clearances of an old building.",
			"You want automatic evacuation on a 1990 panel.",
			"You are writing a LOLER template."
		],
		answer: 0
	},
	"q-cmp-1": {
		angle: "Three manners, one alarm",
		teach: "Same bell, three cars. The standard car parks and stays out of service. The firefighter car waits for the fire brigade. The evacuation car, if you specified one and the landing is still safe, keeps working for people who cannot use the stairs.",
		prompt: "Which line is the right order: 73, then 72, then 76?",
		choices: [
			"Parks. Fire brigade. Way out.",
			"All three keep taking passenger calls.",
			"72 parks, 76 is for goods, 73 is for stretchers."
		],
		answer: 0
	},
	"q-cmp-2": {
		angle: "Do not downgrade the fire brigade",
		teach: "A tall building that needs a firefighter elevator does not get to swap it for a Class A evacuation car. Class A is the simpler building. 72 and 76 can both be needed. One does not delete the other.",
		prompt: "Client: “Class A instead of the firefighter elevator.” You say…",
		choices: [
			"No. That class is not for a building that must have 72. You may need both.",
			"Yes. 76 replaces 72 everywhere.",
			"Fit Type 1 and call it dual-use."
		],
		answer: 0
	},
	"q-cmp-3": {
		angle: "Nobody has to be free",
		teach: "Self-rescue means the person leaves without waiting for a trained helper. That is automatic evacuation, not the firefighter’s key and not the standard car parking itself. An alarm button alone is not a way out.",
		prompt: "Who can leave without a helper being free?",
		choices: [
			"A person using automatic EN 81-76 operation.",
			"A person in a standard car after 73 recall.",
			"A person hoping the fire brigade take them."
		],
		answer: 0
	},
	"q-duty-3": {
		angle: "The mark is not the duty",
		teach: "CE marking shows the elevator was allowed onto the market under the Lifts Directive. That is not the responsible duty. After handover, the responsible duty under LOLER, and the fire strategy, still apply. The mark does not make it a firefighter elevator or an evacuation elevator.",
		prompt: "A new car has a CE mark. LOLER…",
		choices: [
			"Still applies once people are riding it.",
			"Never applies.",
			"Only applies if the mark is missing."
		],
		answer: 0
	},
	"q-76p-4": {
		angle: "Plan B stays",
		teach: "76 does not let you throw away the refuge and the evacuation chair. The standard refuses to cover the day the evacuation elevator itself is broken or unavailable. Elevators stop. The other aids are still the plan.",
		prompt: "The new evacuation elevator is out of service. People who cannot use stairs…",
		choices: [
			"Still need the aids and refuges the strategy kept.",
			"Have no plan, because 76 replaced them.",
			"Must use firefighter control instead, by default."
		],
		answer: 0
	},
	"q-76c-4": {
		angle: "No generator, still a way out",
		teach: "Class A has no generator. If the power fails, the car must still move itself to the evacuation exit floor so people can leave. A car that stops between floors has not done that.",
		prompt: "Mains fail on a Class A car. It should…",
		choices: [
			"Move to the evacuation exit landing.",
			"Wait in the shaft for an engineer.",
			"Become a firefighter elevator."
		],
		answer: 0
	},
	"q-70-4": {
		angle: "No doorman",
		teach: "A hinged door asks the wheelchair user to pull, hold and reverse. Automatic horizontal sliding doors do that work. Independent use includes the opening, not only the space inside the car.",
		prompt: "Why not a heavy hinged landing door on an accessible car?",
		choices: [
			"The person who needs the elevator cannot be the person who holds it.",
			"Firefighters dislike the look.",
			"EN 81-73 uses them to park."
		],
		answer: 0
	},
	"q-family-3": {
		angle: "A Tuesday, then a bad day",
		teach: "70 is the extra on 20 for using the car on an ordinary day: space, doors, controls. 76 is the extra for leaving when the stairs are no good. 50 is the lab. 58 and 77 are other jobs.",
		prompt: "Accessibility of a new passenger elevator, on a normal day, is…",
		choices: [
			"EN 81-70.",
			"EN 81-50.",
			"EN 81-58."
		],
		answer: 0
	},
	"q-76b-5": {
		angle: "The place you wait",
		teach: "The landing in front of an evacuation elevator has to be protected from fire and smoke, because that is where someone waits for the car. A green running-man in an ordinary corridor is not that. Floors the elevator does not serve can be shut off with fire doors or shutters instead.",
		prompt: "A safe area fails when…",
		choices: [
			"You cannot breathe there while you wait.",
			"The artwork is missing.",
			"It is not the machine room."
		],
		answer: 0
	}
};
function reteachFor(question) {
	return RETEACH[question.id] ?? {
		angle: "Same fact, other door",
		teach: question.plain,
		prompt: "Which line is the same rule, told from the landing?",
		choices: [
			question.choices[question.answer],
			question.choices[(question.answer + 1) % 4],
			question.choices[(question.answer + 2) % 4]
		],
		answer: 0
	};
}
/** One picture per question, showing the answer that question is teaching. */
var ANSWER_ART = {
	"q-family-1": {
		src: "/graphics/ans2/q-family-1d.jpg",
		alt: "Three different elevator doors in one lobby: a standard car, a firefighter car, and an evacuation car."
	},
	"q-family-2": {
		src: "/graphics/ans2/q-family-2e.jpg",
		alt: "A finished passenger car beside the safety parts that were tested before it was installed."
	},
	"q-family-3": {
		src: "/graphics/ans2/q-family-3n.jpg",
		alt: "Two dark vertical door panels face each other and part in the middle. They are a different colour from the wall. The panel is on the right-hand side wall."
	},
	"q-duty-1": {
		src: "/graphics/ans2/q-duty-1.jpg",
		alt: "Building keys and an examination diary on the desk of the person who controls the elevator."
	},
	"q-duty-2": {
		src: "/graphics/ans2/q-duty-2b.jpg",
		alt: "A six-month calendar beside an examination diary that is already overdue."
	},
	"q-duty-3": {
		src: "/graphics/ans2/q-duty-3.jpg",
		alt: "A new elevator nameplate next to the in-service examination diary that still has to be kept."
	},
	"q-20-1": {
		src: "/graphics/ans2/q-20-1n.jpg",
		alt: "A modern passenger elevator stopped at the lobby while a fire alarm glows. It is not a way out."
	},
	"q-20-2": {
		src: "/graphics/ans2/q-20-2c.jpg",
		alt: "Safety components on a test bench, the integration half that sits beside the finished car."
	},
	"q-70-1": {
		src: "/graphics/ans2/q-70-1d.jpg",
		alt: "A new-building elevator large enough for a wheelchair user and a companion, with a wide door."
	},
	"q-70-2": {
		src: "/graphics/ans2/q-70-2m.jpg",
		alt: "A long elevator car with room for a wheelchair user, other passengers, and a stretcher."
	},
	"q-70-3": {
		src: "/graphics/ans2/q-70-3d.jpg",
		alt: "Thick decorative wall panels inside an elevator, taking space away from the required car size."
	},
	"q-70-4": {
		src: "/graphics/ans2/q-70-4o.jpg",
		alt: "Power-operated sliding elevator doors open on their own, with nobody holding them."
	},
	"q-73-1": {
		src: "/graphics/ans2/q-73-1o.jpg",
		alt: "A standard elevator recalled to the exit floor, doors open, taken out of service during a fire alarm."
	},
	"q-73-2": {
		src: "/graphics/ans2/q-73-2d.jpg",
		alt: "A standard parked elevator beside a fire-instruction notice, unlike a specially signed evacuation car."
	},
	"q-72-1": {
		src: "/graphics/ans2/q-72-1b.jpg",
		alt: "A firefighter elevator with a key switch, waiting for the fire service, not for passengers."
	},
	"q-72-2": {
		src: "/graphics/ans2/q-72-2b.jpg",
		alt: "A basic firefighter car the size of an accessible Type 2 car, not a stretcher car."
	},
	"q-72-3": {
		src: "/graphics/ans2/q-72-3b.jpg",
		alt: "A dry firefighter shaft. Water is for the fire outside, not a sprinkler inside the well."
	},
	"q-76p-1": {
		src: "/graphics/ans2/q-76p-1.jpg",
		alt: "A specially built evacuation elevator open as a way out, not only a place to wait."
	},
	"q-76p-2": {
		src: "/graphics/ans2/q-76p-2.jpg",
		alt: "An older passenger elevator unchanged by a laptop. Software cannot turn it into an evacuation elevator."
	},
	"q-76p-3": {
		src: "/graphics/ans2/q-76p-3o.jpg",
		alt: "An evacuation elevator responding to a fire alarm, not to floodwater or a collapsed building."
	},
	"q-76p-4": {
		src: "/graphics/ans2/q-76p-4.jpg",
		alt: "An evacuation elevator with a refuge and an evacuation chair still in place as the backup."
	},
	"q-76c-1": {
		src: "/graphics/ans2/q-76c-1.jpg",
		alt: "A lower building with one exit to the street, no generator, and one evacuation elevator."
	},
	"q-76c-2": {
		src: "/graphics/ans2/q-76c-2.jpg",
		alt: "A Class B setup: a larger car, a generator, and a staffed control desk."
	},
	"q-76c-3": {
		src: "/graphics/ans2/q-76c-3c.jpg",
		alt: "A Class A car sized for a wheelchair user and a companion, next to a longer Class B car."
	},
	"q-76c-4": {
		src: "/graphics/ans2/q-76c-4.jpg",
		alt: "The mains have failed. With no generator, the car has still travelled to the exit floor and opened."
	},
	"q-76m-1": {
		src: "/graphics/ans2/q-76m-1c.jpg",
		alt: "An empty evacuation car with its own buttons, ready to run without a driver or a remote desk."
	},
	"q-76m-2": {
		src: "/graphics/ans2/q-76m-2.jpg",
		alt: "A staffed control desk with camera screens and a microphone linked to the elevator."
	},
	"q-76m-3": {
		src: "/graphics/ans2/q-76m-3.jpg",
		alt: "A simple drive control inside the elevator panel, for a trained person who is in the building."
	},
	"q-76b-1": {
		src: "/graphics/ans2/q-76b-1n.jpg",
		alt: "An elevator opening onto a lobby that leads straight out to fresh air."
	},
	"q-76b-2": {
		src: "/graphics/ans2/q-76b-2.jpg",
		alt: "An elevator leaving a smoke-filled landing and opening at a landing that is still safe."
	},
	"q-76b-3": {
		src: "/graphics/ans2/q-76b-3.jpg",
		alt: "Backup power bringing an evacuation elevator back into use within a minute."
	},
	"q-76b-4": {
		src: "/graphics/ans2/q-76b-4q.jpg",
		alt: "A tall gap between two landing doors, with an extra door into the shaft in between."
	},
	"q-76b-5": {
		src: "/graphics/ans2/q-76b-5.jpg",
		alt: "A protected lobby in front of an evacuation elevator, sealed so people can wait and breathe."
	},
	"q-28-1": {
		src: "/graphics/ans2/q-28-1b.jpg",
		alt: "An elevator alarm that opens a two-way call to a person who can answer."
	},
	"q-28-2": {
		src: "/graphics/ans2/q-28-2.jpg",
		alt: "Speech between the car and a person at a desk, so someone can actually assist."
	},
	"q-reg-28": {
		src: "/graphics/ans2/q-reg-28.jpg",
		alt: "The passenger autodialer in the car, separate from the firefighter telephone."
	},
	"q-ex-1": {
		src: "/graphics/ans2/q-ex-1c.jpg",
		alt: "An old small elevator being assessed for real hazards, not relabelled as a new evacuation car."
	},
	"q-ex-2": {
		src: "/graphics/ans2/q-ex-2.jpg",
		alt: "A new elevator fitted into an older, tighter shaft, with extra protection where space is missing."
	},
	"q-cmp-1": {
		src: "/graphics/ans2/q-cmp-1f.jpg",
		alt: "Three cars on one alarm: one parked, one waiting for the fire brigade, one still working as a way out."
	},
	"q-cmp-2": {
		src: "/graphics/ans2/q-cmp-2.jpg",
		alt: "A firefighter elevator and an evacuation elevator side by side. One does not replace the other."
	},
	"q-cmp-3": {
		src: "/graphics/ans2/q-cmp-3.jpg",
		alt: "An evacuation elevator open at the exit so a person can leave without waiting for a helper."
	},
	"q-reg-puwer": {
		src: "/graphics/ans2/q-reg-puwer.jpg",
		alt: "An examination diary and maintenance tools together. LOLER does not cancel the duty to maintain work equipment."
	},
	"q-reg-fire": {
		src: "/graphics/ans2/q-reg-fire.jpg",
		alt: "A Scottish block of flats whose fire duty is the Scottish fire law, not the English order."
	},
	"q-reg-eq": {
		src: "/graphics/ans2/q-reg-eq.jpg",
		alt: "An office elevator standing out of service, the only way up to the meeting rooms."
	},
	"q-reg-riddor": {
		src: "/graphics/ans2/q-reg-riddor.jpg",
		alt: "Someone has left an elevator unhurt. The report book stays closed because not every incident is reportable."
	},
	"q-reg-mach": {
		src: "/graphics/ans2/q-reg-machl.jpg",
		alt: "A stairlift and a slow vertical platform, placed on the market as machinery rather than as a lift."
	},
	"q-reg-cdm": {
		src: "/graphics/ans2/q-reg-cdmb.jpg",
		alt: "A pit designed with a way out, so the danger is removed on the drawing rather than left to the work method."
	},
	"q-reg-wah": {
		src: "/graphics/ans2/q-reg-wah.jpg",
		alt: "A car top prepared for work, with the elevator locked so it cannot move under the person."
	}
};
var FALLBACK = {
	src: "/graphics/practice-20-2.jpg",
	alt: "A passenger elevator in its shaft."
};
function PlainSketch({ questionId }) {
	const drawn = ANSWER_ART[questionId] ?? FALLBACK;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "mx-auto max-w-md overflow-hidden rounded-xl bg-night text-night-fg shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: drawn.src,
			alt: drawn.alt,
			className: "aspect-video w-full object-cover"
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/ad-slot-CFxuedQ6.js
function AdSlot({ slot, size }) {
	const ad = advertForSlot(slot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("overflow-hidden rounded-2xl shadow-[var(--shadow-border)]", ad.tone, size === "strip" && "p-4 sm:px-5 sm:py-4"),
		"aria-label": `Simulated advertisement for ${ad.brand}`,
		children: [size !== "strip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ad.img,
			alt: ad.alt,
			className: cn("w-full object-cover", size === "billboard" ? "aspect-[16/7] sm:aspect-[21/8]" : "aspect-video")
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn(size === "strip" ? "" : "p-5 sm:p-6"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm uppercase tracking-wider opacity-80",
				children: "Advertisement · Simulated"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-2 grid gap-3", size === "billboard" && "sm:grid-cols-[1fr_auto] sm:items-end", size === "strip" && "sm:grid-cols-[1fr_auto] sm:items-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [ad.brand, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "opacity-70",
							children: [" · ", ad.town]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-1 font-display font-semibold text-pretty", size === "billboard" ? "text-3xl sm:text-4xl" : "text-2xl"),
						children: ad.headline
					}),
					size !== "strip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-base opacity-90",
						children: ad.line
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/adverts/$id",
					params: { id: ad.id },
					className: cn("inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base", ad.tone.includes("bg-orange") ? "bg-paper text-paper-fg hover:bg-raised" : "bg-orange text-accent-fg hover:brightness-110"),
					children: ad.cta
				})]
			})]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/test-paper-rDInKrur.js
/** Fixed paper. One attempt each. No coaching until the score. */
var TEST_IDS = [
	"q-duty-1",
	"q-duty-2",
	"q-reg-puwer",
	"q-reg-fire",
	"q-reg-eq",
	"q-reg-riddor",
	"q-reg-mach",
	"q-reg-cdm",
	"q-reg-wah",
	"q-reg-28",
	"q-cmp-2",
	"q-73-1"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/lessons-ethRQC14.js
var LESSONS = [
	{
		id: "family",
		title: "A map of the shaft",
		kicker: "Orientation",
		minutes: 6,
		skillIds: ["family-map"],
		standardIds: ["directive", "en81-20"],
		summary: "EN 81 is a family, not a single book. 20 is the base. Everything else is a particular job stacked on top.",
		sections: [{
			heading: "One number, many jobs",
			statute: "The EN 81 series is titled ‘Safety rules for the construction and installation of elevators’. Part 20 covers passenger and goods passenger elevators. Other parts add particular applications: 70 accessibility, 72 firefighters, 73 behaviour in fire, 76 evacuation of persons with disabilities, 80 existing elevators, and so on. The Lifts Directive is the legal overlay that those harmonised parts support.",
			plain: "If someone says ‘is it EN 81?’, ask which part. 20 is the ordinary passenger elevator. 70 is whether a wheelchair user can use it. 73 is what that same elevator does when the fire alarm rings: it stops and stays put. 72 is a different elevator, for the fire brigade. 76 is an elevator so a person who cannot use the stairs can still leave. Same name. Different jobs.",
			why: "If you mix up the regulations, the building can get the wrong elevator. An accessible elevator may stop and stay put when the fire alarm rings. A firefighter elevator may be sold as the way out for people who cannot use the stairs."
		}, {
			heading: "Law, then standard, then the responsible duty",
			statute: "Essential requirements live in the Lifts Directive / Lifts Regulations. Harmonised standards give a presumption of conformity. After the handover, LOLER and fire law govern use, examination and the building strategy.",
			plain: "There are three separate things. First, the Lifts Regulations: the law that says whether a new elevator may be sold. That duty sits with the manufacturer. Second, EN 81: a standard, not a law. It is one accepted way to meet the Lifts Regulations. Third, LOLER: after handover, the responsible duty sits with the owner to have the elevator examined and kept fit for use. ElevatorIQ will explain each of the three in a clearer way, so a line in EN 81 is not mistaken for the Lifts Regulations or for the owner’s duty under LOLER.",
			why: "Adaptive learning sticks when the same idea is met as a map, then a case, then a question. This lesson is the map."
		}],
		checkQuestionIds: ["q-family-1", "q-family-2"]
	},
	{
		id: "duty",
		title: "Who actually has to do something",
		kicker: "Law",
		minutes: 7,
		skillIds: ["dutyholder"],
		standardIds: ["directive", "loler"],
		summary: "Manufacturers meet the Directive. Owners meet LOLER. Fire strategies sit with the building. The elevator is in the middle.",
		sections: [{
			heading: "Before anyone rides",
			statute: "An elevator is placed on the market under the Lifts Directive, the EU regulations for a new elevator. Conformity assessment, usually involving a notified body, and CE marking, apply to the elevator and its safety components.",
			plain: "The factory and the installer have to prove the machine was born safe. That proof is not your six-month inspection. It is the exam the elevator sat before the public ever saw it.",
			why: "Dutyholders often wave a declaration of conformity at an inspector as if it were last week’s thorough examination. Different documents, different dates, different people."
		}, {
			heading: "Once it lives in your building",
			statute: "LOLER requires thorough examination of people-carrying elevators, typically every six months, by a competent person. Reports of defects that are or could become dangerous go to the dutyholder (and in serious cases to the enforcing authority). PUWER covers safe work equipment around the same installation.",
			plain: "You, or the person you have contracted to be ‘in control’, must keep a diary. Six months for passenger elevators is the default heartbeat. A competent person looks with their own eyes. If they say stop, you stop.",
			why: "EN 81-76 will not save you from a missed examination. An evacuation elevator that has not been kept available is just a dark shaft."
		}],
		checkQuestionIds: ["q-duty-1"]
	},
	{
		id: "base-20",
		title: "The default passenger elevator",
		kicker: "EN 81-20",
		minutes: 6,
		skillIds: ["en81-20"],
		standardIds: ["en81-20", "en81-50"],
		summary: "Every specialist elevator is 20 plus extras. Learn the base so the extras make sense.",
		sections: [{
			heading: "20 and 50",
			statute: "EN 81-20 is the construction and installation standard for new passenger and goods passenger elevators. EN 81-50 is the companion for calculations and type tests of safety components. Together they replaced EN 81-1 and EN 81-2.",
			plain: "A new passenger elevator has one base standard, split in two. 20 is the building half: the finished elevator in the shaft. 50 is the integration half: the safety parts are calculated and tested before the car is installed. Old ‘81-1 electric / 81-2 hydraulic’ language is the previous generation. If a specification still says 81-1 for a new car, it is out of date.",
			why: "You cannot layer 76 on a machine that does not even meet 20. The extras assume the base."
		}, {
			heading: "What 20 does not decide",
			statute: "Particular applications — accessibility, vandal resistance, firefighters, fire behaviour, evacuation, seismic — are other parts. 20 tells them how to attach.",
			plain: "20 will not make the car big enough for a wheelchair-plus-companion. It will not keep running in a fire. It will not talk to a fire alarm the way 73, 72 or 76 do. Those are optional extras the building has to order on purpose.",
			why: "Sales language that says ‘fully EN 81 compliant’ without a part number is fog."
		}],
		checkQuestionIds: ["q-20-1"]
	},
	{
		id: "access-70",
		title: "A car a person can actually use",
		kicker: "EN 81-70",
		minutes: 8,
		skillIds: ["en81-70"],
		standardIds: ["en81-70", "part-m"],
		summary: "Type 2 is the new-build floor. 76 later borrows these sizes. Get the table in your bones.",
		sections: [{
			heading: "Five bodies, five jobs",
			statute: "EN 81-70 Table 3: Type 1 is 1000 × 1300 mm, 450 kg, 800 mm door — existing buildings only, one wheelchair user, no companion. Type 2 is 1100 × 1400 mm, 630 kg, 900 mm door — minimum for new buildings, wheelchair plus accompanying person. Type 3 is 1100 × 2100 mm, 1000 kg, 900 mm door — more passengers and stretchers. Type 4 is 1400 × 1600 (or swapped), 1000 kg, turning space, minimum for adjacent entry. Type 5 is 1400 × 2000 (or swapped), 1275 kg, 1100 mm door. Finishes must not steal more than 15 mm.",
			plain: "Type 1 is the ‘we had no choice’ car. Type 2 is ‘a person and a friend’. Type 3 is ‘a stretcher will go in’. Type 4 and 5 are ‘I can turn round and leave facing the way I want’. Measure the steel, then remember the mirror and the panelling still have to fit inside the number.",
			why: "Class A evacuation elevators take Type 2 as a floor. Class B takes Type 3 or 4. If you only remember one table in ElevatorIQ, remember this one."
		}, {
			heading: "Doors, time, and buttons",
			statute: "Doors are automatic and horizontally sliding. Clear openings: 800 mm Type 1, 900 mm Types 2–4, 1100 mm Type 5. Door dwell is adjustable 2–20 s (about 6 s is the usual kindness for reduced mobility). Controls need luminance contrast and lighting. Destination-control systems need an accessibility function.",
			plain: "A hinged door a wheelchair user has to hold is not an accessible elevator. A door that shuts in two seconds is a trap. A button that is a tiny bronze pip on a bronze panel is a riddle. 70 is as much about time and contrast as it is about millimetres.",
			why: "Independent use is the test. If a person still needs a member of staff for a standard ride, the elevator has failed 70 even if the car is huge."
		}],
		checkQuestionIds: ["q-70-1", "q-70-2"]
	},
	{
		id: "fire-73",
		title: "When the standard elevator sits down",
		kicker: "EN 81-73",
		minutes: 6,
		skillIds: ["en81-73", "compare"],
		standardIds: ["en81-73", "part-b"],
		summary: "Fire alarm, recall, park. This is the behaviour you must not confuse with 76.",
		sections: [{
			heading: "Recall and stay",
			statute: "Recalls the elevator and places the elevator out of service.",
			plain: "The car finishes its thought, goes to the floor the fire strategy named, opens, and becomes furniture. That is a success for 73. It looks like a failure if you were expecting a way out. You were expecting a different car.",
			why: "Most elevators in Europe still do this. 76 is new and optional. Never brief a disabled occupant as if the standard elevator will wait for them."
		}, {
			heading: "The poster is telling the truth",
			statute: "National fire guidance has long told occupants not to use elevators in fire. 73 is the machine-side of that instruction for standard elevators.",
			plain: "Keep the poster for standard elevators. Add different signage, training and hardware where 72 or 76 actually apply. Two messages in one lobby is how people get into the wrong car.",
			why: "Signage is part of the safety system. 76 even specifies an evacuation elevator sign of at least 40 × 40 mm at evacuation landings."
		}],
		checkQuestionIds: ["q-73-1"]
	},
	{
		id: "fire-72",
		title: "The fire brigade’s car",
		kicker: "EN 81-72",
		minutes: 8,
		skillIds: ["en81-72", "compare"],
		standardIds: ["en81-72", "part-b"],
		summary: "Protected, wet, powered, and under fire-service control. Not a self-rescue elevator.",
		sections: [{
			heading: "A tool, not a taxi",
			statute: "Places the elevator under fire service control.",
			plain: "A firefighter elevator is the fire brigade's tool, not a way out for residents. They take it over with a key and ride it up to the bridgehead: the protected floor, usually two floors below the fire, where the crew start their attack. It has to keep working while water from the firefighting above runs down the shaft, so it has a second power supply, a pit that drains, and a phone to fire control. A fire strategy may still use it to move people. That does not make it an EN 81-76 evacuation elevator. Mix the two up and the building gets the wrong car.",
			why: "Height and fire-strategy triggers decide whether you need one. The elevator contractor cannot waive a firefighters elevator because they sold you a 76 car instead."
		}, {
			heading: "Water is a design load",
			statute: "Electrical equipment within 1 m of landing-door walls, and on the car, is protected at least IPX3. Equipment in the pit is IP67 and kept above the highest permissible water. The car roof must drain. Pit water must not drown the kit that keeps the elevator alive.",
			plain: "Firefighters put water on fires. Water runs to the shaft. 72 assumes this and designs the electrics like a boat. If your ‘firefighter elevator’ dies when the first hose starts, it was not a 72 elevator.",
			why: "76 also worries about water at landings, but for a different reason: keeping an evacuation path available, not keeping a bridgehead supplied."
		}],
		checkQuestionIds: ["q-72-1", "q-72-2"]
	},
	{
		id: "evacuation-why",
		title: "The rule that used to say wait",
		kicker: "EN 81-76",
		minutes: 7,
		skillIds: ["en81-76-purpose", "compare"],
		standardIds: ["en81-76"],
		featured: true,
		summary: "Until 2025 there was no European standard for an elevator that evacuates people who cannot use stairs. Now there is.",
		sections: [{
			heading: "What changed in 2025",
			statute: "EN 81-76:2025, published July 2025, is the first European Standard specifying an elevator which might be used for the evacuation of persons with disabilities. It supersedes CEN/TS 81-76:2011. It is harmonised under Directive 2014/33/EU. It applies to new elevators; it is not applicable to evacuation elevators manufactured before its publication.",
			plain: "For years the plan for a wheelchair user in a fire was: go to a refuge, wait, hope a team arrives with an evacuation chair. That still exists. 76 adds another option for new buildings: an elevator that is allowed, and built, to keep moving those people to an exit floor. It is a big change in how buildings can think. It is not a sticker you put on last year’s controller.",
			why: "Self-adaptation in a fire means the person is not wholly dependent on a trained helper being free. Automatic 76 mode is the first standard-backed version of that independence."
		}, {
			heading: "What it refuses to be",
			statute: "The standard does not apply to evacuation in explosion, chemical or biological attack, flooding, storm, or earthquake. It is not a substitute for evacuation aids when the elevator is unavailable. Fire or smoke in the well, water flooding the well, too few elevators, people not understanding the elevator, and structural collapse are listed as out of scope hazards.",
			plain: "76 is for a fire alarm (and similar orderly evacuations), not for the building falling down or filling with floodwater. If the elevator itself is on fire, it is not your way out. Always have a plan B for when the car is dark.",
			why: "Scope questions are how you catch dangerous over-selling. ‘Our 76 elevator handles every emergency’ is a sentence that fails this lesson."
		}],
		checkQuestionIds: ["q-76p-1", "q-76p-2"]
	},
	{
		id: "evacuation-class",
		title: "Class A is not a lesser person",
		kicker: "EN 81-76",
		minutes: 8,
		skillIds: ["en81-76-class"],
		standardIds: ["en81-76", "en81-70"],
		featured: true,
		summary: "Class A is a simpler building. Class B is the fuller machine. The person is the same.",
		sections: [{
			heading: "When Class A is allowed",
			statute: "A Class A evacuation elevator is intended where the building height would not require a firefighting elevator, only one evacuation exit level is required, and secondary power is not available. It does not support remote operation. On power failure it uses automatic rescue to the EEL so people can leave. Minimum car size is EN 81-70 Type 2 (1100 × 1400 mm). Horizontal sliding doors are required. A roof trapdoor exists so people outside the car can help people inside.",
			plain: "Class A is the simpler building: not tall enough to need a firefighter elevator, and only one evacuation exit floor. There is no generator. If the power fails, the car must still move itself to the evacuation exit floor so people can leave. The car is at least a Type 2: a wheelchair and a companion. Remote driving is not allowed.",
			why: "Choosing A because it is cheaper, in a building that needed B, is how you fail the strategy. Choosing B ‘just in case’ is a cost, not a moral improvement."
		}, {
			heading: "When you need Class B",
			statute: "Class B is intended where Class A criteria are not fulfilled, or remote operation is required. It requires a secondary power supply. It may have more than one EEL. Minimum car is EN 81-70 Type 3 or Type 4. It has a car roof trap door of at least 0.5 × 0.7 m. It can support remote-assisted evacuation. After a power disruption the elevator must become available within 60 seconds.",
			plain: "Taller, more complicated, more than one exit floor, a control room that will drive the car, or a generator — that is B. Bigger car, second power, and it has to be back in play a minute after the lights flicker. If you want remote assistance, you are in B whether you like it or not.",
			why: "The class is a building classifier, not a medical classifier. A person with a disability in a small residential block and in a hospital are owed different machines, not different dignity."
		}],
		checkQuestionIds: ["q-76c-1", "q-76c-2"]
	},
	{
		id: "evacuation-modes",
		title: "Three ways the car can think",
		kicker: "EN 81-76",
		minutes: 8,
		skillIds: ["en81-76-modes"],
		standardIds: ["en81-76"],
		featured: true,
		summary: "Automatic is independent. Driver needs a trained person in the car. Remote needs a person at a desk, and Class B.",
		sections: [
			{
				heading: "Automatic evacuation operation",
				statute: "In automatic evacuation operation the elevator answers landing calls and takes passengers directly to the evacuation exit landing. It is the only mode that enables independent self-rescue. It depends on a suitable fire alarm and elevator system being in place.",
				plain: "You press at the landing. The car comes. It goes to the way out. Nobody has to ride with you as a driver. That is the whole point of 76 for many disabled occupants: the building still works for you when the stairs have become the enemy.",
				why: "If the management plan assumes a driver who works office hours, automatic is not what you bought. Write the plan first."
			},
			{
				heading: "Driver-assisted",
				statute: "The assistant is able to drive the car using a test control from the emergency rescue control inside the elevator control panel. This is the later form of the old trained-assistant model in CEN/TS 81-76:2011. An evacuation elevator switch at each evacuation exit floor is part of that arrangement.",
				plain: "The assistant is able to drive the car using a test control from the emergency rescue control inside the elevator control panel. It can be right in a hospital or a care home, where trained staff are already in the building. It is a bad fit in a residential tower at night if nobody is awake to drive.",
				why: "Driver-assisted without a real, drilled driver is automatic’s slower cousin wearing a high-vis jacket that nobody put on."
			},
			{
				heading: "Remote-assisted",
				statute: "Remote-assisted evacuation operation is manual control from outside the car. It includes two-way communication and video monitoring. It is a Class B feature.",
				plain: "Someone in a control room can see you, talk to you, and send the car. You are not driving. They are. This needs cameras, speech, and a building that actually staffs that desk when the alarm is real.",
				why: "Remote without video is guessing. Remote without a roster is fiction. Class A cannot carry this mode."
			}
		],
		checkQuestionIds: ["q-76m-1", "q-76m-2"]
	},
	{
		id: "evacuation-building",
		title: "The landing has a job too",
		kicker: "EN 81-76",
		minutes: 8,
		skillIds: ["en81-76-building"],
		standardIds: ["en81-76", "part-b"],
		featured: true,
		summary: "EEL, SSL, safe areas, signs, voice, water, sixty seconds. The shaft is only half the system.",
		sections: [{
			heading: "EEL and SSL",
			statute: "An evacuation exit landing (EEL) is a floor from which you can leave the building. Evacuation recall (Phase 1) takes the car there, started by a switch at the EEL or an external signal. Evacuation operation (Phase 2) follows. A suspend-service signal sends the elevator to a suspend service landing (SSL) and takes it out of service — for example if smoke is detected in a safe area. SSL may be the same floor as an EEL and must have a safe accessible route out. Multiple EELs need an indicator of which one is active. Each EEL needs a car-position indicator and a visual indicator that evacuation service is capable.",
			plain: "The EEL is the ‘this way out’ floor. Recall is the car coming home to it. Operation is the car then running the evacuation. If the lobby fills with smoke, suspend service yanks the car out of the game and puts it somewhere people can still walk to fresh air. Lights on the landing tell you whether the elevator is actually in the fight, and which exit floor is live.",
			why: "An elevator that dumps you on a floor with no route to open air has not evacuated you. It has relocated you."
		}, {
			heading: "The body of the building",
			statute: "Safe areas in front of evacuation elevators are fire- and smoke-protected (not necessarily on every served floor; unused landings can be shut behind fire doors or shutters). Horizontal sliding doors on car and landings. Drainage or ramps so water does not run into the well. Intermediate emergency doors if consecutive landing entrances are more than 7 m apart. Voice announcer for evacuation instructions. Evacuation elevator sign at least 40 × 40 mm. Class B: secondary power, available again within 60 s of a supply change. Class A: no secondary power, but automatic rescue to the EEL on power failure.",
			plain: "Picture a hotel landing that still feels like a hotel landing while the rest of the floor is a problem: smoke kept out, floor not a lake, a voice telling you what to do, a sign you can recognise in a panic, doors that slide. If the power fails, Class B must be available again within a minute. Class A has no generator. The car must still move itself to the evacuation exit floor so people can leave. More than a two-storey jump between doors, and you need a way to get into the shaft in between.",
			why: "Most 76 failures will be building failures: a generator that was never tested, a ‘safe area’ with a letterbox grille, a sign in 8-point type."
		}],
		checkQuestionIds: ["q-76b-1", "q-76b-2"]
	},
	{
		id: "alarm-28",
		title: "Someone has to answer",
		kicker: "EN 81-28",
		minutes: 5,
		skillIds: ["en81-28"],
		standardIds: ["en81-28"],
		summary: "Two-way alarm, identified elevator, backup power. Trapping is a foreseeable day, not a rare disaster.",
		sections: [{
			heading: "A conversation, not a bell",
			statute: "EN 81-28 requires an alarm system that lets trapped persons contact a rescue service, two-way, with identification of the elevator, filtered to reduce false calls, and available on loss of the normal electrical supply.",
			plain: "Press, a person speaks, they know which car you are in, and this still works when the building is dark. Pair this with 76’s extra communication in driver and remote modes: evacuation is a bad time to discover the phone is a prop.",
			why: "Availability of the evacuation elevator includes the ability to call for help if it fails mid-journey."
		}],
		checkQuestionIds: ["q-28-1"]
	},
	{
		id: "old-cars",
		title: "The elevator that is already there",
		kicker: "EN 81-80 / 82 / 21",
		minutes: 7,
		skillIds: ["existing"],
		standardIds: [
			"en81-80",
			"en81-82",
			"en81-21"
		],
		summary: "80 ranks danger. 82 ranks access. 21 is for dropping a new car into an old well. None of them is 76.",
		sections: [{
			heading: "Three different problems",
			statute: "EN 81-80: identify hazards on an existing elevator, rank high / medium / low, apply practicable measures toward modern safety. EN 81-82: upgrade existing elevators for persons with disability. EN 81-21: alternative measures for installing a new elevator into an existing building with tight pit or headroom.",
			plain: "Dangerous old car? 80. Unusable old car? 82. New car, crooked old shaft? 21. Want 76? You are in new-elevator territory. You can improve an old car’s alarm, lighting and refuge procedure; you cannot declare it an evacuation elevator because you ran a toolbox talk.",
			why: "Dutyholders like silver bullets. 80 is a ranked list. Treat it like one."
		}, {
			heading: "Practicable is a documented filter",
			statute: "EN 81-80 filters measures by what is practicable in that shaft, after priority is set. It added further hazards in the 2019 revision to stay aligned with EN 81-20 thinking.",
			plain: "‘We cannot’ needs a reason that would survive a coroner. ‘We will not, because the tenants dislike downtime’ is not a reason. High-priority items (missing landing-door locks, no unintended movement protection, no alarm) are the ones people die on.",
			why: "LOLER examinations often point at the same hazards 80 lists. The two should talk."
		}],
		checkQuestionIds: ["q-ex-1"]
	},
	{
		id: "three-elevators",
		title: "Three elevators, one alarm",
		kicker: "Compare",
		minutes: 8,
		skillIds: [
			"compare",
			"en81-76-purpose",
			"en81-72",
			"en81-73"
		],
		standardIds: [
			"en81-72",
			"en81-73",
			"en81-76"
		],
		featured: true,
		summary: "73 parks. 72 is taken over by firefighters. 76 keeps working for people who cannot use stairs.",
		sections: [{
			heading: "Put them in one lobby",
			statute: "EN 81-73 recalls the elevator and places the elevator out of service. EN 81-72 places the elevator under fire service control. EN 81-76: the elevator remains available for evacuation of persons with disabilities under this chosen mode.",
			plain: "Alarm sounds. The standard car goes to the ground and opens its doors like a trained dog. The firefighter car waits for a yellow helmet and a key. The evacuation car — if you specified one, and the landing is still a safe area — comes for the person who cannot take the stairs. Three different manners. Three different signs. Three different training stories.",
			why: "This is the comparison the market keeps blurring. If you can tell the three apart in a sentence, you are already ahead of most specifications."
		}, {
			heading: "You might need more than one",
			statute: "National fire guidance may require a firefighters elevator by height or risk. An evacuation strategy may also require EN 81-76 provision for people who cannot use stairs. They are complementary, not substitutes. Class A 76 is not intended where a firefighters elevator is already required.",
			plain: "A tall building can need the fire brigade’s car and a civilian way out. Buying only 72 and telling wheelchair users to wait for firefighters is an old strategy. Buying only 76 in a building that legally needs 72 is a failed fire plan. The classifier in ElevatorIQ exists so you stop treating them as flavours of the same product.",
			why: "The best self-adaptation in a real building is matching the machine to the person and the fire strategy, not memorising clause numbers."
		}],
		checkQuestionIds: ["q-cmp-1", "q-cmp-2"]
	},
	...ASME_LESSONS
];
var LESSON_BY_ID = Object.fromEntries(LESSONS.map((l) => [l.id, l]));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/moving-lift-CN7ZBt_Y.js
function MovingLift({ floor, landings, missKey = 0 }) {
	const max = Math.max(landings.length - 1, 1);
	const at = Math.max(0, Math.min(floor, max));
	const here = landings[at];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl bg-night text-night-fg shadow-[var(--shadow-elevator)] p-4",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm uppercase tracking-wider text-cyan",
				children: here ? `Floor ${here.mark}` : "Shaft"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 truncate font-display text-xl font-semibold",
				children: here?.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ride-shaft relative mt-3 overflow-hidden rounded-xl",
				style: { height: `calc(${landings.length} * var(--ride-floor))` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "absolute inset-0 flex flex-col-reverse",
					children: landings.map((land, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "ride-landing flex items-center gap-2 border-t border-night-fg/10 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("w-10 shrink-0 font-mono text-sm tabular-nums", i === at ? "text-yellow" : land.done ? "text-green" : "text-night-fg/45"),
							children: land.mark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("min-w-0 flex-1 truncate text-sm", i === at ? "text-night-fg" : "text-night-fg/50"),
							children: land.name
						})]
					}, `${land.mark}-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("ride-car", missKey > 0 && "ride-car-miss"),
					style: { bottom: `calc(${at} * var(--ride-floor) + 4px)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/graphics/car-ordinary-j.jpg",
						alt: "",
						className: "h-full w-full rounded-md object-cover"
					})
				}, missKey)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-night-fg/70",
				children: "Right answer — the car goes up. Miss — it stays."
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/standards-DmC2hMJC.js
var STANDARDS = [
	{
		id: "directive",
		code: "2014/33/EU",
		title: "Lifts Directive — EU regulations",
		everydayTitle: "The law that says an elevator must be safe before it ever carries a person",
		family: "law",
		oneLiner: "Puts essential safety on the manufacturer. Standards like EN 81 show one way to meet it.",
		statute: "The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators and safety components on the market. Harmonised standards such as EN 81-20 confer a presumption of conformity. A notified body is involved for most elevator conformity routes. CE marking is not a maintenance certificate.",
		plain: "Think of the Directive as the exam the elevator must pass before anyone is allowed to ride it. EN 81 is the mark scheme. Pass the mark scheme and the examiner (the notified body) will usually accept you have passed the exam. Once the elevator is in a building, different law takes over — LOLER, PUWER, fire law — because a safe new elevator can become an unsafe old one.",
		remember: [
			"Standards are the how. The Directive is the must.",
			"A new elevator and an old elevator live under different paperwork.",
			"Marking on the car is not a substitute for thorough examination."
		],
		related: ["en81-20", "loler"]
	},
	{
		id: "loler",
		code: "LOLER 1998",
		title: "Lifting Operations and Lifting Equipment Regulations",
		everydayTitle: "The six-month health check for elevators that carry people",
		family: "law",
		oneLiner: "Owners must have passenger elevators thoroughly examined, usually every six months.",
		statute: "LOLER places duties on those who own, operate or have control of lifting equipment. Elevators which lift people require thorough examination by a competent person at least every six months, unless a written scheme specifies otherwise. Defects which are or could become a danger must be reported. PUWER sits alongside it for work equipment generally.",
		plain: "If you are the person who decides the elevator stays in service, LOLER is talking to you, not to the manufacturer. A competent person (often from an inspection body) looks at the real machine, not the brochure, twice a year for people-carrying elevators. They write a report. If they find something dangerous, you stop using it. This is why a shiny EN 81-76 car still needs a diary.",
		remember: [
			"People-carrying elevators: typically every 6 months.",
			"The report is evidence. ‘The contractor looked at it’ is not.",
			"PUWER covers the workplace equipment duties around it."
		],
		related: ["directive", "en81-80"]
	},
	{
		id: "en81-20",
		code: "EN 81-20",
		title: "Passenger and goods passenger elevators",
		everydayTitle: "The recipe for a modern passenger elevator",
		family: "base",
		oneLiner: "The base construction standard that replaced EN 81-1 and EN 81-2.",
		statute: "EN 81-20 is the current base for a new passenger or goods passenger elevator that stays in the building. Pair it with EN 81-50, which is where the calculations and the tests on the safety parts live. It replaced the older electric and hydraulic parts, EN 81-1 and EN 81-2. The other EN 81 parts each add one job on top of this base.",
		plain: "This is the default elevator. Shaft strength, pit, headroom, car, doors, brakes, overspeed, lighting, emergency lowering — the lot. Every specialist elevator you will meet (accessible, firefighter, evacuation) is ‘EN 81-20, plus extras’. If someone says ‘it meets EN 81’ and cannot say which part, they have not finished the sentence.",
		remember: [
			"20 is the base. 50 is how you prove the parts.",
			"1 and 2 are the grandparents. New cars are 20.",
			"Particular applications (70, 72, 73, 76…) stack on top."
		],
		related: ["en81-50", "en81-21"]
	},
	{
		id: "en81-21",
		code: "EN 81-21",
		title: "New passenger elevators in existing buildings",
		everydayTitle: "How to squeeze a safe new elevator into an old shaft",
		family: "existing",
		oneLiner: "Alternative measures when a listed building will not give you a modern pit or headroom.",
		statute: "EN 81-21 is the part for a new elevator going into an old building that cannot give you a modern pit, headroom, or shaft size. Other protections stand in so the safety level stays level with EN 81-20. It is not a reason to leave an old car as it is.",
		plain: "Old buildings were not poured around a modern elevator well. 21 is the honest compromise: extra protection (for example, retractable stops, inspection controls, reduced-clearance protection) instead of pretending you have a two-metre pit. It is for new machines in old buildings, not a free pass to keep a dangerous 1970s car.",
		remember: [
			"Existing building, new elevator: look at 21.",
			"Existing elevator, old hazards: look at 80 and 82.",
			"Equivalent safety, not ‘close enough’."
		],
		related: ["en81-20", "en81-80"]
	},
	{
		id: "en81-28",
		code: "EN 81-28",
		title: "Remote alarm on passenger elevators",
		everydayTitle: "The button that must reach a human, not a void",
		family: "people",
		oneLiner: "Two-way alarm so a trapped passenger can talk to a rescue service.",
		statute: "EN 81-28 is the alarm part. Someone stuck in a passenger or goods passenger car has to be able to reach a rescue service. The call works both ways, the car can be identified, the alarm still runs for a set time if the normal supply fails, and stray presses are filtered so the rescue desk is not swamped.",
		plain: "A bell in the basement that nobody hears is not an alarm. 28 wants a conversation: you press, a person answers, they know which elevator you are in, and they can still hear you if the building power has died. That is why evacuation and firefighter elevators still care about communication — being in a special car is useless if nobody knows you are there.",
		remember: [
			"Two-way speech, not a one-way buzzer.",
			"Works on backup power.",
			"The rescue service has to know which car called."
		],
		related: ["en81-20", "en81-76"]
	},
	{
		id: "en81-50",
		code: "EN 81-50",
		title: "Design rules, calculations, examinations and tests",
		everydayTitle: "50 is the integration half of the base standard",
		family: "base",
		oneLiner: "The integration half: how the safety parts are checked before the elevator is installed.",
		statute: "EN 81-50 is used with EN 81-20. It gives design rules, calculations, examinations and tests of elevator components — safety gears, overspeed governors, buffers, landing-door locking devices, electronic PESSRAL, and so on.",
		plain: "A new passenger elevator has one base standard, split in two. EN 81-20 is the building half: how the elevator is designed, built and installed. EN 81-50 is the integration half: the calculations and tests on the safety parts, done before that elevator is put in the building.",
		remember: ["20 and 50 go together.", "The integration checks happen before the elevator reaches the building."],
		related: ["en81-20"]
	},
	{
		id: "en81-58",
		code: "EN 81-58",
		title: "Landing door fire resistance",
		everydayTitle: "The landing door as a fire door",
		family: "fire",
		oneLiner: "A unified test for how long landing doors hold back fire.",
		statute: "EN 81-58 provides a method of testing the fire resistance of elevator landing doors. Fire strategy documents (and EN 81-72 / 76 landing protection) rely on doors that have been shown to hold integrity and insulation for a stated period.",
		plain: "An elevator landing is a hole in a fire-resisting wall. 58 is the test that says the door in that hole will not become the shortcut the fire was looking for. Evacuation and firefighter elevators care about this because people will be standing on the landing while the rest of the building is in trouble.",
		remember: ["The landing door is part of the building’s fire box.", "A pretty car door is not the fire door. The landing door is."],
		related: ["en81-72", "en81-76"]
	},
	{
		id: "en81-70",
		code: "EN 81-70",
		title: "Accessibility to elevators including persons with disability",
		everydayTitle: "Can a person get in, ride, and get out without help",
		family: "people",
		oneLiner: "Car types, door widths, contrast, and controls for independent use.",
		statute: "EN 81-70:2021+A1:2022 sets additional requirements to EN 81-20 for accessible passenger elevators. Table 3 defines car types. Type 1 (1000 × 1300 mm, 450 kg, 800 mm door) is only for constrained existing buildings. Type 2 (1100 × 1400 mm, 630 kg, 900 mm door) is the minimum for new buildings and takes a wheelchair user plus an accompanying person. Types 3–5 grow the car for stretchers, turning, and class C wheelchairs. Doors are automatic horizontal sliding. Decorative finishes may not eat more than 15 mm off the stated sizes. Contrast, lighting of controls, and accessibility functions on destination-control systems are specified.",
		plain: "70 is the difference between ‘there is an elevator’ and ‘I can use the elevator’. A Type 1 car is a tight existing-building compromise — one wheelchair, no companion. New buildings should start at Type 2. If you need a stretcher, you are looking at Type 3. If a wheelchair has to turn around inside, Type 4 or 5. Buttons you cannot see or reach do not count. EN 81-76 borrows these car types: Class A evacuation elevators start at Type 2; Class B at Type 3 or 4.",
		remember: [
			"Type 2 is the new-build floor, not Type 1.",
			"Door width and car size are a pair. One without the other fails.",
			"76 picks its cars from 70’s table."
		],
		related: [
			"part-m",
			"en81-76",
			"en81-82"
		]
	},
	{
		id: "en81-71",
		code: "EN 81-71",
		title: "Vandal resistant elevators",
		everydayTitle: "The elevator that is expected to be kicked",
		family: "people",
		oneLiner: "Stronger finishes, controls and doors where misuse is foreseeable.",
		statute: "EN 81-71 adds requirements to EN 81-20 for vandal-resistant passenger and goods passenger elevators, typically in categories according to the expected level of vandalism (materials, security of fixtures, resistance of doors and car walls).",
		plain: "A hospital car and a car park car do not live the same life. 71 is for the car park: thicker skins, controls that cannot be levered off, doors that still close after a boot. Accessibility (70) and vandal resistance (71) often have to be designed together, because a stainless fortress can become unusable for a person who needs contrast and a large button.",
		remember: ["Vandal category is a design input, not a badge.", "Strength must not erase accessibility."],
		related: ["en81-20", "en81-70"]
	},
	{
		id: "en81-72",
		code: "EN 81-72",
		title: "Firefighters elevators",
		everydayTitle: "The elevator the fire service drive, under their control",
		family: "fire",
		oneLiner: "Protected well, secondary power, water protection, fire-service communications.",
		statute: "Places the elevator under fire service control.",
		plain: "A firefighter elevator is the fire brigade's tool, not a way out for residents. They take it over with a key and ride it up to the bridgehead: the protected floor, usually two floors below the fire, where the crew start their attack. It has to keep working while water from the firefighting above runs down the shaft, so it has a second power supply, a pit that drains, and a phone to fire control. A fire strategy may still use it to move people. That does not make it an EN 81-76 evacuation elevator. Mix the two up and the building gets the wrong car.",
		remember: [
			"Firefighters control it. Passengers do not self-rescue in it.",
			"Water in the well is assumed. Design for it.",
			"Secondary power is not optional."
		],
		related: [
			"en81-73",
			"en81-76",
			"part-b"
		]
	},
	{
		id: "en81-73",
		code: "EN 81-73",
		title: "Behaviour of elevators in the event of fire",
		everydayTitle: "What a normal elevator does when the fire alarm sounds",
		family: "fire",
		oneLiner: "Recall to a designated landing, park, and stay out of the way.",
		statute: "Recalls the elevator and places the elevator out of service.",
		plain: "This is why the poster still says ‘do not use the elevator in a fire’ for standard cars. 73 is the elevator agreeing with the poster: it goes to a safe floor, opens, and stops being an elevator until a person resets it. It is doing the right thing for a car that has no extra power, no protected lobby, and no water protection. 76 is the exception you have to design, not the default.",
		remember: [
			"Standard elevator + fire alarm = park at the designated floor.",
			"73 is behaviour. 72 and 76 are special machines.",
			"The poster and the controller must tell the same story."
		],
		related: [
			"en81-72",
			"en81-76",
			"part-b"
		]
	},
	{
		id: "en81-76",
		code: "EN 81-76:2025",
		title: "Evacuation of persons with disabilities using elevators",
		everydayTitle: "An elevator that can get you out when the stairs cannot",
		family: "fire",
		featured: true,
		oneLiner: "Class A or B evacuation elevators with automatic, driver, or remote modes — for new elevators only.",
		statute: "The elevator remains available for evacuation of persons with disabilities under this chosen mode.",
		plain: "For decades the rule was simple: fire starts, elevators stop, people who cannot use stairs wait for a team. 76 is the first European standard that lets a specially designed elevator keep working as a way out for those people. It is not ‘any elevator with a wheelchair sticker’. The building needs a protected landing, a thought-through exit floor, power that lasts, and a mode that matches the management plan. Class A is the simpler kit for simpler buildings (one exit floor, no second power, no remote driving). Class B is the fuller kit. Automatic operation is the only one where a person can leave without waiting for a trained driver.",
		remember: [
			"New elevators only. It does not bless an old car.",
			"Automatic mode = independent self-rescue. The others need a person.",
			"The building evacuation strategy is the parent document. The elevator is a tool inside it.",
			"Not for flood, quake, explosion, or chemical attack."
		],
		related: [
			"en81-70",
			"en81-72",
			"en81-73",
			"part-b"
		]
	},
	{
		id: "en81-77",
		code: "EN 81-77",
		title: "Elevators subject to seismic conditions",
		everydayTitle: "What the elevator does when the building shakes",
		family: "base",
		oneLiner: "Seismic detection, retention of the car, and a safe restart.",
		statute: "EN 81-77 adds requirements to EN 81-20 for elevators installed in seismic regions: retention of car and counterweight, seismic detection, and behaviour after an event so the elevator is not a new hazard.",
		plain: "76 explicitly will not pretend to evacuate you during an earthquake. 77 is the standard that keeps the car from becoming a wrecking ball. Different emergency, different tool.",
		remember: ["Seismic design is 77, not 76.", "After a quake, ‘running’ may be the wrong answer."],
		related: ["en81-20", "en81-76"]
	},
	{
		id: "en81-80",
		code: "EN 81-80",
		title: "Rules for improving safety of existing elevators",
		everydayTitle: "A ranked to-do list for elevators that pre-date modern rules",
		family: "existing",
		oneLiner: "Hazard identification, priority (high / medium / low), then practicable upgrades.",
		statute: "EN 81-80:2019 is a methodology for bringing existing permanently installed passenger and goods passenger elevators toward the safety level of new elevators. Identify hazardous situations, evaluate risk, classify priority, filter what is practicable. It is not a requirement to rebuild every car tomorrow; it is a structured way to stop ignoring known killers (unprotected well, missing door locks, no alarm, no unintended car movement protection, and so on).",
		plain: "Old elevators were legal when they were new. They are still in shafts. 80 is how a dutyholder looks at one with modern eyes and writes a real programme: high-priority hazards first, then the rest, and a reason on paper when something cannot be done. Pair it with 82 if the gap is accessibility rather than a crushing hazard.",
		remember: [
			"Priority ranking, not vibes.",
			"Practicable is a filter, not a shrug.",
			"80 = safety of existing. 82 = access of existing."
		],
		related: [
			"en81-82",
			"loler",
			"en81-21"
		]
	},
	{
		id: "en81-82",
		code: "EN 81-82",
		title: "Rules for upgrading existing elevators for persons with disability",
		everydayTitle: "Making yesterday’s car usable by more people",
		family: "existing",
		oneLiner: "A method for improving accessibility of elevators that are already installed.",
		statute: "EN 81-82 gives rules for upgrading existing elevators so persons with disability can use them more independently, applying EN 81-70 thinking where the building will allow it.",
		plain: "You cannot always drop a Type 2 car into a Type 1 hole. 82 is the grown-up conversation: better contrast, better door dwell, a mirror, a handrail, a larger button, voice announcement — whatever actually helps and will fit. It is how Equality Act reasonable-adjustment duties often get done in metal.",
		remember: ["Existing car, accessibility gap: 82.", "New car: 70, not 82."],
		related: [
			"en81-70",
			"en81-80",
			"part-m"
		]
	},
	{
		id: "part-b",
		code: "Approved Document B / BS 9999",
		title: "Fire safety of the building",
		everydayTitle: "The fire strategy that the elevator has to serve",
		family: "fire",
		oneLiner: "Whether you even need a 72 or 76 elevator is a building decision, not an elevator-sales decision.",
		statute: "Building fire law (in England, Building Regulations Part B and the associated guidance, together with BS 9991 / BS 9999 fire-strategy practice) decides when a firefighters elevator is required, how people who cannot use stairs are evacuated, and what a protected lobby must be. EN 81-72, 73 and 76 are the elevator industry’s answers to questions the fire strategy has already asked.",
		plain: "Buy the elevator after you know the story of the building on fire. How many people need an elevator to leave? Where is the exit floor? Who is driving? How long must power last? A 76 car in a building with no protected landing is a box that cannot do its job. The fire engineer and the elevator engineer have to sit in the same meeting.",
		remember: ["Strategy first, elevator specification second.", "A firefighter elevator requirement is usually a height / risk trigger in national fire guidance."],
		related: [
			"en81-72",
			"en81-73",
			"en81-76"
		]
	},
	{
		id: "part-m",
		code: "Approved Document M / Equality Act",
		title: "Access to and use of buildings",
		everydayTitle: "The building’s duty to let people in — including via the elevator",
		family: "people",
		oneLiner: "Access law points at EN 81-70 sizes, contrast, and controls.",
		statute: "Approved Document M (and equivalent guidance in other UK nations) plus the Equality Act 2010 reasonable-adjustment duty set the building-side expectation that passenger elevators used by the public are independently usable. EN 81-70 is the usual technical expression of that for new elevators.",
		plain: "If the only way to the hearing room is an elevator with a 700 mm door and a key, that is not an accessible building with an unfortunate elevator. It is a building that failed access. 70 is how the elevator holds up its end. 76 is how that same person leaves when the hearing room is on fire.",
		remember: ["Getting in (70 / M) and getting out (76 / B) are a pair.", "Reasonable adjustment is an ongoing duty on existing buildings."],
		related: ["en81-70", "en81-82"]
	},
	{
		id: "puwer",
		code: "PUWER 1998",
		title: "Provision and Use of Work Equipment Regulations",
		everydayTitle: "If the elevator is used for work, it is work equipment",
		family: "law",
		oneLiner: "Suitable, maintained, inspected, and used by people who have been told how.",
		statute: "The Provision and Use of Work Equipment Regulations 1998 require work equipment to be suitable, maintained in an efficient state, inspected where necessary, and used only by people who have information and training. An elevator provided for use at work is work equipment. LOLER adds the lifting-specific examination. PUWER does not switch off.",
		plain: "LOLER is the six-month look at the elevator as a lifting machine. PUWER is the everyday duty around it: it must be the right kit, it must be looked after, and the people who use or release it must know what they are doing. A workplace goods elevator, a platform used by staff, and the passenger elevator in an office all sit here.",
		remember: ["Work equipment stays under PUWER even when LOLER also applies.", "Maintenance and training are PUWER jobs, not extras."],
		related: ["loler", "hswa"]
	},
	{
		id: "hswa",
		code: "HSWA 1974",
		title: "Health and Safety at Work etc. Act",
		everydayTitle: "The parent duty every other elevator rule hangs from",
		family: "law",
		oneLiner: "Employers and people in control of premises must keep people safe so far as reasonably practicable.",
		statute: "The Health and Safety at Work etc. Act 1974 places general duties on employers towards employees and others, and on people who control premises used as a workplace. Those duties are qualified by ‘so far as is reasonably practicable’. LOLER, PUWER and the management regulations are the detail under this Act.",
		plain: "This is the Act the inspector is standing on when no single elevator regulation quite names the problem. If you employ people, or you control the building they work in, you have to run the elevator in a way that does not hurt them, as far as is reasonably practicable. The six-month examination is one way of showing you took that seriously. It is not the whole duty.",
		remember: ["Reasonably practicable means a real balance of risk and sacrifice, written down.", "The specific regulations do not replace this Act."],
		related: [
			"loler",
			"puwer",
			"mhs"
		]
	},
	{
		id: "mhs",
		code: "MHSWR 1999",
		title: "Management of Health and Safety at Work Regulations",
		everydayTitle: "Someone has to assess the elevator and write down who does what",
		family: "law",
		oneLiner: "Risk assessment, arrangements, and competent help.",
		statute: "The Management of Health and Safety at Work Regulations 1999 require a suitable and sufficient assessment of risks, arrangements for planning and control, and access to competent health and safety help. An elevator that people rely on is part of that assessment.",
		plain: "Who decides the elevator stays in service? Who calls the competent person? What happens if the alarm test fails? Those answers belong in the management arrangements, not in a drawer of old reports. The fire risk assessment is a separate duty. This one is the general management of the risk.",
		remember: ["A missing arrangement is a management failure, not a parts failure.", "Competent help means someone who actually understands elevators."],
		related: [
			"hswa",
			"loler",
			"fire-safety"
		]
	},
	{
		id: "fire-safety",
		code: "Fire safety law",
		title: "The duty to assess fire and keep the precautions real",
		everydayTitle: "If the strategy uses an elevator, the elevator has to do what the strategy says",
		family: "law",
		oneLiner: "England and Wales, Scotland, and Northern Ireland each have their own fire safety duty.",
		statute: "In England and Wales the Regulatory Reform (Fire Safety) Order 2005 requires the responsible person to make a fire risk assessment and maintain general fire precautions. In Scotland the duties sit under the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006. In Northern Ireland they sit under the Fire and Rescue Services (Northern Ireland) Order 2006 and the Fire Safety Regulations (Northern Ireland) 2010.",
		plain: "Do not write ‘FSO’ on a Scottish or Northern Irish building and think you have named the law. The job is the same shape everywhere: a responsible person, an assessment, and precautions that work on the night. If that assessment says people leave by an evacuation elevator, or the fire brigade take a firefighter elevator, those elevators are part of the precautions. A poster is not a precaution.",
		remember: [
			"England and Wales: the Fire Safety Order.",
			"Scotland and Northern Ireland: their own fire safety law, not the FSO.",
			"An elevator named in the strategy has to be kept able to do that job."
		],
		related: [
			"part-b",
			"en81-72",
			"en81-73",
			"en81-76"
		]
	},
	{
		id: "equality",
		code: "Equality Act 2010",
		title: "Equality Act",
		everydayTitle: "The ongoing duty to adjust, including the elevator people have to use",
		family: "law",
		oneLiner: "Reasonable adjustments where a feature of the building puts a disabled person at a disadvantage.",
		statute: "The Equality Act 2010 applies in England, Wales and Scotland. Where a physical feature puts a disabled person at a substantial disadvantage, the duty to make reasonable adjustments can include the way an elevator is provided, signed, or kept in service. Northern Ireland still relies mainly on the Disability Discrimination Act 1995.",
		plain: "An elevator that exists on the drawing and is out of service every other week is not an adjustment. Reasonable does not mean ‘whatever the contractor last quoted’. It does mean you look at the disadvantage and do what is reasonable to remove it. EN 81-70 and EN 81-82 are common ways to do the metalwork. They are not the Act.",
		remember: ["The Act is the duty. 70 and 82 are ways of meeting it.", "Northern Ireland is not the Equality Act."],
		related: [
			"part-m",
			"en81-70",
			"en81-82"
		]
	},
	{
		id: "building-regs",
		code: "Building Regulations",
		title: "The rules for building work, including a new or altered elevator",
		everydayTitle: "Installing an elevator is building work, and each nation writes its own",
		family: "law",
		oneLiner: "England, Wales, Scotland and Northern Ireland do not share one building regulation.",
		statute: "Building work in England is controlled by the Building Regulations 2010. Wales, Scotland and Northern Ireland have their own building regulations. Fire and access provisions — often met by following Approved Document B and M in England, or the national equivalent — decide protected lobbies, firefighter elevators and access to storeys.",
		plain: "The approved document is guidance. The regulation is the must. An elevator shaft is a hole through floors that were meant to stop fire, and it is often the only way some people reach a storey. That is why building control, not the elevator brochure, decides whether the opening, the lobby and the power are good enough.",
		remember: ["Name the nation. ‘Part B’ is not the Scottish regulation.", "Guidance shows a way. The regulation is what you have to achieve."],
		related: [
			"part-b",
			"part-m",
			"fire-safety"
		]
	},
	{
		id: "cdm",
		code: "CDM 2015",
		title: "Construction (Design and Management) Regulations",
		everydayTitle: "Design the danger out. Do not leave it to the people doing the work",
		family: "law",
		oneLiner: "Clients and designers have to take out a danger they can see coming, before the car is in the shaft.",
		statute: "The Construction (Design and Management) Regulations 2015 apply to construction work, including the installation and substantial alteration of an elevator. Clients, designers and contractors must plan, manage and monitor the work, and designers must eliminate foreseeable risks so far as reasonably practicable.",
		plain: "A pit no one can get out of, a machine room with no safe way in, a panel you can only reach from a ladder over the shaft: those are choices made on the drawing. The architect, the elevator designer and the client share them when the elevator goes in, and when it is changed in a big way. A normal repair visit is not this duty.",
		remember: ["A new elevator, or a big change: this law is in the room.", "A normal repair visit is not this duty."],
		related: [
			"hswa",
			"work-at-height",
			"directive"
		]
	},
	{
		id: "riddor",
		code: "RIDDOR 2013",
		title: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations",
		everydayTitle: "You only report the accidents the rules name, not every incident",
		family: "law",
		oneLiner: "Some injuries, and some broken parts, have to be reported.",
		statute: "RIDDOR 2013 requires responsible persons to report specified injuries, fatalities and listed dangerous occurrences. The collapse, overturning or failure of a load-bearing part of an elevator or lifting equipment is a dangerous occurrence. Not every entrapment is reportable.",
		plain: "Someone stuck for twenty minutes and not hurt is still an emergency. That alone is not a report. You do report a serious injury, a death, or a part that holds the elevator if it breaks.",
		remember: ["If a part that holds the elevator breaks, that is the one to remember.", "Being stuck is not, by itself, enough."],
		related: ["loler", "hswa"]
	},
	{
		id: "workplace",
		code: "Workplace Regs 1992",
		title: "Workplace (Health, Safety and Welfare) Regulations",
		everydayTitle: "The workplace itself has to be safe to move through",
		family: "law",
		oneLiner: "Maintenance of the workplace, and a specific line for escalators and moving walkways.",
		statute: "The Workplace (Health, Safety and Welfare) Regulations 1992 require the workplace, and equipment and devices in it, to be maintained in an efficient state. Escalators and moving walkways must function safely and have any necessary safety devices. Elevators that carry people at work are dealt with mainly by LOLER and PUWER.",
		plain: "These regulations are why a broken escalator is not ‘just a facilities issue’. They are not a second copy of LOLER. If the kit moves people on a slope, start here and with the machine’s own standard. If it is an elevator, LOLER is still the examination duty.",
		remember: ["Escalators and moving walkways are named here.", "A passenger elevator still belongs to LOLER."],
		related: ["loler", "puwer"]
	},
	{
		id: "electricity",
		code: "EaWR 1989",
		title: "Electricity at Work Regulations",
		everydayTitle: "The electrics in the shaft have to be safe to the touch and in a fault",
		family: "law",
		oneLiner: "Electrical systems must be constructed and maintained to prevent danger.",
		statute: "The Electricity at Work Regulations 1989 require electrical systems to be of such construction and so maintained as to prevent danger, so far as is reasonably practicable. Strength, insulation, isolation and work on or near live parts are all in scope. An elevator’s power, including a secondary supply, is an electrical system.",
		plain: "Water in a firefighter shaft, a homemade jump lead to ‘keep the car going’, a panel left open for a temporary supply: those are electricity problems as well as elevator problems. The second supply on a 72 or 76 car does not sit outside this duty because an elevator standard also mentions it.",
		remember: ["Isolation has to be real before work starts.", "A standby generator is still an electrical system."],
		related: [
			"en81-72",
			"en81-76",
			"puwer"
		]
	},
	{
		id: "work-at-height",
		code: "WAHR 2005",
		title: "Work at Height Regulations",
		everydayTitle: "The responsible duty under the Work at Height Regulations covers the car top. The work must be planned, and the car must not make an uncontrolled movement under the person",
		family: "law",
		oneLiner: "Avoid work at height where you can. Where you cannot, plan it.",
		statute: "The Work at Height Regulations 2005 require work at height to be avoided where reasonably practicable, and otherwise planned, supervised and carried out by competent people, with measures to prevent falling and to reduce the distance and consequences. Work on a car top, in a shaft or from a landing into a well is work at height.",
		plain: "‘We have always stood on the car’ is not a safe system. The regulations want the work designed so people are not over the void, and if they must be, they are attached, the car must not make an uncontrolled movement under them, and someone knows how to get them down. This sits beside CDM on a new job and beside PUWER on a maintenance visit.",
		remember: ["Car-top work is work at height.", "Competence includes rescue, not only the task."],
		related: ["cdm", "puwer"]
	},
	{
		id: "machinery",
		code: "SMSR 2008",
		title: "Supply of Machinery (Safety) Regulations",
		everydayTitle: "The law for the lifting machines that are not ‘elevators’",
		family: "law",
		oneLiner: "Stairlifts, slow platforms and many goods-only hoists sit here, not under the Lifts Regulations.",
		statute: "The Machinery Directive applies to machinery placed on the market, including many lifting appliances. The Lifts Directive does not cover every machine that moves people: elevators at 0.15 m/s or less, and several special cases, are outside it. Those machines are usually machinery.",
		plain: "Call a stairlift or a slow platform an ‘elevator’ in a meeting and you may pull the wrong law into the room. If it is a passenger or goods-passenger elevator within the Lifts Directive, that is the placing-on-the-market law. If it is slower, or it is a platform or stairlift, start with the machinery regulations and the standard written for that machine. Do not CE-mark it as the wrong product.",
		remember: ["You follow one of those two laws. You do not use both.", "How fast it moves, and what the law calls it, decides which one."],
		related: ["directive", "loler"]
	},
	{
		id: "confined",
		code: "Confined Spaces 1997",
		title: "Confined Spaces Regulations",
		everydayTitle: "A pit is not automatically a confined space — and sometimes it is",
		family: "law",
		oneLiner: "Only when a specified risk is reasonably foreseeable.",
		statute: "The Confined Spaces Regulations 1997 apply to a place which is substantially enclosed and where there is a reasonably foreseeable specified risk, such as fire, fumes, lack of oxygen, drowning, or a free-flowing solid. Entry then requires a safe system of work. An elevator well or pit is enclosed. It is a confined space only if that risk is foreseeable.",
		plain: "Do not label every pit ‘confined space’ on a sign and think the job is done. Do not ignore a pit that floods, or a shaft that can fill with exhaust or smoke. If the specified risk is real, people do not climb in because the job is short. They go in under a system that includes the air, the rescue and the communication.",
		remember: ["Enclosed is not enough. There has to be a specified risk.", "Flooding and bad air are the usual reasons a pit qualifies."],
		related: ["work-at-height", "puwer"]
	},
	{
		id: "pressure",
		code: "PSSR 2000",
		title: "Pressure Systems Safety Regulations",
		everydayTitle: "A hydraulic elevator can also be a pressure system",
		family: "law",
		oneLiner: "Some accumulators and vessels need their own written scheme, as well as LOLER.",
		statute: "The Pressure Systems Safety Regulations 2000 can apply to a pressure system on an elevator, such as an accumulator or a vessel, where the regulations’ thresholds are met. A written scheme of examination is then required. LOLER examination of the elevator does not automatically examine that vessel.",
		plain: "The ram that lifts the car and the vessel that stores pressure are not the same object. The elevator report can be clean while the accumulator has never had the examination the pressure regulations want. Ask, on a hydraulic job, whether a written scheme exists. If nobody can find it, that is the finding.",
		remember: ["Hydraulic does not always mean PSSR. Ask about the vessel.", "A LOLER report is not a pressure-system report."],
		related: ["loler", "en81-20"]
	},
	...ASME_STANDARDS
];
var STANDARD_BY_ID = Object.fromEntries(STANDARDS.map((s) => [s.id, s]));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/uk-layers-D8EIcA_j.js
var UK_LAYERS = [
	{
		id: "law",
		kicker: "Who is on the hook",
		title: "The law",
		code: "2014/33/EU",
		plain: "Before anyone rides a new elevator, EU regulations — the Lifts Directive — say it must be safe to put on the market. CE marking and a notified body sit here. Once the building is open, fire strategy and access duties talk to the owner — not the factory.",
		statute: "The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators and safety components on the market. Harmonised standards such as EN 81-20 confer a presumption of conformity.",
		remember: [
			"A CE mark is not the examination duty.",
			"Part B decides if the fire strategy wants an evacuation elevator.",
			"Part M and the Equality Act decide whether people can get in on a Tuesday."
		]
	},
	{
		id: "recipe",
		kicker: "How you build it",
		title: "The recipe",
		code: "BS EN 81 family",
		plain: "This is the mark scheme. 20 is the default passenger elevator. 70 is getting in independently. 73 is the standard car parking in a fire. 72 is the firefighters’ tool. 76 is how people who cannot use stairs get out. Say the part. ‘It meets EN 81’ is an unfinished sentence.",
		statute: "Designated BS EN 81 parts are the usual route to presumption of conformity with the Lifts Regulations. EN 81-20/50 are the base. Particular applications (70, 71, 72, 73, 76, 77, 28) stack on top. EN 81-21 covers new elevators in existing buildings; 80 and 82 cover existing installations.",
		remember: [
			"20 is the base. Everything else is a particular job.",
			"76 is not 72 with nicer buttons.",
			"73 is what every standard UK passenger car does when the alarm sounds."
		]
	},
	{
		id: "check",
		kicker: "Keeping it in service",
		title: "The health check",
		code: "LOLER 1998",
		plain: "Once people are riding it, a different duty starts. The owner (or the person who controls the elevator) must have a passenger elevator thoroughly examined, usually every six months, by a competent person. PUWER sits beside it for work equipment. A shiny new 76 car still needs a diary.",
		statute: "The Lifting Operations and Lifting Equipment Regulations 1998 require thorough examination of elevators which lift people at least every six months, unless a written scheme specifies otherwise. Defects which are or could become a danger must be reported. PUWER 1998 covers work equipment generally.",
		remember: [
			"People-carrying elevators: typically every six months.",
			"The report is evidence. ‘The contractor looked at it’ is not.",
			"LOLER talks to the person who keeps the elevator in service."
		]
	}
];
var SHAFT_HOTSPOTS = [
	{
		id: "76",
		label: "Evacuation car",
		code: "EN 81-76",
		tone: "bg-green/90 text-ok-fg",
		plain: "Keeps working for people who cannot use the stairs. Class A or B. Not the firefighter elevator.",
		to: "/library/$id",
		params: { id: "en81-76" }
	},
	{
		id: "72",
		label: "Firefighter car",
		code: "EN 81-72",
		tone: "bg-orange/90 text-accent-fg",
		plain: "The fire brigade takes this one. Water, second power, firefighter key. Complementary to 76, never a substitute.",
		to: "/library/$id",
		params: { id: "en81-72" }
	},
	{
		id: "73",
		label: "Standard car",
		code: "EN 81-73",
		tone: "bg-yellow/90 text-fg",
		plain: "Parks, opens, stays out of the way. This is what a normal UK passenger elevator does in a fire.",
		to: "/library/$id",
		params: { id: "en81-73" }
	},
	{
		id: "loler",
		label: "In service",
		code: "LOLER + Part B / M",
		tone: "bg-yellow/90 text-fg",
		plain: "The diary, the fire strategy, the access duty. New marking on the car does not replace any of this.",
		to: "/library/$id",
		params: { id: "loler" }
	}
];
var TONE = {
	law: "bg-orange text-accent-fg",
	recipe: "bg-yellow text-night",
	check: "bg-green text-ok-fg"
};
function UkLayers() {
	const [open, setOpen] = (0, import_react.useState)("law");
	const layer = UK_LAYERS.find((l) => l.id === open) ?? UK_LAYERS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2 sm:grid-cols-3",
		children: UK_LAYERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(item.id),
			"aria-pressed": open === item.id,
			className: cn("min-h-24 rounded-xl p-4 text-left", TONE[item.id], open === item.id ? "ring-1 ring-yellow" : "opacity-80"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: item.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl font-semibold",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm opacity-90",
					children: item.kicker
				})
			]
		}, item.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-faint",
				children: "What it means"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-relaxed",
				children: layer.plain
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: layer.remember.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl bg-inset px-4 py-3 text-base",
					children: line
				}, line))
			})
		]
	})] });
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-2O5coh7U.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var LANGUAGES = [
	{
		id: "en",
		label: "English"
	},
	{
		id: "fr",
		label: "Français"
	},
	{
		id: "de",
		label: "Deutsch"
	},
	{
		id: "es",
		label: "Español"
	},
	{
		id: "it",
		label: "Italiano"
	}
];
var useLanguage = create()(persist((set) => ({
	lang: "en",
	setLang: (lang) => set({ lang })
}), {
	name: "liftiq-lang",
	skipHydration: true
}));
var loaders = {
	fr: async () => (await import("./fr-C499TCir.mjs")).default,
	de: async () => (await import("./de-7plh1taw.mjs")).default,
	es: async () => (await import("./es-33EU2f94.mjs")).default,
	it: async () => (await import("./it-BF_uHKsl.mjs")).default
};
var cache = /* @__PURE__ */ new Map();
async function dictionaryFor(lang) {
	if (lang === "en") return {};
	const hit = cache.get(lang);
	if (hit) return hit;
	const dict = await loaders[lang]();
	cache.set(lang, dict);
	return dict;
}
function LanguageFlag({ id }) {
	const common = "h-4 w-6 shrink-0 overflow-hidden rounded-xs ring-1 ring-night-fg/40";
	if (id === "fr") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 3 2",
		className: common,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "1",
				height: "2",
				fill: "#0055A4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				width: "1",
				height: "2",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				width: "1",
				height: "2",
				fill: "#EF4135"
			})
		]
	});
	if (id === "de") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 5 3",
		className: common,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "5",
				height: "1",
				fill: "#000"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "1",
				width: "5",
				height: "1",
				fill: "#DD0000"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "2",
				width: "5",
				height: "1",
				fill: "#FFCE00"
			})
		]
	});
	if (id === "es") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 5 3",
		className: common,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "5",
			height: "3",
			fill: "#AA151B"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			y: "0.75",
			width: "5",
			height: "1.5",
			fill: "#F1BF00"
		})]
	});
	if (id === "it") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 3 2",
		className: common,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "1",
				height: "2",
				fill: "#009246"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				width: "1",
				height: "2",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				width: "1",
				height: "2",
				fill: "#CE2B37"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 60 30",
		className: common,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
			id: "uk-flag",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "60",
				height: "30"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			clipPath: "url(#uk-flag)",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "30",
					fill: "#012169"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0,0 L60,30 M60,0 L0,30",
					stroke: "#fff",
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0,0 L60,30 M60,0 L0,30",
					stroke: "#C8102E",
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M30,0 V30 M0,15 H60",
					stroke: "#fff",
					strokeWidth: "14"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M30,0 V30 M0,15 H60",
					stroke: "#C8102E",
					strokeWidth: "8"
				})
			]
		})]
	});
}
function LobbyTabs({ current }) {
	const lang = useLanguage((s) => s.lang);
	const setLang = useLanguage((s) => s.setLang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Lobby",
		className: "border-t border-white/10 bg-night",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 sm:px-6",
			children: [[
				{
					to: "/",
					id: "lobby",
					label: "Lobby"
				},
				{
					to: "/uk",
					id: "eu",
					label: "EU regulations"
				},
				{
					to: "/asme",
					id: "asme",
					label: "ASME regulations"
				}
			].map((tab) => {
				const active = tab.id === current;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: tab.to,
						className: cn("inline-flex min-h-12 items-center border-b-2 px-4 text-base whitespace-nowrap", active ? "border-orange text-yellow" : "border-transparent text-muted hover:text-fg"),
						"aria-current": active ? "page" : void 0,
						children: tab.label
					})
				}, tab.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "ml-auto flex shrink-0 items-center gap-1",
				"data-no-translate": true,
				children: LANGUAGES.map((item) => {
					const on = item.id === lang;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": item.label,
						"aria-pressed": on,
						onClick: () => setLang(item.id),
						className: cn("inline-flex min-h-12 items-center border-b-2 px-1.5", on ? "border-orange" : "border-transparent opacity-70 hover:opacity-100"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageFlag, { id: item.id })
					}, item.id);
				})
			})]
		})
	});
}
var originals = /* @__PURE__ */ new WeakMap();
var applied = /* @__PURE__ */ new Set();
var ATTRS = [
	"alt",
	"aria-label",
	"placeholder",
	"title"
];
var attrOriginal = /* @__PURE__ */ new WeakMap();
function lookup(dict, source) {
	const trimmed = source.trim();
	if (!trimmed) return source;
	const hit = dict[trimmed];
	if (!hit) return source;
	const lead = source.match(/^\s*/)?.[0] ?? "";
	const trail = source.match(/\s*$/)?.[0] ?? "";
	return lead + hit + trail;
}
function skip(node) {
	const el = node instanceof Element ? node : node?.parentElement;
	if (!el) return true;
	if (el.closest("[data-no-translate], script, style, textarea, input, noscript")) return true;
	return false;
}
function note(next, source) {
	if (next !== source) applied.add(next);
}
function applyLanguage(root, lang, dict) {
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	let current = walker.nextNode();
	while (current) {
		const node = current;
		current = walker.nextNode();
		if (skip(node.parentElement)) continue;
		const value = node.nodeValue ?? "";
		if (!value.trim()) continue;
		const saved = originals.get(node);
		if (saved == null) originals.set(node, value);
		else if (value !== saved && value !== lookup(dict, saved) && !applied.has(value)) originals.set(node, value);
		const source = originals.get(node) ?? value;
		const next = lang === "en" ? source : lookup(dict, source);
		note(next, source);
		if (node.nodeValue !== next) node.nodeValue = next;
	}
	root.querySelectorAll("[alt], [aria-label], [placeholder], [title]").forEach((el) => {
		if (skip(el)) return;
		const saved = attrOriginal.get(el) ?? {};
		for (const attr of ATTRS) {
			const value = el.getAttribute(attr);
			if (value == null || !value.trim()) continue;
			if (saved[attr] == null) saved[attr] = value;
			else if (value !== saved[attr] && value !== lookup(dict, saved[attr]) && !applied.has(value)) saved[attr] = value;
			const source = saved[attr] ?? value;
			const next = lang === "en" ? source : lookup(dict, source);
			note(next, source);
			if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
		}
		attrOriginal.set(el, saved);
	});
	document.documentElement.lang = lang;
}
var EU_NAV = [
	{
		to: "/learn",
		label: "Lessons",
		icon: GraduationCap
	},
	{
		to: "/practice",
		label: "Practice",
		icon: Repeat
	},
	{
		to: "/test",
		label: "Test",
		icon: ClipboardCheck
	},
	{
		to: "/library",
		label: "Codes",
		icon: BookOpen
	},
	{
		to: "/classify",
		label: "Specify",
		icon: Building2
	}
];
var ASME_NAV = [
	{
		to: "/asme",
		label: "Overview",
		icon: Building2
	},
	{
		to: "/asme/learn",
		label: "Lessons",
		icon: GraduationCap
	},
	{
		to: "/asme/practice",
		label: "Practice",
		icon: Repeat
	},
	{
		to: "/asme/test",
		label: "Test",
		icon: ClipboardCheck
	},
	{
		to: "/asme/library",
		label: "Codes",
		icon: BookOpen
	}
];
function navActive(pathname, to) {
	if (to === "/asme") return pathname === "/asme" || pathname === "/asme/";
	return pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const setHydrated = useProgress((s) => s.setHydrated);
	const lang = useLanguage((s) => s.lang);
	const nav = pathname.startsWith("/asme") ? ASME_NAV : EU_NAV;
	(0, import_react.useEffect)(() => {
		Promise.resolve(useProgress.persist.rehydrate()).then(() => setHydrated(true));
		useLanguage.persist.rehydrate();
	}, [setHydrated]);
	(0, import_react.useLayoutEffect)(() => {
		let stop = false;
		const root = document.body;
		let dict = {};
		const apply = () => {
			if (stop) return;
			applyLanguage(root, lang, dict);
		};
		apply();
		const obs = new MutationObserver(apply);
		obs.observe(root, {
			subtree: true,
			childList: true,
			characterData: true
		});
		dictionaryFor(lang).then((next) => {
			if (stop) return;
			dict = next;
			apply();
		});
		return () => {
			stop = true;
			obs.disconnect();
		};
	}, [lang, pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh overflow-x-clip bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-night text-night-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative grid h-8 w-6 place-items-center border border-yellow/80 bg-night",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 border border-orange" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-medium tracking-tight text-yellow sm:text-[1.7rem]",
								children: "ElevatorIQ"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							"aria-label": "Primary",
							children: nav.map((item) => {
								const active = navActive(pathname, item.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									className: cn("flex min-h-12 items-center gap-2 border-b-2 px-3 text-base transition-colors duration-150", active ? "border-orange text-yellow" : "border-transparent text-muted hover:text-fg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-4",
										strokeWidth: 1.75
									}), item.label]
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-4",
								strokeWidth: 1.75
							}), "Shopping"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sponsors",
							className: "hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg lg:flex",
							children: "Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/scenarios",
							className: "hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
								className: "size-4",
								strokeWidth: 1.75
							}), "Scenarios"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LobbyTabs, { current: pathname === "/" ? "lobby" : pathname.startsWith("/uk") ? "eu" : pathname.startsWith("/asme") ? "asme" : null })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-surface px-4 py-6 text-sm text-muted sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ElevatorIQ · EU and ASME rules, in simpler terms" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://elevatoriq.net",
							className: "inline-flex min-h-11 items-center text-yellow hover:underline",
							children: "elevatoriq.net"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:info@elevatoriq.net",
							className: "inline-flex min-h-11 items-center text-yellow hover:underline",
							children: "info@elevatoriq.net"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/clip-v17.html",
							className: "inline-flex min-h-11 items-center text-accent hover:underline",
							children: "Download the clip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sponsors",
							className: "inline-flex min-h-11 items-center text-accent hover:underline",
							children: "Advertise with us"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-6xl text-sm leading-relaxed text-muted",
					children: "For guidance only. ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms. It is not the published standard, and it is not legal advice. ElevatorIQ is not published or endorsed by BSI, CEN, ASME, or ICC, and it does not reproduce their standards."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 md:hidden" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-night pb-[env(safe-area-inset-bottom)] text-night-fg md:hidden",
				"aria-label": "Mobile",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rainbow-bar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-5",
					children: nav.map((item) => {
						const active = navActive(pathname, item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 px-0.5 text-xs tracking-wide", active ? "text-yellow" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5",
								strokeWidth: 1.75
							}), item.label]
						}) }, item.to);
					})
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-CUGEQmpm.css";
var APP_NAME = "ElevatorIQ";
var Route$37 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#0e1420"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$36 = () => import("./routes-C6ZEZHv4.mjs");
var Route$36 = createFileRoute("/")({
	head: () => pageHead({
		title: "ElevatorIQ · EN 81 and ASME A17.1 explained in plain language",
		description: "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand.",
		path: "/",
		jsonLd: homeJsonLd()
	}),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./adverts-CehobVWa.mjs");
var Route$35 = createFileRoute("/adverts")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./asme-n0xV6g_M.mjs");
var Route$34 = createFileRoute("/asme")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./classify-DsM1uyHo.mjs");
var Route$33 = createFileRoute("/classify")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./drill-BkKutP5d.mjs");
var Route$32 = createFileRoute("/drill")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./learn-DYCcgUPf.mjs");
var Route$31 = createFileRoute("/learn")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./library-DkmMbJHD.mjs");
var Route$30 = createFileRoute("/library")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
var $$splitComponentImporter$29 = () => import("./placement-cNCpJ2oE.mjs");
var Route$29 = createFileRoute("/placement")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./practice-Bts7G0YV.mjs");
var Route$28 = createFileRoute("/practice")({
	head: () => pageHead({
		title: "EN 81 practice questions · lift regulations",
		description: "Practice questions on EN 81, LOLER, firefighter lifts, and evacuation lifts. A miss brings the rule back in simpler words.",
		path: "/practice"
	}),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
function snapshotDeck(region) {
	const s = useProgress.getState();
	return pickQuestions({
		mastery: s.mastery,
		sm2: s.sm2,
		recentIds: s.recentQuestionIds,
		n: 8,
		region
	});
}
function PracticeSession({ region }) {
	const markAnswer = useProgress((s) => s.markAnswer);
	const hydrated = useProgress((s) => s.hydrated);
	const [deck, setDeck] = (0, import_react.useState)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("ask");
	const [anglePick, setAnglePick] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hydrated || deck !== null) return;
		setDeck(snapshotDeck(region));
	}, [
		hydrated,
		deck,
		region
	]);
	const current = deck?.[index];
	if (!hydrated || deck === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading your questions…"
		})
	});
	if (done && deck.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME questions" : "Questions only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: "Set closed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-lg text-muted",
				children: [
					hits,
					" of ",
					deck.length,
					" were clear the first time. The others were translated into ordinary words. A miss is not a mark against you. It is how the jargon gets explained."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-5xl tabular-nums",
				children: formatPct(hits / deck.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							setDeck(snapshotDeck(region));
							setIndex(0);
							setHits(0);
							setDone(false);
							setPhase("ask");
							setAnglePick(null);
						},
						children: "Another set"
					}),
					region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/asme/test",
						className: buttonVariants({ variant: "secondary" }),
						children: "Sit the test"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/test",
						className: buttonVariants({ variant: "secondary" }),
						children: "Sit the test"
					}),
					region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/asme/learn",
						className: buttonVariants({ variant: "secondary" }),
						children: "Back to lessons"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/learn",
						className: buttonVariants({ variant: "secondary" }),
						children: "Back to lessons"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "drill",
					size: "card"
				})
			})
		]
	});
	if (!deck.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold",
			children: "No questions in the bank."
		}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/test",
			className: cn(buttonVariants(), "mt-6"),
			children: "Sit the test"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/test",
			className: cn(buttonVariants(), "mt-6"),
			children: "Sit the test"
		})]
	});
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No questions in the bank." })
	});
	const question = current;
	const total = deck.length;
	const reteach = reteachFor(question);
	function leaveQuestion(firstTryCorrect) {
		markAnswer({
			questionId: question.id,
			skillId: question.skillId,
			correct: firstTryCorrect,
			firstTry: firstTryCorrect
		});
		if (firstTryCorrect) setHits((h) => h + 1);
		setPhase("ask");
		setAnglePick(null);
		if (index + 1 >= total) setDone(true);
		else setIndex((i) => i + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-faint",
					children: [
						"Question ",
						index + 1,
						" of ",
						total,
						" · ",
						SKILL_BY_ID[question.skillId].name
					]
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/test",
					className: "text-sm text-yellow hover:underline",
					children: "Sit the test"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/test",
					className: "text-sm text-yellow hover:underline",
					children: "Sit the test"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (index + 1) / total,
				className: "mt-4 mb-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 mt-4 text-base text-muted",
				children: "These questions translate legal words. If you do not know yet, that is the point of the page. Bayesian Knowledge Tracing updates how likely it is you already know this rule. A low likelihood brings the rule back, with a simpler explanation. It is not a mark."
			}),
			phase === "ask" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question,
				index,
				total,
				holdOnMiss: true,
				onMiss: () => {
					setPhase("teach");
				},
				onResolved: (correct, firstTry) => {
					leaveQuestion(correct && firstTry);
				}
			}, question.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-accent",
						children: "Plainer words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-pretty sm:text-3xl",
						children: "A miss is not a mark against you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted",
						children: "The standard uses dense words. Here is the same rule, drawn and said so anyone can follow it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainSketch, {
						questionId: question.id,
						skillId: question.skillId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
							children: "What it means"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg leading-relaxed",
							children: question.plain
						})]
					}),
					reteach.teach !== question.plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted",
						children: reteach.teach
					}) : null,
					phase === "teach" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setPhase("check"),
						children: "Check it in these words"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: reteach.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2",
								children: reteach.choices.map((choice, i) => {
									const revealed = anglePick !== null;
									const isAnswer = i === reteach.answer;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: revealed,
										onClick: () => setAnglePick(i),
										className: cn("flex min-h-14 w-full items-start rounded-xl px-4 py-3 text-left text-base shadow-[var(--shadow-border)]", !revealed && "bg-surface hover:bg-inset", revealed && isAnswer && "bg-green text-ok-fg", revealed && anglePick === i && !isAnswer && "bg-orange text-accent-fg"),
										children: choice
									}) }, choice);
								})
							}),
							anglePick !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-muted",
									children: anglePick === reteach.answer ? "Yes. That is the rule, in ordinary words." : "That is all right. The highlighted line is the plain version. Take that with you."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => leaveQuestion(false),
									children: "Continue"
								})]
							}) : null
						]
					})
				]
			})
		]
	});
}
var $$splitComponentImporter$27 = () => import("./scenarios-BgtByCR7.mjs");
var Route$27 = createFileRoute("/scenarios")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./shop-CjjmSsVG.mjs");
var Route$26 = createFileRoute("/shop")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./specs-BKmt0f45.mjs");
var Route$25 = createFileRoute("/specs")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./sponsors-B0Gg2EsK.mjs");
var Route$24 = createFileRoute("/sponsors")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./test-BPJ7tT2U.mjs");
var Route$23 = createFileRoute("/test")({
	head: () => pageHead({
		title: "EN 81 test · elevator regulations",
		description: "A short test on EN 81 and the duties around a passenger lift, a firefighter lift, and an evacuation lift.",
		path: "/test"
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var EU_PAPER = TEST_IDS.map((id) => QUESTION_BY_ID[id]);
var ASME_PAPER = ASME_TEST_IDS.map((id) => QUESTION_BY_ID[id]);
function TestSession({ region }) {
	const markAnswer = useProgress((s) => s.markAnswer);
	const paper = region === "asme" ? ASME_PAPER : EU_PAPER;
	const passMark = region === "asme" ? 10 : 10;
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [misses, setMisses] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = paper[index];
	const passed = hits >= passMark;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME test" : "Test"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: passed ? "Pass" : "Not yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-lg text-muted",
				children: [
					hits,
					" of ",
					paper.length,
					" correct. The pass mark is ",
					passMark,
					". One attempt each. No second chance on the same question."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-5xl tabular-nums",
				children: formatPct(hits / paper.length)
			}),
			misses.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "What to look at again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: misses.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-paper p-5 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: q.prompt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-relaxed",
							children: q.plain
						})]
					}, q.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setIndex(0);
						setHits(0);
						setMisses([]);
						setDone(false);
					},
					children: "Sit it again"
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/practice",
					className: buttonVariants({ variant: "secondary" }),
					children: "Back to practice"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: buttonVariants({ variant: "secondary" }),
					children: "Back to practice"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-accent",
					children: [
						"Test · question ",
						index + 1,
						" of ",
						paper.length
					]
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/practice",
					className: "text-sm text-muted hover:text-fg",
					children: "Practice instead"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: "text-sm text-muted hover:text-fg",
					children: "Practice instead"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base text-muted",
				children: "One answer. The page does not teach you until the score."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (index + 1) / paper.length,
				className: "mt-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question: current,
				index,
				total: paper.length,
				exam: true,
				onResolved: (correct) => {
					markAnswer({
						questionId: current.id,
						skillId: current.skillId,
						correct,
						firstTry: correct
					});
					if (correct) setHits((n) => n + 1);
					else setMisses((list) => [...list, current]);
					if (index + 1 >= paper.length) setDone(true);
					else setIndex((i) => i + 1);
				}
			}, current.id)
		]
	});
}
var $$splitComponentImporter$22 = () => import("./uk-BYGPKGqQ.mjs");
var Route$22 = createFileRoute("/uk")({
	head: () => pageHead({
		title: "EU lift regulations explained · EN 81, LOLER, firefighter and evacuation lifts",
		description: "How EU elevator regulations fit together: the Lifts Directive, EN 81, LOLER, a firefighter lift, and an evacuation lift, in plain language.",
		path: "/uk"
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./world-9TRwcPyY.mjs");
var Route$21 = createFileRoute("/world")({
	beforeLoad: () => {
		throw redirect({ to: "/uk" });
	},
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./adverts.index-B4Sb-ok0.mjs");
var Route$20 = createFileRoute("/adverts/")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./adverts._id-BkPXC2Rw.mjs");
var Route$19 = createFileRoute("/adverts/$id")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./asme.index-AvAI4-kS.mjs");
var Route$18 = createFileRoute("/asme/")({
	head: () => pageHead({
		title: "ASME A17.1 explained · elevator code in plain language",
		description: "ASME A17.1 / CSA B44 in ordinary words: Phase I recall, Phase II firefighter operation, and occupant evacuation. Not EN 81.",
		path: "/asme"
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./asme.learn-ZoMaueW-.mjs");
var Route$17 = createFileRoute("/asme/learn")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./asme.library-Dy5bzgKA.mjs");
var Route$16 = createFileRoute("/asme/library")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./asme.practice-DRNGP-Rj.mjs");
var Route$15 = createFileRoute("/asme/practice")({
	head: () => pageHead({
		title: "ASME A17.1 practice questions",
		description: "Practice questions on ASME A17.1 / CSA B44, Phase I, Phase II, and occupant evacuation.",
		path: "/asme/practice"
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./asme.test-o-Oafy13.mjs");
var Route$14 = createFileRoute("/asme/test")({
	head: () => pageHead({
		title: "ASME A17.1 test · elevator code",
		description: "A short test on ASME A17.1 / CSA B44, firefighter operation, and occupant evacuation.",
		path: "/asme/test"
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./learn.index-Claci934.mjs");
var Route$13 = createFileRoute("/learn/")({
	head: () => pageHead({
		title: "EN 81 lessons · elevator regulations in plain language",
		description: "Short lessons on EN 81-20, EN 81-70, firefighter lifts, fire recall, evacuation lifts, and LOLER. Plain language, then a check.",
		path: "/learn"
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
function LessonList({ region }) {
	const done = useProgress((s) => s.lessonsDone);
	const lessons = LESSONS.filter((lesson) => (lesson.region ?? "eu") === region);
	const landings = [{
		mark: "G",
		name: "Lobby"
	}, ...lessons.map((lesson, i) => ({
		mark: String(i + 1).padStart(2, "0"),
		name: lesson.title,
		done: done.includes(lesson.id)
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Curriculum"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: region === "asme" ? "ASME, one floor at a time" : "One floor at a time"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: region === "asme" ? "Each floor is a short lesson on ASME A17.1 / CSA B44 and the building code beside it. These floors stay in the ASME regulations tab. They are not EN 81." : "Each floor is a short lesson: what the standard says, then what it means. Get the check right and the car climbs. Practice is a different tab — questions only, no reading."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-12 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:sticky lg:top-24 lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovingLift, {
						floor: lessons.filter((lesson) => done.includes(lesson.id)).length,
						landings
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3 lg:col-span-8",
					children: lessons.map((lesson, i) => {
						const complete = done.includes(lesson.id);
						const className = cn("flex min-h-16 flex-col gap-1 rounded-2xl px-5 py-4 shadow-[var(--shadow-border)] transition-colors sm:flex-row sm:items-center sm:gap-6", complete ? "bg-ok/10" : "bg-surface hover:bg-raised");
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tabular-nums text-muted",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-semibold",
										children: lesson.title
									}), lesson.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent",
										children: region === "asme" ? "OEO" : "76"
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-base text-muted",
									children: lesson.summary
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-faint",
								children: [lesson.minutes, " min"]
							})
						] });
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/asme/learn/$id",
							params: { id: lesson.id },
							className,
							children: inner
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn/$id",
							params: { id: lesson.id },
							className,
							children: inner
						}) }, lesson.id);
					})
				})]
			})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./learn._id-D9TgOYKH.mjs");
var Route$12 = createFileRoute("/learn/$id")({
	head: ({ params }) => {
		const lesson = LESSON_BY_ID[params.id];
		return pageHead({
			title: lesson ? `${lesson.title} · EN 81 lesson` : "EN 81 lesson",
			description: lesson?.summary ?? "An EN 81 lesson in plain language: what the regulation is for, then a check.",
			path: `/learn/${params.id}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var ART = {
	"en81-76": {
		src: "/graphics/car-evac-i.jpg",
		alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor"
	},
	"en81-72": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"en81-73": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"a17-1": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-ada": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-phase1": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-phase2": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"asme-fsae": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"asme-oeo": {
		src: "/graphics/car-evac-i.jpg",
		alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor"
	},
	loler: {
		src: "/graphics/loler-machine.jpg",
		alt: "Elevator machine room set for a thorough examination"
	},
	directive: {
		src: "/graphics/shaft-floors.jpg",
		alt: "Cutaway of a UK building showing the elevator shaft"
	}
};
function artFor(ids, region) {
	for (const id of ids) if (ART[id]) return ART[id];
	if (region === "asme") return ART["a17-1"];
	return ART.directive;
}
function LessonFloor({ id, region }) {
	const lesson = LESSON_BY_ID[id];
	const completeLesson = useProgress((s) => s.completeLesson);
	const lessonsDone = useProgress((s) => s.lessonsDone);
	const done = lessonsDone.includes(id);
	const [section, setSection] = (0, import_react.useState)(0);
	const [finished, setFinished] = (0, import_react.useState)(done);
	const stepRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!finished) return;
		stepRef.current?.scrollIntoView({
			block: "start",
			behavior: "smooth"
		});
	}, [finished]);
	if (!lesson || (lesson.region ?? "eu") !== region) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That floor does not exist in this set." }), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/learn",
			className: "mt-4 inline-block text-accent",
			children: "Back to ASME lessons"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/learn",
			className: "mt-4 inline-block text-accent",
			children: "Back to lessons"
		})]
	});
	const art = artFor(lesson.standardIds, lesson.region ?? "eu");
	const totalSteps = lesson.sections.length;
	const track = LESSONS.filter((item) => (item.region ?? "eu") === (lesson.region ?? "eu"));
	const nextLesson = track[track.findIndex((item) => item.id === id) + 1];
	const lessonIndex = track.findIndex((item) => item.id === id);
	const curriculum = [{
		mark: "G",
		name: "Lobby"
	}, ...track.map((item, i) => ({
		mark: String(i + 1).padStart(2, "0"),
		name: item.title,
		done: lessonsDone.includes(item.id)
	}))];
	function finish() {
		completeLesson(lesson.id, lesson.skillIds);
		setFinished(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 min-w-0 lg:order-1 lg:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-accent",
						children: [
							lesson.kicker,
							" · ",
							lesson.minutes,
							" min"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
						children: lesson.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg text-muted",
						children: lesson.summary
					}),
					art ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: art.src,
						alt: art.alt,
						className: "mt-6 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: (section + (finished ? 1 : 0)) / (totalSteps + 1),
						className: "mt-6"
					}),
					finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: stepRef,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 rounded-2xl bg-paper p-6 text-paper-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-medium uppercase tracking-wider text-paper-muted",
									children: "Floor complete"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-semibold",
									children: "This one will come back"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg leading-relaxed",
									children: "Reading helps. Remembering the answer without the page open is what makes it stick. Practice will keep asking until you can say it yourself."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/practice",
										className: buttonVariants(),
										children: "Practice this skill"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/practice",
										className: buttonVariants(),
										children: "Practice this skill"
									}), nextLesson ? region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/learn/$id",
										params: { id: nextLesson.id },
										className: buttonVariants({ variant: "secondary" }),
										children: "Next floor"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/learn/$id",
										params: { id: nextLesson.id },
										className: buttonVariants({ variant: "secondary" }),
										children: "Next floor"
									}) : region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/learn",
										className: buttonVariants({ variant: "secondary" }),
										children: "All lessons"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/learn",
										className: buttonVariants({ variant: "secondary" }),
										children: "All lessons"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
								slot: "floor",
								size: "card"
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: lesson.sections[section].heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
								statute: lesson.sections[section].statute,
								plain: lesson.sections[section].plain,
								why: lesson.sections[section].why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [section > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setSection((s) => s - 1),
									children: "Previous"
								}) : null, section + 1 < lesson.sections.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => setSection((s) => s + 1),
									children: "Next section"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: finish,
									children: "Mark floor complete"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:sticky lg:top-24 lg:order-2 lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovingLift, {
					floor: finished ? Math.max(lessonIndex + 1, 0) : Math.max(lessonIndex, 0),
					landings: curriculum
				})
			})]
		})
	});
}
var $$splitComponentImporter$11 = () => import("./library.index-Ccm7lLO4.mjs");
var Route$11 = createFileRoute("/library/")({
	head: () => pageHead({
		title: "EN 81 code library · lift regulations explained",
		description: "Every EN 81 part and the UK duties around a lift: LOLER, the Lifts Regulations, fire, and access, explained in ordinary words.",
		path: "/library"
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var FAMILY = {
	law: "The law around the elevator",
	base: "The default machine",
	people: "People in the car",
	fire: "When the building is in trouble",
	existing: "Elevators already in the shaft"
};
var ORDER = [
	"law",
	"base",
	"people",
	"fire",
	"existing"
];
function CodeLibrary({ region }) {
	const standards = STANDARDS.filter((s) => (s.region ?? "eu") === region);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME regulations" : "EU regulations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: region === "asme" ? "ASME codes, into a language everyone can understand" : "Every part, into a language everyone can understand"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: region === "asme" ? "A17.1 is the new elevator. A17.2 is inspection. A17.3 is an elevator already there. Phase I parks. Phase II is the firefighters’ key. Occupant evacuation is the way out. The edition is the one that place adopted. These codes stay in this tab. They are not EN 81." : "EU regulations. Every regulation that sits on an elevator is listed here, then the BS EN 81 parts. The Lifts Regulations say a new elevator must be safe to put on the market. LOLER is the six-month health check. The others are the duties around fire, access, work and design. Tap one."
			}),
			region === "eu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "EU regulations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-base text-muted",
						children: "Law, recipe, health check — tap to open. The regulations themselves are listed underneath."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkLayers, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/uk",
						className: "mt-4 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline",
						children: ["Interactive shaft", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/specs",
						className: "mt-2 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline sm:mt-4 sm:ml-6",
						children: ["Detailed specifications", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-sm font-medium uppercase tracking-wider text-faint",
				children: region === "asme" ? "The ASME codes" : "The regulations and the BS EN 81 parts"
			}),
			ORDER.map((family) => {
				const items = standards.filter((s) => s.family === family);
				if (!items.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: FAMILY[family]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: items.map((std) => {
							const className = "block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-raised";
							const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-accent",
										children: std.code
									}), std.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent",
										children: "Featured"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-display text-xl font-semibold",
									children: std.everydayTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-base text-muted",
									children: std.oneLiner
								})
							] });
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/asme/library/$id",
								params: { id: std.id },
								className,
								children: inner
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library/$id",
								params: { id: std.id },
								className,
								children: inner
							}) }, std.id);
						})
					})]
				}, family);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "codes",
					size: "strip"
				})
			})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./library._id-ktE6IfB2.mjs");
var Route$10 = createFileRoute("/library/$id")({
	head: ({ params }) => {
		const std = STANDARD_BY_ID[params.id];
		return pageHead({
			title: std ? `${std.code} explained · ${std.everydayTitle}` : "Lift regulation",
			description: std?.oneLiner ?? "A lift regulation explained in plain language. Not a copy of the standard.",
			path: `/library/${params.id}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
function CodePage({ id, region }) {
	const std = STANDARD_BY_ID[id];
	if (!std || (std.region ?? "eu") !== region) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unknown code in this set." }), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/library",
			className: "mt-4 inline-block text-accent",
			children: "Back to ASME codes"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/library",
			className: "mt-4 inline-block text-accent",
			children: "Back to library"
		})]
	});
	const relatedLessons = LESSONS.filter((l) => (l.region ?? "eu") === region && l.standardIds.includes(std.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-4xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-accent",
				children: std.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
				children: std.everydayTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: std.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: std.oneLiner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: std.statute,
					plain: std.plain
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Keep this"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: std.remember.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-raised px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]",
						children: line
					}, line))
				})]
			}),
			std.related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Sits next to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: std.related.filter((rid) => (STANDARD_BY_ID[rid]?.region ?? "eu") === region).map((rid) => {
						const other = STANDARD_BY_ID[rid];
						const className = "min-h-11 rounded-lg bg-surface px-3 py-2 font-mono text-xs text-muted hover:text-fg";
						const label = other?.code ?? rid;
						return region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/asme/library/$id",
							params: { id: rid },
							className,
							children: label
						}, rid) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/library/$id",
							params: { id: rid },
							className,
							children: label
						}, rid);
					})
				})]
			}) : null,
			relatedLessons.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Learn it as a floor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: relatedLessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/asme/learn/$id",
						params: { id: lesson.id },
						className: "block rounded-xl bg-paper px-4 py-3 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: lesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-paper-muted",
							children: lesson.summary
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/learn/$id",
						params: { id: lesson.id },
						className: "block rounded-xl bg-paper px-4 py-3 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: lesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-paper-muted",
							children: lesson.summary
						})]
					}) }, lesson.id))
				})]
			}) : null,
			region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/asme/library",
				className: cn(buttonVariants({ variant: "ghost" }), "mt-10"),
				children: "All codes"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/library",
				className: cn(buttonVariants({ variant: "ghost" }), "mt-10"),
				children: "All codes"
			})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./scenarios.index-CnzTd1LU.mjs");
var Route$9 = createFileRoute("/scenarios/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./scenarios._id-ChSwHIoS.mjs");
var Route$8 = createFileRoute("/scenarios/$id")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./specs.index-CXlZV5wr.mjs");
var Route$7 = createFileRoute("/specs/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./specs._id-wF2yocOA.mjs");
var Route$6 = createFileRoute("/specs/$id")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./sponsors.index-COMKOMqs.mjs");
var Route$5 = createFileRoute("/sponsors/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./sponsors._id-BcFuRUqQ.mjs");
var Route$4 = createFileRoute("/sponsors/$id")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./asme.learn.index-Ck0XM35Q.mjs");
var Route$3 = createFileRoute("/asme/learn/")({
	head: () => pageHead({
		title: "ASME A17.1 lessons · elevator code explained",
		description: "Lessons on ASME A17.1 / CSA B44, Phase I, Phase II, and occupant evacuation. Separate from EN 81.",
		path: "/asme/learn"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./asme.learn._id-Brr2oWoz.mjs");
var Route$2 = createFileRoute("/asme/learn/$id")({
	head: ({ params }) => {
		const lesson = LESSON_BY_ID[params.id];
		return pageHead({
			title: lesson ? `${lesson.title} · ASME A17.1 lesson` : "ASME A17.1 lesson",
			description: lesson?.summary ?? "An ASME A17.1 lesson in plain language. Not EN 81.",
			path: `/asme/learn/${params.id}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./asme.library.index-BXbNRXwO.mjs");
var Route$1 = createFileRoute("/asme/library/")({
	head: () => pageHead({
		title: "ASME A17.1 code library · A17.2 and A17.3 explained",
		description: "ASME A17.1, A17.2 inspection, and A17.3 for existing elevators, explained in plain language. Not EN 81.",
		path: "/asme/library"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./asme.library._id-CAbqaSLV.mjs");
var Route = createFileRoute("/asme/library/$id")({
	head: ({ params }) => {
		const std = STANDARD_BY_ID[params.id];
		return pageHead({
			title: std ? `${std.code} explained · ASME` : "ASME code",
			description: std?.oneLiner ?? "An ASME elevator code explained in plain language. Not EN 81.",
			path: `/asme/library/${params.id}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$36.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$37
});
var AdvertsRoute = Route$35.update({
	id: "/adverts",
	path: "/adverts",
	getParentRoute: () => Route$37
});
var AsmeRoute = Route$34.update({
	id: "/asme",
	path: "/asme",
	getParentRoute: () => Route$37
});
var ClassifyRoute = Route$33.update({
	id: "/classify",
	path: "/classify",
	getParentRoute: () => Route$37
});
var DrillRoute = Route$32.update({
	id: "/drill",
	path: "/drill",
	getParentRoute: () => Route$37
});
var LearnRoute = Route$31.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$37
});
var LibraryRoute = Route$30.update({
	id: "/library",
	path: "/library",
	getParentRoute: () => Route$37
});
var PlacementRoute = Route$29.update({
	id: "/placement",
	path: "/placement",
	getParentRoute: () => Route$37
});
var PracticeRoute = Route$28.update({
	id: "/practice",
	path: "/practice",
	getParentRoute: () => Route$37
});
var ScenariosRoute = Route$27.update({
	id: "/scenarios",
	path: "/scenarios",
	getParentRoute: () => Route$37
});
var ShopRoute = Route$26.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$37
});
var SpecsRoute = Route$25.update({
	id: "/specs",
	path: "/specs",
	getParentRoute: () => Route$37
});
var SponsorsRoute = Route$24.update({
	id: "/sponsors",
	path: "/sponsors",
	getParentRoute: () => Route$37
});
var TestRoute = Route$23.update({
	id: "/test",
	path: "/test",
	getParentRoute: () => Route$37
});
var UkRoute = Route$22.update({
	id: "/uk",
	path: "/uk",
	getParentRoute: () => Route$37
});
var WorldRoute = Route$21.update({
	id: "/world",
	path: "/world",
	getParentRoute: () => Route$37
});
var AdvertsIndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdvertsRoute
});
var AdvertsIdRoute = Route$19.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdvertsRoute
});
var AsmeIndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => AsmeRoute
});
var AsmeLearnRoute = Route$17.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => AsmeRoute
});
var AsmeLibraryRoute = Route$16.update({
	id: "/library",
	path: "/library",
	getParentRoute: () => AsmeRoute
});
var AsmePracticeRoute = Route$15.update({
	id: "/practice",
	path: "/practice",
	getParentRoute: () => AsmeRoute
});
var AsmeTestRoute = Route$14.update({
	id: "/test",
	path: "/test",
	getParentRoute: () => AsmeRoute
});
var LearnIndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => LearnRoute
});
var LearnIdRoute = Route$12.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => LearnRoute
});
var LibraryIndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => LibraryRoute
});
var LibraryIdRoute = Route$10.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => LibraryRoute
});
var ScenariosIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => ScenariosRoute
});
var ScenariosIdRoute = Route$8.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ScenariosRoute
});
var SpecsIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => SpecsRoute
});
var SpecsIdRoute = Route$6.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => SpecsRoute
});
var SponsorsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => SponsorsRoute
});
var SponsorsIdRoute = Route$4.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => SponsorsRoute
});
var AsmeLearnIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AsmeLearnRoute
});
var AsmeLearnIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AsmeLearnRoute
});
var AsmeLibraryIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AsmeLibraryRoute
});
var AsmeLibraryIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AsmeLibraryRoute
});
var AdvertsRouteChildren = {
	AdvertsIdRoute,
	AdvertsIndexRoute
};
var AdvertsRouteWithChildren = AdvertsRoute._addFileChildren(AdvertsRouteChildren);
var AsmeLearnRouteChildren = {
	AsmeLearnIdRoute,
	AsmeLearnIndexRoute
};
var AsmeLearnRouteWithChildren = AsmeLearnRoute._addFileChildren(AsmeLearnRouteChildren);
var AsmeLibraryRouteChildren = {
	AsmeLibraryIdRoute,
	AsmeLibraryIndexRoute
};
var AsmeRouteChildren = {
	AsmeLearnRoute: AsmeLearnRouteWithChildren,
	AsmeLibraryRoute: AsmeLibraryRoute._addFileChildren(AsmeLibraryRouteChildren),
	AsmePracticeRoute,
	AsmeTestRoute,
	AsmeIndexRoute
};
var AsmeRouteWithChildren = AsmeRoute._addFileChildren(AsmeRouteChildren);
var LearnRouteChildren = {
	LearnIdRoute,
	LearnIndexRoute
};
var LearnRouteWithChildren = LearnRoute._addFileChildren(LearnRouteChildren);
var LibraryRouteChildren = {
	LibraryIdRoute,
	LibraryIndexRoute
};
var LibraryRouteWithChildren = LibraryRoute._addFileChildren(LibraryRouteChildren);
var ScenariosRouteChildren = {
	ScenariosIdRoute,
	ScenariosIndexRoute
};
var ScenariosRouteWithChildren = ScenariosRoute._addFileChildren(ScenariosRouteChildren);
var SpecsRouteChildren = {
	SpecsIdRoute,
	SpecsIndexRoute
};
var SpecsRouteWithChildren = SpecsRoute._addFileChildren(SpecsRouteChildren);
var SponsorsRouteChildren = {
	SponsorsIdRoute,
	SponsorsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdvertsRoute: AdvertsRouteWithChildren,
	AsmeRoute: AsmeRouteWithChildren,
	ClassifyRoute,
	DrillRoute,
	LearnRoute: LearnRouteWithChildren,
	LibraryRoute: LibraryRouteWithChildren,
	PlacementRoute,
	PracticeRoute,
	ScenariosRoute: ScenariosRouteWithChildren,
	ShopRoute,
	SpecsRoute: SpecsRouteWithChildren,
	SponsorsRoute: SponsorsRoute._addFileChildren(SponsorsRouteChildren),
	TestRoute,
	UkRoute,
	WorldRoute
};
var routeTree = Route$37._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { MASTERY as A, weakSkills as B, TEST_IDS as C, Progress as D, reteachFor as E, SKILL_BY_ID as F, SPONSOR_PACKAGES as G, ADVERT_BY_ID as H, masteredCount as I, overallMastery as L, QUESTIONS as M, QUESTION_BY_ID as N, QuestionCard as O, SKILLS as P, pickQuestions as R, LESSON_BY_ID as S, PlainSketch as T, SPONSOR_AUDIENCE as U, ADVERTS as V, SPONSOR_BY_ID as W, UkLayers as _, Route$6 as a, MovingLift as b, Route$10 as c, Route$12 as d, LessonList as f, SHAFT_HOTSPOTS as g, PracticeSession as h, Route$4 as i, PLACEMENT_IDS as j, HOME_FAQS as k, CodeLibrary as l, TestSession as m, Route as n, Route$8 as o, Route$19 as p, Route$2 as r, CodePage as s, router_exports as t, LessonFloor as u, STANDARDS as v, AdSlot as w, LESSONS as x, STANDARD_BY_ID as y, useProgress as z };
