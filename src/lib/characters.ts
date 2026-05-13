import spriteWriter from "@/assets/sprite-writer.png";
import spriteMarketer from "@/assets/sprite-marketer.png";
import spriteCreator from "@/assets/sprite-creator.png";

export type CharacterId = "writer" | "marketer" | "creator";

export interface Project {
  title: string;
  blurb: string;
  meta: string;
  tag: string;
}

export interface Character {
  id: CharacterId;
  classNum: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  sprite: string;
  accentClass: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  stats: { label: string; value: number }[];
  projects: Project[];
}

export const characters: Record<CharacterId, Character> = {
  writer: {
    id: "writer",
    classNum: "01",
    name: "Writer",
    title: "Words & Worlds",
    tagline: "Master of syntax and narrative architecture.",
    description:
      "Long-form essays, technical docs, and brand voice work for teams that take language seriously.",
    sprite: spriteWriter,
    accentClass: "writer",
    accentText: "text-writer",
    accentBorder: "border-writer/50",
    accentBg: "bg-writer/10",
    stats: [
      { label: "Clarity", value: 92 },
      { label: "Voice", value: 88 },
      { label: "Range", value: 80 },
    ],
    projects: [
      {
        title: "The Syntax of Silence",
        blurb: "A long essay on negative space in technical documentation.",
        meta: "2024 / Essay",
        tag: "Editorial",
      },
      {
        title: "Onboarding Rewrite — Fintech SaaS",
        blurb: "Cut activation friction by rewriting 40+ in-app moments.",
        meta: "2024 / UX Writing",
        tag: "Product",
      },
      {
        title: "Field Notes from a Quiet API",
        blurb: "Developer storytelling series read by 80k engineers.",
        meta: "2023 / Series",
        tag: "DevRel",
      },
      {
        title: "A Brand Voice Playbook",
        blurb: "End-to-end voice guidelines, lexicon, and examples.",
        meta: "2023 / Brand",
        tag: "Strategy",
      },
    ],
  },
  marketer: {
    id: "marketer",
    classNum: "02",
    name: "Marketer",
    title: "Growth & Signal",
    tagline: "Architect of growth loops and brand positioning.",
    description:
      "Campaigns, lifecycle, and positioning that compound — not vanity metrics.",
    sprite: spriteMarketer,
    accentClass: "marketer",
    accentText: "text-marketer",
    accentBorder: "border-marketer/50",
    accentBg: "bg-marketer/10",
    stats: [
      { label: "Strategy", value: 90 },
      { label: "Growth", value: 95 },
      { label: "Reach", value: 86 },
    ],
    projects: [
      {
        title: "Hyperloop Launch Campaign",
        blurb: "0 → 25k waitlist in six weeks with a single thesis.",
        meta: "2024 / Campaign",
        tag: "Launch",
      },
      {
        title: "Lifecycle Overhaul",
        blurb: "Re-architected the activation funnel; +38% trial→paid.",
        meta: "2024 / Lifecycle",
        tag: "Retention",
      },
      {
        title: "Category Reframe — DevTools",
        blurb: "Repositioned a feature as a category. Press, sales, and pricing followed.",
        meta: "2023 / Positioning",
        tag: "Strategy",
      },
      {
        title: "Founder POV Engine",
        blurb: "Turned a quiet CEO into 200k+ monthly impressions.",
        meta: "2023 / Content",
        tag: "Social",
      },
    ],
  },
  creator: {
    id: "creator",
    classNum: "03",
    name: "Creator",
    title: "Make & Ship",
    tagline: "Polymath building digital experiences end-to-end.",
    description:
      "Side projects, visual identity, and small interactive worlds shipped on the open web.",
    sprite: spriteCreator,
    accentClass: "creator",
    accentText: "text-creator",
    accentBorder: "border-creator/50",
    accentBg: "bg-creator/10",
    stats: [
      { label: "Vision", value: 96 },
      { label: "Craft", value: 88 },
      { label: "Range", value: 84 },
    ],
    projects: [
      {
        title: "Void.js — Tiny Canvas Library",
        blurb: "A 4kb creative-coding helper. 1.2k GitHub stars.",
        meta: "2024 / OSS",
        tag: "Code",
      },
      {
        title: "Field Recorder",
        blurb: "Generative audio sketches released as a monthly drop.",
        meta: "2024 / Audio",
        tag: "Sound",
      },
      {
        title: "Slow Web Zine",
        blurb: "An interactive editorial site about computing slowness.",
        meta: "2023 / Web",
        tag: "Editorial",
      },
      {
        title: "Glyph — Pixel Type Family",
        blurb: "A 6-weight bitmap typeface used in 30+ indie games.",
        meta: "2022 / Type",
        tag: "Design",
      },
    ],
  },
};

export const characterList = [
  characters.writer,
  characters.marketer,
  characters.creator,
];
