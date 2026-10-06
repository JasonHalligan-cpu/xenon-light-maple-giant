export type SkillId =
  | "family-map"
  | "dutyholder"
  | "en81-20"
  | "en81-70"
  | "en81-73"
  | "en81-72"
  | "en81-76-purpose"
  | "en81-76-class"
  | "en81-76-modes"
  | "en81-76-building"
  | "en81-28"
  | "en81-31"
  | "existing"
  | "compare"
  | "asme-family"
  | "asme-duty"
  | "asme-base"
  | "asme-access"
  | "asme-phase1"
  | "asme-phase2"
  | "asme-oeo"
  | "asme-which"
  | "asme-run"
  | "asme-alarm"
  | "asme-existing"
  | "asme-compare";

export type StandardId =
  | "directive"
  | "loler"
  | "puwer"
  | "hswa"
  | "mhs"
  | "fire-safety"
  | "equality"
  | "building-regs"
  | "cdm"
  | "riddor"
  | "workplace"
  | "electricity"
  | "work-at-height"
  | "machinery"
  | "confined"
  | "pressure"
  | "en81-20"
  | "en81-21"
  | "en81-28"
  | "en81-31"
  | "en81-50"
  | "en81-58"
  | "en81-70"
  | "en81-71"
  | "en81-72"
  | "en81-73"
  | "en81-76"
  | "en81-77"
  | "en81-80"
  | "en81-82"
  | "part-b"
  | "part-m"
  | "a17-1"
  | "a17-2"
  | "a17-3"
  | "asme-phase1"
  | "asme-phase2"
  | "asme-oeo"
  | "asme-fsae"
  | "asme-ada"
  | "asme-ibc"
  | "asme-ahj";

export type CodeRegion = "eu" | "asme";

export type Skill = {
  id: SkillId;
  name: string;
  floor: string;
  blurb: string;
  relatedStandards: StandardId[];
  region?: CodeRegion;
};

export type Standard = {
  id: StandardId;
  code: string;
  title: string;
  everydayTitle: string;
  family: "law" | "base" | "people" | "fire" | "existing";
  featured?: boolean;
  oneLiner: string;
  statute: string;
  plain: string;
  remember: string[];
  related: StandardId[];
  region?: CodeRegion;
};

export type LessonSection = {
  heading: string;
  statute: string;
  plain: string;
  why: string;
};

export type Lesson = {
  id: string;
  title: string;
  kicker: string;
  minutes: number;
  skillIds: SkillId[];
  standardIds: StandardId[];
  featured?: boolean;
  summary: string;
  sections: LessonSection[];
  checkQuestionIds: string[];
  region?: CodeRegion;
};

export type Question = {
  id: string;
  skillId: SkillId;
  prompt: string;
  choices: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  statute: string;
  plain: string;
  why: string;
  region?: CodeRegion;
};

export type ScenarioBeat = {
  prompt: string;
  choices: { text: string; correct: boolean; feedback: string }[];
};

export type Scenario = {
  id: string;
  title: string;
  role: string;
  setting: string;
  skillIds: SkillId[];
  beats: ScenarioBeat[];
  debrief: string;
};
