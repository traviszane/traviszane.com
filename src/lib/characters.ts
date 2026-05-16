import spriteWriter from "@/assets/sprite-writer.png";
import spriteMarketer from "@/assets/sprite-marketer.png";
import spriteCreator from "@/assets/sprite-creator.png";

export type CharacterId = "writer" | "marketer" | "creator";

export interface QuestSection {
  heading: string;
  body: string;
}

export interface Chapter {
  slug?: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  goal?: string;
  outcome?: string;
  details?: {
    client?: string;
    role?: string;
    timeframe?: string;
    summary: string;
    sections: QuestSection[];
    metrics?: { label: string; value: string }[];
  };
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
        slug: "hyperloop-launch",
        title: "Hyperloop Launch Campaign",
        meta: "Quest I — Launch",
        description: "0 → 25k waitlist in six weeks with a single thesis.",
        tags: ["Campaign", "Launch"],
        goal: "Build a credible waitlist for an unproven category before public launch.",
        outcome: "25,000 signups in 6 weeks, 41% from organic referral, 3 inbound press features.",
        details: {
          client: "Hyperloop (stealth devtool)",
          role: "Fractional Head of Marketing",
          timeframe: "Q1 — Q2",
          summary:
            "A six-week sprint from blank doc to 25k waitlist. We replaced the standard 'coming soon' page with a single sharp thesis, then built every asset around defending it.",
          sections: [
            {
              heading: "Strategy",
              body: "Anchored on one contrarian claim about the category. Everything — landing page, founder posts, demo video — pointed at the same wedge. No 'features' page until week five.",
            },
            {
              heading: "Execution",
              body: "Shipped a manifesto-style landing page, a 90-second demo, and a 12-post founder narrative arc on X. Seeded with 30 hand-picked operators before any paid spend.",
            },
            {
              heading: "Results",
              body: "25,012 signups, 41% organic referral rate, covered in 3 industry newsletters, 2 podcast invites. Closed seed round inside the window.",
            },
          ],
          metrics: [
            { label: "Signups", value: "25,012" },
            { label: "Organic %", value: "41%" },
            { label: "Press hits", value: "3" },
            { label: "Weeks", value: "6" },
          ],
        },
      },
      {
        slug: "lifecycle-overhaul",
        title: "Lifecycle Overhaul",
        meta: "Quest II — Retention",
        description: "Re-architected the activation funnel; +38% trial→paid.",
        tags: ["Lifecycle", "CRM"],
        goal: "Lift trial-to-paid conversion without changing pricing or product surface area.",
        outcome: "+38% trial→paid in 90 days, with a 22% drop in support volume.",
        details: {
          client: "Series-B SaaS",
          role: "Lifecycle lead",
          timeframe: "90 days",
          summary:
            "The activation funnel was leaking at three known seams. We rebuilt it as a single coherent narrative across in-app, email, and sales touch.",
          sections: [
            {
              heading: "Diagnosis",
              body: "Mapped every trial event to a job-to-be-done. Found 3 seams where users hit a decision point with no support.",
            },
            {
              heading: "Build",
              body: "Rewrote 14 lifecycle emails, added 6 in-app nudges tied to behavior, and re-cut the sales handoff trigger to fire on intent — not day count.",
            },
            {
              heading: "Results",
              body: "Trial→paid lifted 38% in 90 days. Support tickets in the first 7 days dropped 22%. Net new MRR per trial up 1.6x.",
            },
          ],
          metrics: [
            { label: "Trial→Paid", value: "+38%" },
            { label: "Support load", value: "-22%" },
            { label: "MRR/trial", value: "1.6x" },
          ],
        },
      },
      {
        slug: "category-reframe",
        title: "Category Reframe — DevTools",
        meta: "Quest III — Positioning",
        description: "Repositioned a feature as a category. Press, sales, and pricing followed.",
        tags: ["Positioning", "Strategy"],
        goal: "Escape a crowded feature comparison by naming and owning a new category.",
        outcome: "New category established; ACV +2.4x; 4 analyst mentions in 2 quarters.",
        details: {
          client: "Open-source devtool company",
          role: "Positioning lead",
          timeframe: "2 quarters",
          summary:
            "The product was being benchmarked against 6 incumbents on a feature checklist they would never win. We renamed the game.",
          sections: [
            {
              heading: "Reframe",
              body: "Wrote the category POV essay, defined the 4 capabilities that bound it, and gave it a name a buyer could repeat.",
            },
            {
              heading: "Rollout",
              body: "Pushed the language through the website, sales deck, pricing page, and a 6-post technical content arc. Briefed 4 analysts on the shape of the category.",
            },
            {
              heading: "Results",
              body: "ACV moved 2.4x as deals stopped being feature comparisons. 4 analyst mentions, 1 named report. Sales cycle shortened by 19 days on average.",
            },
          ],
          metrics: [
            { label: "ACV", value: "2.4x" },
            { label: "Analyst mentions", value: "4" },
            { label: "Cycle time", value: "-19d" },
          ],
        },
      },
      {
        slug: "founder-pov-engine",
        title: "Founder POV Engine",
        meta: "Quest IV — Content",
        description: "Turned a quiet CEO into 200k+ monthly impressions.",
        tags: ["Content", "Social"],
        goal: "Build a defensible founder voice without turning the CEO into a full-time creator.",
        outcome: "200k+ monthly impressions, 3 inbound investor intros, 11 enterprise leads in 90 days.",
        details: {
          client: "B2B infra startup",
          role: "Ghost strategist + editor",
          timeframe: "Ongoing",
          summary:
            "Built a sustainable POV engine: 90 minutes of CEO time per week produced 4 long posts, 1 essay, and a steady inbound channel.",
          sections: [
            {
              heading: "System",
              body: "One weekly recorded conversation. I edited the transcript into a long-form X post, an essay outline, and 3 reusable angles. CEO approves, ships.",
            },
            {
              heading: "Voice",
              body: "Resisted the urge to sound like a thread guy. Kept the cadence slow, the claims specific, the receipts attached.",
            },
            {
              heading: "Results",
              body: "200k+ monthly impressions inside one quarter. Inbound: 3 investor intros, 11 enterprise leads, 2 hires sourced from replies.",
            },
          ],
          metrics: [
            { label: "Impressions/mo", value: "200k+" },
            { label: "Inbound leads", value: "11" },
            { label: "Investor intros", value: "3" },
          ],
        },
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
  characters.marketer,
  characters.writer,
  characters.creator,
];
