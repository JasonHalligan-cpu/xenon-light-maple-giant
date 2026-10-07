export type LatamCode = {
  id: string;
  code: string;
  title: string;
  statute: string;
  plain: string;
  why: string;
};

export type LatamQuestion = {
  id: string;
  prompt: string;
  choices: readonly string[];
  answer: number;
  plain: string;
};

export type LatamCountry = {
  slug: string;
  name: string;
  body: string;
  codes: LatamCode[];
  questions: LatamQuestion[];
};

function country(
  slug: string,
  name: string,
  body: string,
  codes: LatamCode[],
  questions: LatamQuestion[],
): LatamCountry {
  return { slug, name, body, codes, questions };
}

export const LATAM_COUNTRIES: LatamCountry[] = [
  country(
    "argentina",
    "Argentina",
    "IRAM",
    [
      {
        id: "res-27",
        code: "Resolución 27/2025",
        title: "New elevators placed on the market",
        statute:
          "Resolución 27/2025 of the Argentine Secretariat of Industry approves a technical regulation of essential safety requirements for new elevators and safety components sold in Argentina.",
        plain:
          "This is the market rule for a new elevator and its safety parts in Argentina. IRAM writes the technical standards that sit under it.",
        why: "The country on the drawing has to be Argentina before this resolution is the one you quote.",
      },
      {
        id: "res-897",
        code: "Resolución 897/1999",
        title: "The older market rule for elevators and safety parts",
        statute:
          "Resolución 897/1999 says an elevator and its safety components may be sold in Argentina only if they meet the essential safety requirements. Those requirements can be met through applicable IRAM standards, Mercosur NM standards, European EN standards, or ISO standards, together with the resolution itself.",
        plain:
          "897/1999 is the older sale rule. Naming EN or ISO on an Argentine job does not replace it. The resolution is what makes the sale lawful, and it still has to say which standard was used.",
        why: "A European number on its own is not the Argentine market rule.",
      },
      {
        id: "city",
        code: "Municipal ordinance and Law 962",
        title: "The city still has its own building rule",
        statute:
          "Argentine elevator ordinances are municipal. The Building Code of the Autonomous City of Buenos Aires is widely used, with changes by each municipality. Law 962 on physical accessibility is also in use. IRAM 3681 is the manufacturing and installation standard named in trade practice.",
        plain:
          "The national sale rule is not the city’s building rule. Ask which municipality, whether Law 962 applies, and whether IRAM 3681 is the installation standard on this job.",
        why: "Two cities in Argentina can inspect the same elevator against two ordinances.",
      },
    ],
    [
      {
        id: "res",
        prompt: "What is the market rule for a new elevator sold in Argentina?",
        choices: [
          "Resolución 27/2025, with the IRAM standards under it.",
          "A single Latin American elevator code.",
          "The manufacturer’s brochure, with no national number.",
          "Whatever edition the last export used.",
        ],
        answer: 0,
        plain: "Name Resolución 27/2025 and the IRAM edition the authority on this job is using.",
      },
      {
        id: "older",
        prompt: "What does Resolución 897/1999 still tell you?",
        choices: [
          "An elevator sold in Argentina had to meet essential safety requirements, which could be shown through IRAM, Mercosur NM, EN or ISO.",
          "That EN 81 replaced every Argentine resolution.",
          "That municipalities stopped writing ordinances in 1999.",
          "That a brochure is enough.",
        ],
        answer: 0,
        plain: "897/1999 is the older sale rule. A foreign standard can be the method. It is not a substitute for the Argentine resolution.",
      },
      {
        id: "municipio",
        prompt: "The national resolution is on the drawing. What can a city still require?",
        choices: [
          "Its own ordinance, and accessibility under Law 962 where that law applies.",
          "Nothing. The resolution closes the file.",
          "Only the paint colour.",
          "A rule written for another country.",
        ],
        answer: 0,
        plain: "Buenos Aires has a building code. Other municipalities change it. Law 962 is the accessibility law. IRAM 3681 is the installation standard named in trade practice.",
      },
      {
        id: "iram",
        prompt: "What does Resolución 27/2025 regulate?",
        choices: [
          "New elevators placed on the market, and their safety components.",
          "Only the paint on the landing doors.",
          "Only an elevator that has already been in the building for thirty years.",
          "Only escalators.",
        ],
        answer: 0,
        plain: "Resolución 27/2025 is the market rule for a new elevator and its safety parts. The IRAM standards sit under that resolution.",
      },
    ],
  ),
  country(
    "bolivia",
    "Bolivia",
    "IBNORCA",
    [
      {
        id: "nb-maint",
        code: "NB 135002:2009",
        title: "Maintenance of elevators",
        statute:
          "NB 135002:2009, written through IBNORCA, sets general requirements for maintaining elevators, goods lifts and escalators, including a minimum preventive-maintenance programme.",
        plain:
          "This is Bolivia’s maintenance book. It is not a construction book for a new passenger elevator, and it is not a neighbour’s standard.",
        why: "A maintenance programme and a construction standard are different duties.",
      },
      {
        id: "nb-access",
        code: "NB 1220006",
        title: "An accessible elevator in a building",
        statute:
          "NB 1220006 sets minimum sizes for elevators in public and private buildings: a clear car at least 90 cm wide, 1.20 m deep and 2.10 m high, and a door at least 80 cm wide and 2.05 m high. Automatic doors are recommended.",
        plain:
          "If a wheelchair user must use the elevator, this Bolivian accessibility text is the size book. A car smaller than those figures does not meet it.",
        why: "The size is in a Bolivian NB, not in a regional slogan.",
      },
    ],
    [
      {
        id: "maint",
        prompt: "Which Bolivian standard is the maintenance book?",
        choices: [
          "NB 135002:2009.",
          "NB 1220006, which is the accessibility size.",
          "A brochure with no NB number.",
          "A standard from the last country the factory shipped to.",
        ],
        answer: 0,
        plain: "NB 135002:2009 covers maintenance of elevators, goods lifts and escalators, including the minimum preventive programme.",
      },
      {
        id: "size",
        prompt: "NB 1220006 asks for which clear car, at least?",
        choices: [
          "90 cm wide, 1.20 m deep, 2.10 m high.",
          "Any car a person can stand in.",
          "The size on the brochure, with no number.",
          "A car with no door-width rule.",
        ],
        answer: 0,
        plain: "The accessible car is at least 90 cm by 1.20 m, and 2.10 m high. The door is at least 80 cm wide and 2.05 m high.",
      },
      {
        id: "body",
        prompt: "What does NB 135002:2009 require?",
        choices: [
          "A minimum preventive-maintenance programme for elevators, goods lifts and escalators.",
          "The clear size of an accessible car.",
          "Nothing, once the elevator is installed.",
          "Only the colour of the doors.",
        ],
        answer: 0,
        plain: "NB 135002:2009 is the maintenance duty, including the minimum preventive programme. The accessible size is NB 1220006.",
      },
      {
        id: "mix",
        prompt: "A spec quotes NB 1220006 as the maintenance programme. What is wrong?",
        choices: [
          "1220006 is the accessibility size. Maintenance is NB 135002:2009.",
          "Nothing. Any NB number covers every duty.",
          "Maintenance has no Bolivian number.",
          "The door width is the maintenance programme.",
        ],
        answer: 0,
        plain: "Keep the two books apart. 135002 maintains. 1220006 sizes an accessible car.",
      },
    ],
  ),
  country(
    "brazil",
    "Brazil",
    "ABNT",
    [
      {
        id: "nbr",
        code: "ABNT NBR 16858",
        title: "The book for a new passenger elevator",
        statute:
          "ABNT NBR 16858, parts 1, 2, 3 and 7, was published in 2020. It replaced ABNT NBR NM 207, NM 267 and NBR 16042. Trade reports put it in force for new elevators from 20 April 2024. A city, and consumer law, decide how it is required.",
        plain:
          "This is the Brazilian book for a new passenger elevator. Name ABNT NBR 16858 and the parts that apply. The city, and consumer law, decide how it is required.",
        why: "The drawing has to say ABNT NBR 16858. A city can still decide how that book is required.",
      },
      {
        id: "existing",
        code: "ABNT NBR 15597:2010",
        title: "An elevator already in the building",
        statute:
          "ABNT NBR 15597:2010 sets safety requirements for improving existing electric passenger elevators, and electric passenger and goods elevators. It is not the book for a new elevator.",
        plain:
          "A new car is NBR 16858. An old electric car that must be made safer is NBR 15597:2010. Do not use one number for both jobs.",
        why: "Modernising an existing elevator is a different book from installing a new one.",
      },
    ],
    [
      {
        id: "nbr-q",
        prompt: "Which book do you name for a new passenger elevator in Brazil?",
        choices: [
          "ABNT NBR 16858, and the parts that apply.",
          "“The Brazilian code”, with no number.",
          "NM 207, with no check of whether it has been replaced.",
          "The manufacturer’s brochure alone.",
        ],
        answer: 0,
        plain: "ABNT NBR 16858 is the Brazilian book for a new passenger elevator. Name the parts that apply.",
      },
      {
        id: "replaced",
        prompt: "What did ABNT NBR 16858 replace?",
        choices: [
          "ABNT NBR NM 207, NM 267 and NBR 16042.",
          "Nothing. Those older numbers are still the book for a new elevator.",
          "Only the rule for escalators.",
          "The city’s fire-alarm bylaw.",
        ],
        answer: 0,
        plain: "NBR 16858 replaced NM 207, NM 267 and NBR 16042 for a new passenger elevator. Confirm the edition the city is using.",
      },
      {
        id: "old",
        prompt: "Which book is for improving an existing electric elevator?",
        choices: [
          "ABNT NBR 15597:2010.",
          "NBR 16858, used as if the car were new.",
          "There is no Brazilian number for an existing car.",
          "The maintenance log alone.",
        ],
        answer: 0,
        plain: "NBR 15597:2010 is the existing-elevator book. NBR 16858 is the new passenger elevator.",
      },
      {
        id: "abnt",
        prompt: "A city, and consumer law, do what with ABNT NBR 16858?",
        choices: [
          "They decide how the standard is required.",
          "They delete the standard.",
          "They replace it with NM 207 for every new elevator.",
          "They apply only to door paint.",
        ],
        answer: 0,
        plain: "NBR 16858 is the book. A city, and consumer law, decide how that book is required. Trade reports put it in force for new elevators from 20 April 2024.",
      },
    ],
  ),
  country(
    "chile",
    "Chile",
    "INN",
    [
      {
        id: "nch",
        code: "NCh 440",
        title: "The construction family",
        statute:
          "NCh 440 is Chile’s construction family for elevators. NCh 440/2.Of2001 covers hydraulic elevators. INN publishes the NCh texts.",
        plain:
          "NCh 440 is the build book. The hydraulic part is NCh 440/2.Of2001. It is not the inspection book.",
        why: "Construction and inspection are different Chilean numbers.",
      },
      {
        id: "inspect",
        code: "NCh 3395/1:2016",
        title: "Inspection of an existing electric elevator",
        statute:
          "NCh 3395/1:2016 sets inspection requirements for existing electric elevators and goods lifts. Chile’s elevator law requires maintenance and a certified inspection.",
        plain:
          "NCh 3395/1 is how an existing electric elevator is inspected. The elevator law is what makes the inspection and the maintenance a duty.",
        why: "A construction standard does not become an inspection just because both say NCh.",
      },
    ],
    [
      {
        id: "build",
        prompt: "Which book is the construction standard for an elevator in Chile?",
        choices: [
          "NCh 440.",
          "NCh 3395/1, which is the inspection book.",
          "A brochure with no NCh number.",
          "The maintenance log alone.",
        ],
        answer: 0,
        plain: "NCh 440 is Chile’s construction family. NCh 440/2.Of2001 is the hydraulic part.",
      },
      {
        id: "inspect-q",
        prompt: "Which book sets the inspection of an existing electric elevator in Chile?",
        choices: [
          "NCh 3395/1:2016.",
          "NCh 440, the construction book, used as if it were the inspection.",
          "The installer’s handover note.",
          "There is no inspection book.",
        ],
        answer: 0,
        plain: "NCh 3395/1:2016 is the inspection book for an existing electric elevator and for goods lifts.",
      },
      {
        id: "law",
        prompt: "What does Chile’s elevator law require?",
        choices: [
          "Maintenance, and a certified inspection.",
          "Only a new nameplate.",
          "Nothing, once the elevator is in the building.",
          "A construction drawing, and no inspection.",
        ],
        answer: 0,
        plain: "The law is what makes maintenance and certified inspection a duty. NCh 440 builds. NCh 3395 inspects.",
      },
      {
        id: "inn",
        prompt: "Which elevator is NCh 440/2.Of2001?",
        choices: [
          "A hydraulic elevator.",
          "The inspection of an existing electric elevator.",
          "An escalator.",
          "A stairlift only.",
        ],
        answer: 0,
        plain: "NCh 440/2.Of2001 is the hydraulic construction part. Inspection of an existing electric elevator is NCh 3395/1:2016.",
      },
    ],
  ),
  country(
    "colombia",
    "Colombia",
    "ICONTEC",
    [
      {
        id: "ntc-1",
        code: "NTC 5926-1",
        title: "Inspection of elevators in service",
        statute:
          "NTC 5926-1, from ICONTEC, is the inspection scheme for elevators in operation, electric and hydraulic. Editions include 2012, 2021 and a 2026 edition. It is a national text. A city decides whether that inspection is obligatory.",
        plain:
          "Name NTC 5926-1 and the edition. Then ask whether this city has made the inspection mandatory. Not every city has.",
        why: "A national inspection scheme and a city’s duty to use it are two different facts.",
      },
      {
        id: "ntc-2",
        code: "NTC 5926-2:2021",
        title: "Escalators and moving walks",
        statute:
          "NTC 5926-2:2021 sets inspection criteria for escalators and moving walks. It is not the elevator part.",
        plain:
          "An escalator is part 2. An elevator in service is part 1. Do not put the escalator number on a passenger car.",
        why: "The part number is which machine you are inspecting.",
      },
      {
        id: "bogota",
        code: "Bogotá inspection",
        title: "What one city has actually required",
        statute:
          "Bogotá has used an annual inspection of the documents, the maintenance and the safety devices. Another city can differ, even where NTC 5926-1 exists.",
        plain:
          "Quote Bogotá’s annual check only for a job in Bogotá. Another city needs its own rule, plus the NTC edition.",
        why: "The NTC does not, by itself, make every city inspect.",
      },
    ],
    [
      {
        id: "which",
        prompt: "Which ICONTEC text inspects an elevator in service?",
        choices: [
          "NTC 5926-1.",
          "NTC 5926-2, which is the escalator part.",
          "“The Colombian standard”, with no number.",
          "The manufacturer’s logo.",
        ],
        answer: 0,
        plain: "NTC 5926-1 is the elevator inspection. Name the edition, then ask if this city requires it.",
      },
      {
        id: "city",
        prompt: "NTC 5926-1 exists. Does every Colombian city have to use it?",
        choices: [
          "No. A city decides whether the inspection is obligatory.",
          "Yes. Publication makes it mandatory everywhere the next day.",
          "Yes, but only for door paint.",
          "Only if the elevator is in a mine.",
        ],
        answer: 0,
        plain: "The NTC is national. Adoption as a duty is local. Bogotá has used an annual inspection. Another city can differ.",
      },
      {
        id: "escalator",
        prompt: "Which part covers escalators and moving walks?",
        choices: ["NTC 5926-2:2021.", "NTC 5926-1.", "There is no escalator part.", "The maintenance log."],
        answer: 0,
        plain: "Part 2 is escalators and moving walks. Part 1 is elevators.",
      },
      {
        id: "icontec",
        prompt: "What does NTC 5926-1 set out to check?",
        choices: [
          "The safety of electric and hydraulic elevators in service.",
          "Only the colour of the landing doors.",
          "Only escalators and moving walks.",
          "A car that has not been built yet, and nothing in service.",
        ],
        answer: 0,
        plain: "NTC 5926-1 is the inspection of elevators in operation. Escalators are NTC 5926-2. A city still decides whether the inspection is obligatory.",
      },
    ],
  ),
  country(
    "costa-rica",
    "Costa Rica",
    "INTECO",
    [
      {
        id: "c301",
        code: "INTE C301:2017",
        title: "A new electric passenger elevator",
        statute:
          "INTE C301:2017 sets safety rules for a new, permanently installed electric elevator that carries people, or people and goods, at no more than 15° from the vertical. It does not cover an existing building where the shaft will not fit. Earthquake design is extra, under the Código Sísmico de Costa Rica. Fire protection follows the national fire rules.",
        plain:
          "Write INTE C301:2017 for a new electric car. Do not write a foreign number as if it were the Costa Rican book. The seismic code and the fire rules sit beside it.",
        why: "The Costa Rican number is the one on the drawing.",
      },
      {
        id: "c302",
        code: "INTE C302:2017",
        title: "A new hydraulic elevator",
        statute:
          "INTE C302:2017 sets the safety rules for construction and installation of hydraulic elevators. It is the hydraulic pair to INTE C301:2017.",
        plain:
          "Electric is C301. Hydraulic is C302. Both are 2017 INTECO texts. Do not use one number for both drives.",
        why: "The drive decides the part.",
      },
      {
        id: "c475",
        code: "INTE C475:2021",
        title: "A stairlift or an inclined platform",
        statute:
          "INTE C475:2021 covers stairlifts and inclined lifting platforms for people with disabilities. It is not the book for a vertical passenger elevator.",
        plain:
          "A platform on the stair is C475. A vertical passenger car is C301 or C302. The machine decides the number.",
        why: "An access platform is not a passenger elevator.",
      },
    ],
    [
      {
        id: "electric",
        prompt: "Which Costa Rican standard is a new electric passenger elevator?",
        choices: ["INTE C301:2017.", "INTE C302:2017.", "INTE C475:2021.", "A brochure with no INTE number."],
        answer: 0,
        plain: "C301:2017 is the new electric book. The seismic code and the fire rules are extra.",
      },
      {
        id: "hydraulic",
        prompt: "Which number is the hydraulic elevator?",
        choices: ["INTE C302:2017.", "INTE C301:2017.", "INTE C475:2021.", "The fire-brigade manual."],
        answer: 0,
        plain: "C302:2017 is hydraulic. C301:2017 is electric.",
      },
      {
        id: "platform",
        prompt: "A stairlift for a wheelchair user is which book?",
        choices: [
          "INTE C475:2021.",
          "INTE C301:2017.",
          "There is no Costa Rican number for a platform.",
          "The door-paint specification.",
        ],
        answer: 0,
        plain: "C475:2021 is the stairlift and the inclined platform. It is not the vertical passenger car.",
      },
      {
        id: "old",
        prompt: "The shaft in an old building will not fit C301. What does that standard say?",
        choices: [
          "It does not cover that existing building.",
          "It still applies, and the building must be ignored.",
          "Any smaller car is automatically inside C301.",
          "The seismic code replaces it.",
        ],
        answer: 0,
        plain: "C301 is for a new electric installation that can meet it. An existing shaft that cannot fit is outside that book.",
      },
    ],
  ),
  country(
    "cuba",
    "Cuba",
    "NC",
    [
      {
        id: "res-106",
        code: "Resolución 106/2021",
        title: "The technical regulation",
        statute:
          "Resolución 106/2021 of the Ministry of Industries, published in Gaceta Oficial No. 150 of 28 December 2021, regulates import, installation, inspection, maintenance and modernisation of elevators, escalators and moving walks. It binds producers, importers, installers, maintainers, building owners and inspectors. Equipment designed for military use is outside it.",
        plain:
          "This resolution is the Cuban duty. It covers the machine from import through maintenance. The owner of the building is inside it, not only the factory.",
        why: "A construction standard does not replace the resolution that makes the duty obligatory.",
      },
      {
        id: "nc-1356",
        code: "NC 1356:2020",
        title: "How a passenger elevator is built",
        statute:
          "The resolution applies passenger and goods-passenger elevators under NC 1356:2020, the Cuban safety rules for construction and installation. That standard modifies ISO 8100-1:2019. Escalators follow the texts the resolution names, not NC 1356.",
        plain:
          "Write NC 1356:2020 for the Cuban passenger elevator. ISO 8100-1 is the text it modifies. It is not a substitute for the Cuban number, or for Resolución 106/2021.",
        why: "The number on a Cuban drawing is NC, plus the resolution.",
      },
    ],
    [
      {
        id: "duty",
        prompt: "Which text makes import, installation, inspection and maintenance a duty in Cuba?",
        choices: [
          "Resolución 106/2021.",
          "A brochure with no Cuban number.",
          "Only a military specification.",
          "The building manager’s notebook.",
        ],
        answer: 0,
        plain: "Resolución 106/2021 is the regulation. Owners and inspectors are inside it, as well as the factory and the installer.",
      },
      {
        id: "build",
        prompt: "Which Cuban standard builds a passenger elevator?",
        choices: [
          "NC 1356:2020.",
          "Resolución 106/2021, used as if it were the construction geometry.",
          "There is no NC for elevators.",
          "An escalator standard, used for the car.",
        ],
        answer: 0,
        plain: "NC 1356:2020 is the construction book. It modifies ISO 8100-1:2019. The resolution is still the duty.",
      },
      {
        id: "iso",
        prompt: "Someone writes only ISO 8100-1 on a Cuban job. What is missing?",
        choices: [
          "NC 1356:2020, and Resolución 106/2021.",
          "Nothing. The ISO number is the Cuban rule.",
          "Only the paint colour.",
          "A military exemption for every passenger car.",
        ],
        answer: 0,
        plain: "ISO 8100-1 is the base that NC 1356 modifies. The Cuban number and the resolution still have to be named.",
      },
      {
        id: "who",
        prompt: "Who is bound by Resolución 106/2021?",
        choices: [
          "Producers, importers, installers, maintainers, owners and inspectors.",
          "Only the passenger.",
          "Only the door supplier.",
          "Nobody, once the elevator is imported.",
        ],
        answer: 0,
        plain: "The resolution follows the elevator from import to maintenance. The owner of the building is included.",
      },
    ],
  ),
  country(
    "dominican-republic",
    "Dominican Republic",
    "INDOCAL",
    [
      {
        id: "indocal",
        code: "INDOCAL",
        title: "Who writes a Dominican standard",
        statute:
          "INDOCAL, the Instituto Dominicano para la Calidad, writes Dominican standards (NORDOM) and Dominican technical regulations (RTD). ODAC accredits inspection bodies. A NORDOM is not an RTD.",
        plain:
          "Ask which kind of text this job is under. A NORDOM is a standard. An RTD is a technical regulation. They are not the same document.",
        why: "The Dominican number has a Dominican name. Another country’s code is not it.",
      },
      {
        id: "rtd-458",
        code: "RTD 458",
        title: "A regulation that is not about elevators",
        statute:
          "RTD 458 regulates reinforcing steel bars for concrete. INDOCAL inspects that product. It does not set the safety rules for an elevator.",
        plain:
          "Do not put RTD 458 on an elevator drawing. It is a steel-bar regulation. The elevator still needs its own Dominican text, named in full.",
        why: "A familiar RTD number can be the wrong machine.",
      },
    ],
    [
      {
        id: "which",
        prompt: "What is the difference between a NORDOM and an RTD?",
        choices: [
          "A NORDOM is a Dominican standard. An RTD is a Dominican technical regulation.",
          "They are the same document.",
          "Both are the construction rules for an elevator.",
          "An RTD is always a foreign code.",
        ],
        answer: 0,
        plain: "A NORDOM is a standard. An RTD is a technical regulation. RTD 458 is reinforcing steel, not an elevator rule.",
      },
      {
        id: "steel",
        prompt: "What is RTD 458?",
        choices: [
          "A regulation for reinforcing steel, not for elevators.",
          "The Dominican elevator code.",
          "The inspection book for escalators.",
          "The accessibility size of a car.",
        ],
        answer: 0,
        plain: "RTD 458 is reinforcing bar. Citing it does not specify an elevator.",
      },
      {
        id: "blank",
        prompt: "A spec says ‘Dominican standard’ and stops. What is missing?",
        choices: [
          "The NORDOM or RTD number, and which kind of text it is.",
          "Nothing. Those two words are the book.",
          "Only the delivery date.",
          "The paint specification.",
        ],
        answer: 0,
        plain: "Name the Dominican number. Say whether it is a NORDOM or an RTD.",
      },
      {
        id: "foreign",
        prompt: "The factory’s home standard is on the drawing, with no Dominican number. Is that enough?",
        choices: [
          "No. The job still has to name the Dominican text the authority requires.",
          "Yes. Any foreign number is a NORDOM.",
          "Yes, if the brochure is in Spanish.",
          "Yes. RTD 458 covers elevators.",
        ],
        answer: 0,
        plain: "A foreign number is not a Dominican standard until the Dominican text is named.",
      },
    ],
  ),
  country(
    "ecuador",
    "Ecuador",
    "INEN",
    [
      {
        id: "rte",
        code: "RTE INEN 095",
        title: "The technical regulation before an elevator is sold",
        statute:
          "RTE INEN 095 is Ecuador’s technical regulation for lifts, escalators and moving walks. It sets what those products must meet before they are marketed, including electric traction and hydraulic passenger elevators inclined not more than 15° from the vertical. Assembly, adjustment and maintenance are carried out by people authorised by the manufacturer.",
        plain:
          "This is the market rule in Ecuador. It covers lifts, escalators and moving walks before they are sold, and it still governs how they are kept.",
        why: "The invoice has to name RTE INEN 095 before the elevator is sold.",
      },
      {
        id: "cpe",
        code: "CPE INEN 2018:2013",
        title: "The passenger-elevator safety code",
        statute:
          "CPE INEN 2018:2013 is the passenger-elevator safety code. A maintenance company is expected to have at least one technician certified by the manufacturer.",
        plain:
          "RTE INEN 095 is the regulation for placing the equipment on the market. CPE INEN 2018:2013 is the safety code for the passenger elevator, including who may maintain it.",
        why: "The regulation and the safety code are both Ecuadorian, and they are not the same document.",
      },
    ],
    [
      {
        id: "sell",
        prompt: "What must an elevator meet in Ecuador before it is sold?",
        choices: [
          "RTE INEN 095.",
          "A brochure with no national number.",
          "Only the installer’s verbal promise.",
          "A rule that starts after the elevator is already in the building.",
        ],
        answer: 0,
        plain: "RTE INEN 095 is the technical regulation those products must meet before they are marketed.",
      },
      {
        id: "scope",
        prompt: "What does RTE INEN 095 cover?",
        choices: [
          "Lifts, escalators and moving walks.",
          "Only the paint on the landing doors.",
          "Only escalators, and no lifts.",
          "Only elevators already twenty years old.",
        ],
        answer: 0,
        plain: "The regulation covers lifts, escalators and moving walks, including electric and hydraulic passenger elevators not more than 15° from the vertical.",
      },
      {
        id: "cpe-q",
        prompt: "Which text is the passenger-elevator safety code?",
        choices: [
          "CPE INEN 2018:2013.",
          "RTE INEN 095, used as if it were the only safety code.",
          "There is no INEN safety code.",
          "The door supplier’s catalogue.",
        ],
        answer: 0,
        plain: "CPE INEN 2018:2013 is the safety code. A maintenance firm needs at least one technician certified by the manufacturer.",
      },
      {
        id: "keep",
        prompt: "Who may assemble and maintain the elevator?",
        choices: [
          "People authorised by the manufacturer.",
          "Anyone with a key to the machine room.",
          "Only the passenger.",
          "The insurer, with no training.",
        ],
        answer: 0,
        plain: "RTE INEN 095 keeps assembly, adjustment and maintenance with people the manufacturer has authorised.",
      },
    ],
  ),
  country(
    "el-salvador",
    "El Salvador",
    "OSN",
    [
      {
        id: "osn",
        code: "OSN",
        title: "Recommended Salvadoran standards",
        statute:
          "The Organismo Salvadoreño de Normalización writes recommended Salvadoran standards, the NSR. An NSR is not, by itself, a mandatory regulation.",
        plain:
          "If the drawing says only ‘Salvadoran standard’, ask for the NSR number. Then ask whether anyone has made it mandatory.",
        why: "A recommended standard and a mandatory regulation are different instruments.",
      },
      {
        id: "osartec",
        code: "OSARTEC",
        title: "Mandatory technical regulations",
        statute:
          "OSARTEC writes the mandatory Salvadoran technical regulations, the NSO. An NSO can cover products that affect health, safety and the public interest. An NSR does not become an NSO because a brochure says so.",
        plain:
          "The mandatory text, if there is one for this elevator, is an NSO from OSARTEC. Name that number. Do not upgrade an NSR by assertion.",
        why: "The letters NSO and NSR are the difference between a duty and a recommendation.",
      },
    ],
    [
      {
        id: "nsr",
        prompt: "What is an NSR in El Salvador?",
        choices: [
          "A recommended standard from OSN.",
          "A mandatory regulation from OSARTEC.",
          "A municipal fire bylaw.",
          "A foreign elevator code with a new cover.",
        ],
        answer: 0,
        plain: "OSN writes the NSR. Recommended is not the same as mandatory.",
      },
      {
        id: "nso",
        prompt: "What can an NSO do that an NSR cannot?",
        choices: [
          "Impose a mandatory requirement.",
          "Remain only a recommendation, the same as an NSR.",
          "Apply only outside El Salvador.",
          "Replace the elevator with a stair.",
        ],
        answer: 0,
        plain: "An NSO is a mandatory technical regulation. An NSR is a recommended standard. A brochure cannot turn an NSR into an NSO.",
      },
      {
        id: "upgrade",
        prompt: "A brochure calls an NSR mandatory. Is that enough?",
        choices: [
          "No. Mandatory status is an NSO, not a sentence in a brochure.",
          "Yes. The brochure can change the legal character.",
          "Yes, if the brochure is in Spanish.",
          "Yes. Every NSR is an NSO.",
        ],
        answer: 0,
        plain: "Ask for the NSO number if the duty is mandatory. An NSR stays a recommendation until a regulation adopts it.",
      },
      {
        id: "blank",
        prompt: "The spec says ‘Salvadoran compliant’ and gives no number. What is missing?",
        choices: [
          "Whether it is an NSO or an NSR, and the number.",
          "Nothing. The word compliant is the standard.",
          "Only the paint colour.",
          "The passenger’s name.",
        ],
        answer: 0,
        plain: "Name the instrument. NSO and NSR are not interchangeable.",
      },
    ],
  ),
  country(
    "guatemala",
    "Guatemala",
    "COGUANOR",
    [
      {
        id: "coguanor",
        code: "COGUANOR NTG",
        title: "The Guatemalan technical standard",
        statute:
          "COGUANOR, created by Decreto 1523 of 1962 and attached to the Ministry of Economy, writes Normas Técnicas Guatemaltecas. The number on a Guatemalan drawing is an NTG, not another country’s code.",
        plain:
          "Ask for the NTG number and the edition. ‘Guatemalan standard’, with no number, has not named the book.",
        why: "COGUANOR is the body. The NTG number is the book.",
      },
      {
        id: "voluntary",
        code: "Decreto 78-2005",
        title: "An NTG is not automatically mandatory",
        statute:
          "Under the quality-system law, Decreto 78-2005, a Guatemalan technical standard is voluntary unless a regulation adopts it. COGUANOR does not, by publishing an NTG, make every building duty obligatory.",
        plain:
          "Find the NTG. Then ask which regulation, if any, makes that NTG obligatory on this elevator. Publication alone is not that step.",
        why: "A voluntary standard and a regulation are different duties.",
      },
    ],
    [
      {
        id: "who",
        prompt: "Under Decreto 78-2005, what is an NTG until a regulation adopts it?",
        choices: [
          "Voluntary.",
          "Mandatory the day it is printed.",
          "A foreign elevator code.",
          "A substitute for the building permit.",
        ],
        answer: 0,
        plain: "Decreto 78-2005 leaves a Guatemalan technical standard voluntary until a regulation adopts it. Publication is not that adoption.",
      },
      {
        id: "duty",
        prompt: "An NTG has been published. Is it mandatory for this elevator?",
        choices: [
          "Only if a regulation adopts it. Decreto 78-2005 leaves the standard voluntary until then.",
          "Yes. Every NTG is mandatory the day it is printed.",
          "Yes, if the brochure cites it.",
          "No NTG can ever be adopted.",
        ],
        answer: 0,
        plain: "Publication is not adoption. Ask which regulation makes the NTG a duty on this job.",
      },
      {
        id: "number",
        prompt: "A spec says ‘COGUANOR’ and stops. What is missing?",
        choices: [
          "The NTG number, the edition, and whether a regulation adopts it.",
          "Nothing. The body’s name is the book.",
          "Only the delivery date.",
          "The paint specification.",
        ],
        answer: 0,
        plain: "Name the NTG. Then say whether it is voluntary or adopted.",
      },
      {
        id: "foreign",
        prompt: "Can a foreign elevator number stand in for the NTG?",
        choices: [
          "No. The Guatemalan book is the NTG the job actually uses.",
          "Yes. Any foreign number is an NTG.",
          "Yes, if it is translated.",
          "Yes. Decreto 78-2005 adopts every foreign code.",
        ],
        answer: 0,
        plain: "Write the NTG number. A foreign code is not a Guatemalan standard until the Guatemalan text says so.",
      },
    ],
  ),
  country(
    "haiti",
    "Haiti",
    "BHN",
    [
      {
        id: "bhn",
        code: "BHN",
        title: "The Haitian standards body",
        statute:
          "The Bureau Haïtien de Normalisation coordinates national standards, certification and industrial metrology. Its mark is conformity to Haitian standards, not to a foreign code.",
        plain:
          "A Haitian job names a Haitian standard. BHN is who coordinates that standard and who certifies conformity to it.",
        why: "The mark means the product meets a Haitian standard.",
      },
      {
        id: "adopt",
        code: "Haitian adoption",
        title: "A foreign number is not yet Haitian",
        statute:
          "BHN publishes more than 200 national standards. An elevator drawing still has to cite the Haitian text that applies to this machine. A foreign elevator code is not that text until the Haitian authority adopts it.",
        plain:
          "Do not write another country’s elevator number and call it the Haitian book. Ask BHN’s text, or the text the authority on this job requires, and name it.",
        why: "The country on the drawing has to be Haiti.",
      },
    ],
    [
      {
        id: "who",
        prompt: "What does the BHN mark attest?",
        choices: [
          "Conformity to Haitian standards.",
          "Conformity to whichever foreign code the factory prefers.",
          "That no standard applies.",
          "Only the colour of the doors.",
        ],
        answer: 0,
        plain: "The mark is conformity to Haitian standards. A foreign elevator number is not that standard until Haiti adopts it.",
      },
      {
        id: "foreign",
        prompt: "A foreign elevator code is written on a Haitian job. Is that the Haitian standard?",
        choices: [
          "No. Not unless the Haitian authority has adopted that text.",
          "Yes. Any foreign number is a Haitian standard.",
          "Yes, if the brochure is bilingual.",
          "Yes. BHN does not publish standards.",
        ],
        answer: 0,
        plain: "Name the Haitian text. A foreign number stays foreign until Haiti adopts it.",
      },
      {
        id: "mark",
        prompt: "BHN has published national standards. What must the elevator drawing still cite?",
        choices: [
          "The Haitian text that applies to this machine.",
          "Any foreign number. Publication makes every foreign code Haitian.",
          "Nothing. The BHN mark replaces the number.",
          "Only the country name.",
        ],
        answer: 0,
        plain: "The drawing cites the Haitian text for this machine. A foreign elevator code is not that text until Haiti adopts it.",
      },
      {
        id: "blank",
        prompt: "The spec says ‘Haitian compliant’ and gives no number. What do you still need?",
        choices: [
          "The Haitian standard, or the text the authority on this job requires.",
          "Nothing. The word compliant is the standard.",
          "Only the brochure.",
          "A promise that every Caribbean country uses the same number.",
        ],
        answer: 0,
        plain: "Ask for the Haitian number. BHN is the body. The number is still required.",
      },
    ],
  ),
  country(
    "honduras",
    "Honduras",
    "OHN",
    [
      {
        id: "ohn",
        code: "OHN",
        title: "The Honduran standard",
        statute:
          "The Organismo Hondureño de Normalización publishes Normas Hondureñas. The national catalog is the list of OHN texts in force. An elevator job in Honduras names an OHN number from that catalog, not a neighbour’s code.",
        plain:
          "Look up the OHN number that applies to this elevator, and the edition in force. The body’s name alone is not the book.",
        why: "The catalog is how you prove the number exists.",
      },
      {
        id: "not-foreign",
        code: "Not another country’s book",
        title: "A foreign elevator code stays foreign",
        statute:
          "OHN standards are Honduran documents. Writing a Mexican NOM, a Costa Rican INTE or a Colombian NTC on a Honduran drawing does not make it an OHN.",
        plain:
          "Each of those numbers belongs to its own country. Honduras needs the OHN text, or a Honduran regulation that adopts a named text.",
        why: "The country on the drawing decides the book.",
      },
    ],
    [
      {
        id: "who",
        prompt: "What does the OHN catalog list?",
        choices: [
          "The Honduran standards in force.",
          "Every foreign elevator code, renamed as an OHN.",
          "Only Mexican NOMs.",
          "Nothing. Honduras has no catalog.",
        ],
        answer: 0,
        plain: "The catalog is the list of OHN texts in force. A foreign elevator number is not on that list unless a Honduran text adopts it.",
      },
      {
        id: "catalog",
        prompt: "How do you show that an OHN number is in force?",
        choices: [
          "It is in the OHN catalog of texts in force.",
          "The brochure says so.",
          "A neighbouring country uses a similar title.",
          "The number is printed on the door.",
        ],
        answer: 0,
        plain: "The catalog is the list. A similar title abroad is not an entry in it.",
      },
      {
        id: "nom",
        prompt: "A Honduran spec cites a Mexican NOM as if it were the OHN. What is wrong?",
        choices: [
          "A NOM is Mexican. Honduras needs its own OHN, or a Honduran adoption of a named text.",
          "Nothing. Every NOM is an OHN.",
          "Nothing. Central America shares one number.",
          "The NOM is the OHN catalog.",
        ],
        answer: 0,
        plain: "Do not move a number across a border. Name the Honduran text.",
      },
      {
        id: "blank",
        prompt: "The spec says ‘OHN compliant’ and stops. What is missing?",
        choices: [
          "The OHN number and the edition.",
          "Nothing. The initials are the book.",
          "Only the paint colour.",
          "The passenger’s name.",
        ],
        answer: 0,
        plain: "The initials name the body. The number names the standard.",
      },
    ],
  ),
  country(
    "mexico",
    "Mexico",
    "NOM",
    [
      {
        id: "nom-053",
        code: "NOM-053-SCFI-2000",
        title: "A new electric traction elevator",
        statute:
          "NOM-053-SCFI-2000 sets safety specifications and test methods for electric traction elevators for passengers and goods. A draft that would replace it is not the rule until it is published.",
        plain:
          "This is the mandatory Mexican standard for the new electric traction elevator. A draft is not this NOM.",
        why: "The year in the title is the edition in force until a replacement is published.",
      },
      {
        id: "nom-207",
        code: "NOM-207-SCFI-2018",
        title: "Maintenance",
        statute:
          "NOM-207-SCFI-2018 covers maintenance of elevators, escalators, ramps and moving walks. It is not the construction book for a new electric traction elevator.",
        plain:
          "NOM-053 builds and tests the new electric traction car. NOM-207 keeps elevators and escalators maintained. Local construction regulations still apply beside both.",
        why: "The city building rule is a third book, not a footnote to the NOM.",
      },
    ],
    [
      {
        id: "new",
        prompt: "Which NOM covers a new electric traction elevator in Mexico?",
        choices: [
          "NOM-053-SCFI-2000.",
          "NOM-207, which is the maintenance book.",
          "A draft that has not been published.",
          "The city paint specification.",
        ],
        answer: 0,
        plain: "NOM-053-SCFI-2000 sets the safety specifications and the test methods for a new electric traction elevator for passengers and goods.",
      },
      {
        id: "keep",
        prompt: "Which NOM covers maintenance?",
        choices: [
          "NOM-207-SCFI-2018, for elevators, escalators, ramps and moving walks.",
          "NOM-053, used as if it were the maintenance book.",
          "There is no maintenance NOM.",
          "Only the manufacturer’s logo.",
        ],
        answer: 0,
        plain: "NOM-207-SCFI-2018 is the maintenance standard. NOM-053 is the book for the new electric traction elevator.",
      },
      {
        id: "draft",
        prompt: "A draft would replace NOM-053. Is that draft the rule?",
        choices: [
          "No. Not until it is published.",
          "Yes. A draft outranks the published NOM.",
          "Yes, if the brochure mentions it.",
          "Yes, in every city, the day it is drafted.",
        ],
        answer: 0,
        plain: "A draft is not the standard in force. NOM-053-SCFI-2000 stays the rule until a replacement is published.",
      },
      {
        id: "city",
        prompt: "Does the NOM replace the city’s construction rule?",
        choices: [
          "No. Local construction regulations still apply.",
          "Yes. The NOM is the only book in the city.",
          "Yes. Cities do not regulate buildings.",
          "Only if the elevator is hydraulic.",
        ],
        answer: 0,
        plain: "The NOM is the mandatory product and maintenance standard. The city’s construction rule is a separate book.",
      },
    ],
  ),
  country(
    "nicaragua",
    "Nicaragua",
    "NTON",
    [
      {
        id: "nton",
        code: "NTON 12 012-15",
        title: "When a multifamily building must have an elevator",
        statute:
          "NTON 12 012-15, in its rules for housing, says a multifamily building of three or more storeys must have an elevator. A two-storey building needs a stair and a ramp. Where there is an elevator, the stair is still obligatory and the ramp is optional.",
        plain:
          "Three storeys or more, multifamily: an elevator is required. The stair does not disappear because the elevator is there. Two storeys: stair and ramp, not this elevator duty.",
        why: "The NTON is a building duty. It is not, by itself, the construction standard of the machine.",
      },
      {
        id: "machine",
        code: "The machine is a separate book",
        title: "Requiring an elevator is not specifying the elevator",
        statute:
          "NTON 12 012-15 decides when the building must have an elevator. The safety rules for building and installing that machine are a different text. The drawing still has to name the standard the Nicaraguan authority is using for the machine.",
        plain:
          "Do not write ‘NTON 12 012-15’ as if it dimensioned the car, the brake and the tests. It places the elevator in the building. Then name the machine standard.",
        why: "A planning duty and a product standard answer different questions.",
      },
    ],
    [
      {
        id: "when",
        prompt: "When does NTON 12 012-15 require an elevator?",
        choices: [
          "A multifamily building of three or more storeys.",
          "Every two-storey house.",
          "Only a single stair.",
          "Never. Nicaragua has no such rule.",
        ],
        answer: 0,
        plain: "Three or more storeys, multifamily, needs an elevator. Two storeys needs a stair and a ramp.",
      },
      {
        id: "stair",
        prompt: "The building has the elevator. Is the stair still required?",
        choices: [
          "Yes. The stair stays obligatory. The ramp becomes optional.",
          "No. The elevator replaces the stair.",
          "No. The ramp replaces both.",
          "Only if the building has one storey.",
        ],
        answer: 0,
        plain: "The elevator does not delete the stair. With an elevator, the ramp is optional.",
      },
      {
        id: "machine-q",
        prompt: "Does NTON 12 012-15 specify the brake, the tests and the car?",
        choices: [
          "No. It decides when the building must have an elevator. The machine standard is named separately.",
          "Yes. It is the full construction code of the elevator.",
          "Yes. It replaces every product standard.",
          "It applies only to door paint.",
        ],
        answer: 0,
        plain: "Use the NTON for the building duty. Name the machine standard beside it.",
      },
      {
        id: "body",
        prompt: "A multifamily building has two storeys. What does NTON 12 012-15 require?",
        choices: [
          "A stair and a ramp. The elevator duty starts at three storeys.",
          "An elevator, the same as a building of three storeys.",
          "No stair and no ramp.",
          "Only a freight elevator, with no stair.",
        ],
        answer: 0,
        plain: "Two storeys: a stair and a ramp. Three or more, multifamily: an elevator, and the stair stays.",
      },
    ],
  ),
  country(
    "panama",
    "Panama",
    "DGNTI",
    [
      {
        id: "dgnti",
        code: "Law 23 of 1997",
        title: "The national standards body",
        statute:
          "Law 23 of 15 July 1997 makes the Dirección General de Normas y Tecnología Industrial, in the Ministry of Commerce and Industry, the national body for technical standards and conformity assessment.",
        plain:
          "DGNTI is who runs national standards in Panama. A standard is Panamanian when it is a DGNTI text, not because a foreign code was used on the last job.",
        why: "The ministry and the law are the authority. The number still has to be named.",
      },
      {
        id: "canal",
        code: "ACP 2600SEG125",
        title: "Elevators on Canal property",
        statute:
          "The Panama Canal Authority’s rule 2600SEG125 sets minimum safety requirements for elevators and goods lifts on Canal property. A new elevator there is inspected to ANSI A17.1. That rule binds Canal employees, contractors and others working in Canal areas. It is not a DGNTI standard for the whole country.",
        plain:
          "On Canal property, follow 2600SEG125, and ANSI A17.1 for a new elevator’s inspection. Off Canal property, that rule does not become the national book.",
        why: "The Canal is a defined authority. The rest of Panama is not inside its safety rule.",
      },
      {
        id: "fire",
        code: "DINASEPI",
        title: "The fire service reviews the project",
        statute:
          "The fire service, through DINASEPI, reviews building projects. NFPA 101, 2003 edition, has been used in that review. Rescue of people from an elevator or an escalator is for trained people.",
        plain:
          "The fire review is a separate duty from the product standard. Do not treat NFPA 101 as the elevator construction book, and do not treat the Canal rule as the fire review.",
        why: "Three authorities: DGNTI for national standards, the Canal for Canal property, the fire service for the project review.",
      },
    ],
    [
      {
        id: "who",
        prompt: "What does Law 23 of 15 July 1997 give DGNTI?",
        choices: [
          "National technical standards and conformity assessment.",
          "Fire rescue from every elevator in the country.",
          "The Canal safety rule, applied to every city.",
          "Only the colour of the doors.",
        ],
        answer: 0,
        plain: "Law 23 of 1997 makes DGNTI the national standards body. The Canal rule and the fire review are separate duties.",
      },
      {
        id: "where",
        prompt: "Where does ACP 2600SEG125 apply?",
        choices: [
          "On Panama Canal property, to the people who work there.",
          "To every elevator in the country.",
          "Only to door paint.",
          "Only to buildings outside Panama.",
        ],
        answer: 0,
        plain: "It is the Canal’s safety rule. A new elevator on Canal property is inspected to ANSI A17.1. That does not make A17.1 the national DGNTI book.",
      },
      {
        id: "fire-q",
        prompt: "Who reviews the building project for fire?",
        choices: [
          "The fire service, through DINASEPI.",
          "DGNTI, as if it were the fire brigade.",
          "The Canal Authority, for every city.",
          "Nobody.",
        ],
        answer: 0,
        plain: "DINASEPI reviews projects. NFPA 101:2003 has been used in that review. It is not the product standard.",
      },
      {
        id: "mix",
        prompt: "A downtown Panama City job is specified only as ANSI A17.1. What is missing?",
        choices: [
          "The DGNTI text, unless this job is actually on Canal property under 2600SEG125.",
          "Nothing. A17.1 is the national book everywhere.",
          "Only the paint colour.",
          "RTD 458.",
        ],
        answer: 0,
        plain: "A17.1 enters through the Canal rule, on Canal property. A city job still needs the Panamanian text.",
      },
    ],
  ),
  country(
    "paraguay",
    "Paraguay",
    "INTN",
    [
      {
        id: "np",
        code: "NP 45 001 10",
        title: "Accessibility, including the elevator",
        statute:
          "NP 45 001 10, second edition, September 2020, is the Paraguayan standard on accessibility of the built environment. It says elevators must meet Mercosur NM 313.",
        plain:
          "For an accessible elevator in Paraguay, name NP 45 001 10 and NM 313. The national number points at the Mercosur accessibility text. It does not replace it, and the Mercosur text does not erase the Paraguayan number.",
        why: "Both numbers belong on the drawing.",
      },
      {
        id: "nm",
        code: "NM 207 and NM 267",
        title: "The construction texts INTN still has to be checked against",
        statute:
          "Mercosur NM 207 is the electric passenger-elevator construction text. NM 267 is the hydraulic text. INTN is the body that decides which edition is the Paraguayan standard in force.",
        plain:
          "Ask INTN which edition is in force for this drive. Electric and hydraulic are different NM numbers. Do not write ‘Mercosur’ with no number.",
        why: "The drive picks the NM. INTN picks the edition Paraguay is using.",
      },
    ],
    [
      {
        id: "access",
        prompt: "Which Paraguayan standard sends you to NM 313 for the elevator?",
        choices: [
          "NP 45 001 10.",
          "NM 207, which is the electric construction book.",
          "A brochure with no number.",
          "There is no Paraguayan accessibility text.",
        ],
        answer: 0,
        plain: "NP 45 001 10 is the accessibility standard. Elevators under it must meet NM 313.",
      },
      {
        id: "electric",
        prompt: "Which Mercosur text is the electric passenger elevator?",
        choices: ["NM 207.", "NM 267.", "NM 313.", "NP 45 001 10."],
        answer: 0,
        plain: "NM 207 is electric. NM 267 is hydraulic. NM 313 is the accessibility text NP 45 001 10 points to.",
      },
      {
        id: "body",
        prompt: "NM 313, through NP 45 001 10, is the rule for what?",
        choices: [
          "An accessible elevator.",
          "The construction of an electric passenger elevator.",
          "The construction of a hydraulic passenger elevator.",
          "Door paint only.",
        ],
        answer: 0,
        plain: "NP 45 001 10 sends the accessible elevator to NM 313. Electric construction is NM 207. Hydraulic construction is NM 267.",
      },
      {
        id: "blank",
        prompt: "A spec says ‘Mercosur compliant’ for a hydraulic elevator in Paraguay. What is missing?",
        choices: [
          "NM 267, the INTN edition, and NP 45 001 10 if accessibility applies.",
          "Nothing. The word Mercosur is the book.",
          "Only the paint colour.",
          "NM 207, because every drive is electric.",
        ],
        answer: 0,
        plain: "Hydraulic is NM 267. Accessibility adds NP 45 001 10 and NM 313. INTN’s edition still has to be named.",
      },
    ],
  ),
  country(
    "peru",
    "Peru",
    "INACAL",
    [
      {
        id: "rne",
        code: "Reglamento Nacional de Edificaciones",
        title: "The building regulation",
        statute:
          "The Reglamento Nacional de Edificaciones is mandatory for public bodies and for private people who design or build in Peru. It is the building regulation. It is not, by itself, a product standard for the elevator machine.",
        plain:
          "Every building job is under the RNE. The elevator still needs the rule inside that regulation, and the product standard, named separately.",
        why: "A building regulation and a machine standard answer different questions.",
      },
      {
        id: "a120",
        code: "Norma A.120",
        title: "Universal accessibility in buildings",
        statute:
          "Norma A.120, Accesibilidad Universal en Edificaciones, is part of the RNE. It was approved by Resolución Ministerial 072-2019-VIVIENDA and later updated. It is the accessibility book for the building, including the routes a person uses to reach an elevator.",
        plain:
          "If the question is whether the building is accessible, A.120 is the Peruvian rule. It sits inside the RNE. It does not become a substitute for a signage standard or for the machine standard.",
        why: "Accessibility of the building is A.120. The buttons are a further text.",
      },
      {
        id: "ntp",
        code: "NTP 873.001:2018",
        title: "Accessible signs, including the elevator buttons",
        statute:
          "NTP 873.001:2018, from INACAL, covers accessible signage in buildings. For elevators it asks for buttons with large characters, raised numbers and braille, between 0.90 m and 1.35 m, and a raised floor number by the door.",
        plain:
          "The button and the floor number are this NTP. A.120 is the building’s accessibility rule. Name both when both apply.",
        why: "INACAL writes the NTP. The housing ministry writes A.120. They are not the same office.",
      },
    ],
    [
      {
        id: "building",
        prompt: "Which text is mandatory for designing or building in Peru?",
        choices: [
          "The Reglamento Nacional de Edificaciones.",
          "A brochure with no Peruvian number.",
          "Only a foreign product standard.",
          "NTP 873.001, used as the whole building code.",
        ],
        answer: 0,
        plain: "The RNE is the building regulation. It is mandatory for public and private work.",
      },
      {
        id: "access",
        prompt: "Which rule is universal accessibility in the building?",
        choices: ["Norma A.120.", "NTP 873.001:2018 alone.", "There is no accessibility rule.", "The maintenance log."],
        answer: 0,
        plain: "A.120 is the accessibility norm inside the RNE. NTP 873.001 is the signage standard, including elevator buttons.",
      },
      {
        id: "buttons",
        prompt: "Where do accessible elevator buttons sit under NTP 873.001:2018?",
        choices: [
          "Between 0.90 m and 1.35 m, with large type, raised numbers and braille.",
          "Anywhere the factory prefers.",
          "Only in braille, with no height.",
          "The standard does not mention elevators.",
        ],
        answer: 0,
        plain: "Buttons are 0.90 m to 1.35 m, with large characters, relief and braille. The floor number by the door is in relief.",
      },
      {
        id: "who",
        prompt: "Where does Norma A.120 sit?",
        choices: [
          "Inside the Reglamento Nacional de Edificaciones.",
          "In place of the Reglamento Nacional de Edificaciones.",
          "Only as a voluntary brochure, outside the building regulation.",
          "As a replacement for NTP 873.001:2018.",
        ],
        answer: 0,
        plain: "A.120 is the accessibility norm inside the RNE. NTP 873.001:2018 is the signage standard, including the elevator buttons.",
      },
    ],
  ),
  country(
    "uruguay",
    "Uruguay",
    "UNIT",
    [
      {
        id: "nm-207",
        code: "UNIT-NM 207:1999",
        title: "Electric passenger elevators",
        statute:
          "UNIT lists UNIT-NM 207:1999 as in force: safety for the construction and installation of electric passenger elevators. The Uruguayan number is UNIT-NM, not a bare Mercosur reference.",
        plain:
          "For an electric passenger elevator, write UNIT-NM 207:1999. UNIT’s own list still shows it as current. Do not drop the UNIT prefix.",
        why: "The prefix says Uruguay adopted that Mercosur text.",
      },
      {
        id: "nm-267",
        code: "UNIT-NM 267:2001",
        title: "Hydraulic passenger elevators",
        statute:
          "UNIT lists UNIT-NM 267:2001 as in force: safety for the construction and installation of hydraulic passenger elevators.",
        plain:
          "Hydraulic is UNIT-NM 267:2001. Electric is UNIT-NM 207:1999. The drive chooses the number.",
        why: "One UNIT catalog entry does not cover both drives.",
      },
      {
        id: "nm-195",
        code: "UNIT-NM 195:1999",
        title: "Escalators and moving walks",
        statute:
          "UNIT lists UNIT-NM 195:1999 as in force for escalators and moving walks. UNIT-NM 196:1999 covers T-profile guides for cars and counterweights, not the escalator.",
        plain:
          "An escalator is UNIT-NM 195:1999. A guide rail is UNIT-NM 196:1999. Neither number is the passenger-elevator book.",
        why: "The machine in the title has to match the machine in the shaft.",
      },
    ],
    [
      {
        id: "electric",
        prompt: "Which UNIT text is the electric passenger elevator?",
        choices: ["UNIT-NM 207:1999.", "UNIT-NM 267:2001.", "UNIT-NM 195:1999.", "A brochure with no UNIT number."],
        answer: 0,
        plain: "UNIT-NM 207:1999 is electric. UNIT still lists it as in force.",
      },
      {
        id: "hydraulic",
        prompt: "Which text is the hydraulic passenger elevator?",
        choices: ["UNIT-NM 267:2001.", "UNIT-NM 207:1999.", "UNIT-NM 196:1999.", "UNIT-NM 195:1999."],
        answer: 0,
        plain: "UNIT-NM 267:2001 is hydraulic. 196 is the guide rail. 195 is the escalator.",
      },
      {
        id: "prefix",
        prompt: "A spec says ‘NM 207’ with no UNIT prefix. What is missing in Uruguay?",
        choices: [
          "The UNIT adoption, written UNIT-NM 207:1999.",
          "Nothing. Mercosur initials are the Uruguayan edition.",
          "Only the paint colour.",
          "The escalator number.",
        ],
        answer: 0,
        plain: "UNIT-NM is the Uruguayan number. The bare NM does not say Uruguay’s edition.",
      },
      {
        id: "body",
        prompt: "What does UNIT-NM 196:1999 cover?",
        choices: [
          "T-profile guides for the car and the counterweight.",
          "Electric passenger elevators.",
          "Hydraulic passenger elevators.",
          "Escalators and moving walks.",
        ],
        answer: 0,
        plain: "UNIT-NM 196:1999 is the guide. Electric is 207:1999. Hydraulic is 267:2001. Escalators are 195:1999.",
      },
    ],
  ),
  country(
    "venezuela",
    "Venezuela",
    "FONDONORMA",
    [
      {
        id: "covenin-621",
        code: "COVENIN 621-1:2002",
        title: "Electric passenger elevators",
        statute:
          "COVENIN 621-1:2002 is the national code for electric passenger elevators. It sets safety rules for construction and installation, to protect people and objects during use, maintenance and emergency operation. FONDONORMA published it.",
        plain:
          "A new electric passenger elevator in Venezuela is COVENIN 621-1:2002. It is not the freight code, and it is not a foreign number with a Venezuelan cover.",
        why: "The part number is the passenger machine.",
      },
      {
        id: "covenin-623",
        code: "COVENIN 623:1997",
        title: "Freight elevators",
        statute:
          "COVENIN 623:1997 is the national code for freight elevators. It excludes hydraulic freight elevators and sidewalk elevators. It covers construction, installation, operation, tests and maintenance.",
        plain:
          "Freight, other than hydraulic and sidewalk machines, is 623:1997. People riding as passengers belong in 621-1:2002, not in the freight code.",
        why: "The load decides the code. A person who rides is not freight.",
      },
    ],
    [
      {
        id: "passenger",
        prompt: "Which code is an electric passenger elevator in Venezuela?",
        choices: [
          "COVENIN 621-1:2002.",
          "COVENIN 623:1997.",
          "A brochure with no COVENIN number.",
          "There is no national passenger code.",
        ],
        answer: 0,
        plain: "621-1:2002 is the electric passenger code, including use, maintenance and emergency operation.",
      },
      {
        id: "freight",
        prompt: "Which code is a freight elevator, and what does it leave out?",
        choices: [
          "COVENIN 623:1997. It leaves out hydraulic freight elevators and sidewalk elevators.",
          "COVENIN 621-1:2002, which is the passenger code.",
          "623 covers every machine, including sidewalk elevators.",
          "There is no freight code.",
        ],
        answer: 0,
        plain: "623:1997 is freight, not hydraulic freight, and not a sidewalk elevator. It includes construction, operation, tests and maintenance.",
      },
      {
        id: "ride",
        prompt: "People will ride in the car. Which code is the wrong one to specify alone?",
        choices: [
          "COVENIN 623:1997, the freight code.",
          "COVENIN 621-1:2002.",
          "Neither. Passenger and freight are the same code.",
          "The door-paint specification.",
        ],
        answer: 0,
        plain: "Riders are the passenger code, 621-1:2002. 623 is freight.",
      },
      {
        id: "body",
        prompt: "What does COVENIN 621-1:2002 cover besides construction?",
        choices: [
          "Use, maintenance and emergency operation.",
          "Only freight elevators.",
          "Only sidewalk elevators.",
          "Only the colour of the doors.",
        ],
        answer: 0,
        plain: "621-1:2002 protects people and objects in use, maintenance and emergency operation. Freight, other than hydraulic and sidewalk machines, is 623:1997.",
      },
    ],
  ),
];

export const LATAM_BY_SLUG = Object.fromEntries(LATAM_COUNTRIES.map((item) => [item.slug, item])) as Record<
  string,
  LatamCountry
>;
