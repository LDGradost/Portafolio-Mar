import Page01Cover from "./Page01Cover";
import Page02Index from "./Page02Index";
import Page03Challenge from "./Page03Challenge";
import Page04Visioning from "./Page04Visioning";
import Page05ZeroBased from "./Page05ZeroBased";
import Page06Research from "./Page06Research";
import Page07ResearchToDesign from "./Page07ResearchToDesign";
import Page08Outcomes from "./Page08Outcomes";

import Page09BanqueroChallenge from "./Page09BanqueroChallenge";
import Page10ResearchFramework from "./Page10ResearchFramework";
import Page11PrinciplesMatrix from "./Page11PrinciplesMatrix";
import Page12Desirability from "./Page12Desirability";
import Page13BanqueroReflection from "./Page13BanqueroReflection";
import Page14BehaviouralChallenge from "./Page14BehaviouralChallenge";
import Page15Diagnosis from "./Page15Diagnosis";
import Page16Intervention from "./Page16Intervention";
import Page17Pilot from "./Page17Pilot";
import Page18AlimarketEcosystem from "./Page18AlimarketEcosystem";
import Page19AlimarketResearch from "./Page19AlimarketResearch";
import Page20AlimarketService from "./Page20AlimarketService";
import Page21Closing from "./Page21Closing";

import { AlimarketCover, BanqueroCover, BehavioralCover, MibancoCover } from "./SectionCover";
import type { SectionKey } from "../content";

// Frames render in this order in the viewer and the PDF export. `section` drives the top navigation;
// section covers carry no folio, so slide numbers 03–21 and the index page ranges stay valid.
export type Section = "home" | SectionKey;
export const frames: {
  id: string;
  name: string;
  section: Section;
  Component: () => React.JSX.Element;
}[] = [
  { id: "p01", section: "home", name: "01 — Portfolio Cover", Component: Page01Cover },
  { id: "p02", section: "home", name: "02 — Portfolio Index", Component: Page02Index },
  { id: "s-mibanco", section: "mibanco", name: "Section — 01 Mibanco", Component: MibancoCover },
  {
    id: "p03",
    section: "mibanco",
    name: "03 — Mibanco: The Challenge",
    Component: Page03Challenge,
  },
  {
    id: "p04",
    section: "mibanco",
    name: "04 — Mibanco: Strategic Visioning",
    Component: Page04Visioning,
  },
  {
    id: "p05",
    section: "mibanco",
    name: "05 — Mibanco: Zero-Based Design",
    Component: Page05ZeroBased,
  },
  {
    id: "p06",
    section: "mibanco",
    name: "06 — Mibanco: Design Research",
    Component: Page06Research,
  },
  {
    id: "p07",
    section: "mibanco",
    name: "07 — Mibanco: Research into Design",
    Component: Page07ResearchToDesign,
  },
  {
    id: "p08",
    section: "mibanco",
    name: "08 — Mibanco: Outcomes & Reflection",
    Component: Page08Outcomes,
  },
  {
    id: "s-banquero",
    section: "banquero",
    name: "Section — 02 Banquero Digital",
    Component: BanqueroCover,
  },
  {
    id: "p09",
    section: "banquero",
    name: "09 — Banquero Digital: The Challenge",
    Component: Page09BanqueroChallenge,
  },
  {
    id: "p10",
    section: "banquero",
    name: "10 — Banquero Digital: Conversational Research Framework",
    Component: Page10ResearchFramework,
  },
  {
    id: "p11",
    section: "banquero",
    name: "11 — Banquero Digital: Experience Principles Matrix",
    Component: Page11PrinciplesMatrix,
  },
  {
    id: "p12",
    section: "banquero",
    name: "12 — Banquero Digital: Desirability Traffic-Light Framework",
    Component: Page12Desirability,
  },
  {
    id: "p13",
    section: "banquero",
    name: "13 — Banquero Digital: Synthesis & Reflection",
    Component: Page13BanqueroReflection,
  },
  {
    id: "s-behavioral",
    section: "behavioral",
    name: "Section — 03 Behavioral Design",
    Component: BehavioralCover,
  },
  {
    id: "p14",
    section: "behavioral",
    name: "14 — Behavioral Design: The Challenge",
    Component: Page14BehaviouralChallenge,
  },
  {
    id: "p15",
    section: "behavioral",
    name: "15 — Behavioral Design: Behavioural Diagnosis",
    Component: Page15Diagnosis,
  },
  {
    id: "p16",
    section: "behavioral",
    name: "16 — Behavioral Design: Intervention Design",
    Component: Page16Intervention,
  },
  {
    id: "p17",
    section: "behavioral",
    name: "17 — Behavioral Design: Pilot, Early Outcomes & Reflection",
    Component: Page17Pilot,
  },
  {
    id: "s-alimarket",
    section: "alimarket",
    name: "Section — 04 Alimarket",
    Component: AlimarketCover,
  },
  {
    id: "p18",
    section: "alimarket",
    name: "18 — Alimarket: The Ecosystem Challenge",
    Component: Page18AlimarketEcosystem,
  },
  {
    id: "p19",
    section: "alimarket",
    name: "19 — Alimarket: Research & Human Insights",
    Component: Page19AlimarketResearch,
  },
  {
    id: "p20",
    section: "alimarket",
    name: "20 — Alimarket: Service Design & Implementation",
    Component: Page20AlimarketService,
  },
  {
    id: "p21",
    section: "alimarket",
    name: "21 — Alimarket Outcomes & Portfolio Closing",
    Component: Page21Closing,
  },
];
