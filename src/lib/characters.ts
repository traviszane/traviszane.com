import spriteWriter from "@/assets/sprite-writer.png";
import spriteMarketer from "@/assets/sprite-marketer.png";
import spriteCreator from "@/assets/sprite-creator.png";

export type CharacterId = "writer" | "marketer" | "creator";

export interface Chapter {
  title: string;
  meta: string;
  description: string;
  tags: string[];
}

export type SkillTier = "S-TIER" | "EXPERT" | "SIGNATURE";

export interface Skill {
  label: string;
  tier: SkillTier;
}

export interface Character {
  id: CharacterId;
  name: string;
  className: string;
  tagline: string;
  blurb: string;
  sprite: string;
  colorVar: string;
  stats: { label: string; value: number }[];
  skills: Skill[];
  abilities: string[];
  chapters: Chapter[];
}

export const characters: Record<CharacterId, Character> = {
  writer: {
    id: "writer",
    name: "The Scribe",
    className: "Writer",
    tagline: "Master of syntax and narrative architecture.",
    blurb:
      "Long-form essays, technical docs, and brand voice work for teams that take language seriously. The Scribe turns tangled ideas into prose that reads like a current — quiet, deliberate, hard to put down.",
    sprite: spriteWriter,
    colorVar: "--writer",
    stats: [
      { label: "Clarity", value: 92 },
      { label: "Voice", value: 88 },
      { label: "Range", value: 80 },
      { label: "Depth", value: 86 },
    ],
    skills: [
      { label: "Narrative", tier: "S-TIER" },
      { label: "Clarity", tier: "SIGNATURE" },
      { label: "Voice", tier: "EXPERT" },
    ],
    abilities: ["Long-form essays", "Brand voice", "UX writing", "DevRel"],
    chapters: [
      {
        title: "The Syntax of Silence",
        meta: "Chapter I — Essay",
        description: "A long essay on negative space in technical documentation.",
        tags: ["Essay", "Editorial"],
      },
      {
        title: "Onboarding Rewrite — Fintech SaaS",
        meta: "Chapter II — Product",
        description: "Cut activation friction by rewriting 40+ in-app moments.",
        tags: ["UX Writing", "Product"],
      },
      {
        title: "Field Notes from a Quiet API",
        meta: "Chapter III — Series",
        description: "Developer storytelling series read by 80k engineers.",
        tags: ["Series", "DevRel"],
      },
      {
        title: "A Brand Voice Playbook",
        meta: "Chapter IV — Brand",
        description: "End-to-end voice guidelines, lexicon, and examples.",
        tags: ["Brand", "Strategy"],
      },
    ],
  },
  marketer: {
    id: "marketer",
    name: "The Strategist",
    className: "Marketer",
    tagline: "Architect of growth loops and brand positioning.",
    blurb:
      "Campaigns, lifecycle, and positioning that compound — not vanity metrics. The Strategist treats marketing as a system: measurable inputs, honest outputs, no theater.",
    sprite: spriteMarketer,
    colorVar: "--marketer",
    stats: [
      { label: "Strategy", value: 90 },
      { label: "Growth", value: 95 },
      { label: "Reach", value: 86 },
      { label: "Positioning", value: 92 },
    ],
    skills: [
      { label: "Strategy", tier: "S-TIER" },
      { label: "Positioning", tier: "SIGNATURE" },
      { label: "Growth", tier: "EXPERT" },
    ],
    abilities: ["GTM strategy", "Lifecycle", "Positioning", "Performance"],
    chapters: [
      {
        title: "Hyperloop Launch Campaign",
        meta: "Quest I — Launch",
        description: "0 → 25k waitlist in six weeks with a single thesis.",
        tags: ["Campaign", "Launch"],
      },
      {
        title: "Lifecycle Overhaul",
        meta: "Quest II — Retention",
        description: "Re-architected the activation funnel; +38% trial→paid.",
        tags: ["Lifecycle", "CRM"],
      },
      {
        title: "Category Reframe — DevTools",
        meta: "Quest III — Positioning",
        description: "Repositioned a feature as a category. Press, sales, and pricing followed.",
        tags: ["Positioning", "Strategy"],
      },
      {
        title: "Founder POV Engine",
        meta: "Quest IV — Content",
        description: "Turned a quiet CEO into 200k+ monthly impressions.",
        tags: ["Content", "Social"],
      },
    ],
  },
  creator: {
    id: "creator",
    name: "The Maker",
    className: "Creator",
    tagline: "Polymath building digital experiences end-to-end.",
    blurb:
      "Side projects, visual identity, and small interactive worlds shipped on the open web. The Maker draws the line between a moodboard and a shippable artifact, then crosses it.",
    sprite: spriteCreator,
    colorVar: "--creator",
    stats: [
      { label: "Vision", value: 96 },
      { label: "Craft", value: 88 },
      { label: "Range", value: 84 },
      { label: "Motion", value: 87 },
    ],
    skills: [
      { label: "Vision", tier: "S-TIER" },
      { label: "Craft", tier: "SIGNATURE" },
      { label: "Range", tier: "EXPERT" },
    ],
    abilities: ["Creative coding", "Visual identity", "Motion", "Web direction"],
    chapters: [
      {
        title: "Void.js — Tiny Canvas Library",
        meta: "Artifact I — OSS",
        description: "A 4kb creative-coding helper. 1.2k GitHub stars.",
        tags: ["Code", "OSS"],
      },
      {
        title: "Field Recorder",
        meta: "Artifact II — Audio",
        description: "Generative audio sketches released as a monthly drop.",
        tags: ["Sound", "Audio"],
      },
      {
        title: "Slow Web Zine",
        meta: "Artifact III — Web",
        description: "An interactive editorial site about computing slowness.",
        tags: ["Web", "Editorial"],
      },
      {
        title: "Glyph — Pixel Type Family",
        meta: "Artifact IV — Type",
        description: "A 6-weight bitmap typeface used in 30+ indie games.",
        tags: ["Type", "Design"],
      },
    ],
  },
};

export const characterList: Character[] = [
  characters.writer,
  characters.marketer,
  characters.creator,
];
