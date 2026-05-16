import spriteWriter from "@/assets/sprite-writer.png";
import spriteMarketer from "@/assets/sprite-marketer.png";
import spriteCreator from "@/assets/sprite-creator.png";
import spriteWriterDark from "@/assets/sprite-writer-dark.png";
import spriteMarketerDark from "@/assets/sprite-marketer-dark.png";
import spriteCreatorDark from "@/assets/sprite-creator-dark.png";
import spriteMarketerVideoDark from "@/assets/sprite-marketer-dark.mp4";
import spriteMarketerVideoLight from "@/assets/sprite-marketer-light.mp4";
import spriteWriterVideoLight from "@/assets/sprite-writer-light.mp4";
import spriteWriterVideoDark from "@/assets/sprite-writer-dark.mp4";
import spriteCreatorVideoLight from "@/assets/sprite-creator-light.mp4";
import spriteCreatorVideoDark from "@/assets/sprite-creator-dark.mp4";

export type CharacterId = "writer" | "marketer" | "creator";

export interface QuestSection {
  heading: string;
  body: string;
}

export interface Chapter {
  slug?: string;
  href?: string;
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

export type SkillTier = "S-TIER" | "A-TIER";

export interface Skill {
  label: string;
  tier: SkillTier;
}

export interface Stat {
  label: string;
  value: number;
}

export interface XPStat {
  label: string;
  value: string;
}

export interface Character {
  id: CharacterId;
  name: string;
  className: string;
  tagline: string;
  blurb: string;
  sprite: string;
  spriteDark: string;
  painterlyVideo?: string;
  painterlyVideoDark?: string;
  colorVar: string;
  xp: XPStat[];
  skills: Skill[];
  stats: Stat[];
  abilities: string[];
  chapters: Chapter[];
}

export const characters: Record<CharacterId, Character> = {
  writer: {
    id: "writer",
    name: "The Writer",
    className: "Storyteller",
    tagline: "Master of syntax and narrative.",
    blurb:
      "Essays, fiction, philosophy: the form changes, the insight grows. The Writer transforms tangled ideas into prose that reads like a current—quiet, deliberate, and hard to put down. He seeks truth in modern life whilst honoring its shapeshifting nature.",
    sprite: spriteWriter,
    spriteDark: spriteWriterDark,
    painterlyVideo: spriteWriterVideoLight,
    painterlyVideoDark: spriteWriterVideoDark,
    colorVar: "--writer",
    xp: [
      { label: "Stories written", value: "20+" },
      { label: "Publications shipped", value: "5" },
      { label: "Awards granted", value: "5" },
      { label: "Novels drafted", value: "2" },
    ],
    skills: [
      { label: "Voice", tier: "S-TIER" },
      { label: "Narrative", tier: "S-TIER" },
      { label: "World-Building", tier: "A-TIER" },
    ],
    stats: [
      { label: "Voice", value: 98 },
      { label: "Narrative", value: 94 },
      { label: "World-Building", value: 91 },
    ],
    abilities: ["Essay", "Memoir", "Literary Fiction", "Editing", "Newsletter"],
    chapters: [
      {
        href: "https://example.com/essays/syntax-of-silence",
        title: "The Syntax of Silence",
        meta: "Chapter I — Essay",
        description: "A long essay on negative space in technical documentation.",
        tags: ["Essay", "Editorial"],
        goal: "Argue that what docs leave out is as important as what they say.",
        outcome: "Featured in two engineering newsletters; cited in 4 internal style guides.",
      },
      {
        slug: "onboarding-rewrite",
        title: "Onboarding Rewrite — Fintech SaaS",
        meta: "Chapter II — Product",
        description: "Cut activation friction by rewriting 40+ in-app moments.",
        tags: ["UX Writing", "Product"],
        goal: "Reduce drop-off in the first 7 days without changing the product.",
        outcome: "Activation +27%; support tickets -31% in the first session.",
        details: {
          client: "Fintech SaaS, Series B",
          role: "UX writing lead",
          timeframe: "8 weeks",
          summary:
            "Audited every word a new user encountered in the first 7 days, then rewrote the 40+ moments that were costing activation.",
          sections: [
            { heading: "Audit", body: "Mapped 40+ in-app strings against the JTBD they served. Tagged each as clarifying, blocking, or noise." },
            { heading: "Rewrite", body: "Cut every modal that wasn't load-bearing. Reframed errors as next actions. Standardized verb tense across the funnel." },
            { heading: "Results", body: "Activation +27%, first-session tickets -31%, NPS at day 14 up 9 points." },
          ],
          metrics: [
            { label: "Activation", value: "+27%" },
            { label: "Tickets", value: "-31%" },
            { label: "NPS Δ", value: "+9" },
          ],
        },
      },
      {
        href: "https://example.com/series/field-notes",
        title: "Field Notes from a Quiet API",
        meta: "Chapter III — Series",
        description: "Developer storytelling series read by 80k engineers.",
        tags: ["Series", "DevRel"],
        goal: "Make a niche infra product feel inevitable to senior engineers.",
        outcome: "80k+ readers across 12 posts; 6 community PRs sourced from the series.",
      },
      {
        slug: "brand-voice-playbook",
        title: "A Brand Voice Playbook",
        meta: "Chapter IV — Brand",
        description: "End-to-end voice guidelines, lexicon, and examples.",
        tags: ["Brand", "Strategy"],
        goal: "Give a 40-person team one defensible voice across every surface.",
        outcome: "Adopted across product, marketing, and support; cut copy review cycles in half.",
        details: {
          client: "Climate-tech scaleup",
          role: "Voice strategist",
          timeframe: "6 weeks",
          summary:
            "Wrote a working voice playbook the team would actually use — principles, lexicon, do/don'ts, and 30+ before/after examples drawn from their own surfaces.",
          sections: [
            { heading: "Principles", body: "Four voice principles, each with a tension it resolves and a failure mode it prevents." },
            { heading: "Lexicon", body: "On-brand and off-brand word lists, with rationale. No empty rules." },
            { heading: "Examples", body: "30+ before/after rewrites pulled from real product, marketing, and support copy." },
          ],
          metrics: [
            { label: "Surfaces", value: "All" },
            { label: "Review time", value: "-50%" },
          ],
        },
      },
    ],
  },
  marketer: {
    id: "marketer",
    name: "The Marketer",
    className: "Tactician",
    tagline: "Architect of branding and growth.",
    blurb:
      "Campaigns and positioning built to compound, not just perform. The Marketer treats growth as a system: clear messaging, viral outputs, and data-driven storytelling. He is obsessed with making complex technology legible to the humans its meant to serve.",
    sprite: spriteMarketer,
    spriteDark: spriteMarketerDark,
    painterlyVideo: spriteMarketerVideoLight,
    painterlyVideoDark: spriteMarketerVideoDark,
    colorVar: "--marketer",
    xp: [
      { label: "Campaigns planned", value: "100+" },
      { label: "Years in marketing", value: "10+" },
      { label: "Markets reached", value: "12+" },
      { label: "Products launched", value: "10+" },
    ],
    skills: [
      { label: "Strategy", tier: "S-TIER" },
      { label: "Positioning", tier: "S-TIER" },
      { label: "Growth", tier: "A-TIER" },
    ],
    stats: [
      { label: "Strategy", value: 97 },
      { label: "Positioning", value: 95 },
      { label: "Growth", value: 92 },
    ],
    abilities: ["GTM Strategy", "Product", "Content", "Lifecycle", "Performance"],
    chapters: [
      {
        href: "https://lagrange.dev/blog/turing-roulette-recap-humanity",
        title: "GTM for AI Product DeepProve",
        meta: "Quest I — Launch",
        description: "Launched verifiable AI to the world. Made it a game first.",
        tags: ["GTM Strategy", "Campaign", "Product Launch"],
        goal: "Introduce a technically complex AI product to developer and mainstream audiences without losing either.",
        outcome: "144,309 unique users generated 3.75M+ AI proofs. DeepProve launch hit 1.7M views. 30+ enterprise, AI, and finance partners secured.",
      },
      {
        href: "https://x.com/LagrangeFndn",
        title: "$LA Token Launch: Zero to $500M+",
        meta: "Quest II — Token Launch",
        description: "Took a token from concept to nine-figure valuation at launch.",
        tags: ["Token Launch", "GTM", "Partnerships", "PR"],
        goal: "Build the narrative, community, and distribution infrastructure to launch $LA at scale — coordinating PR, exchange, and financial partners across a single rollout.",
        outcome: "$500M+ valuation at launch. 71K+ airdrop registrations. 1.7M+ views across retail-focused launch content. Coordinated cross-functional GTM across PR, exchange, and financial partners simultaneously.",
      },
      {
        href: "https://x.com/lagrangedev",
        title: "Lagrange Social Growth: 30K → 100K+",
        meta: "Quest III — Social Growth",
        description: "340% YoY growth. Built category authority in verifiable AI.",
        tags: ["Social Growth", "Content", "Brand"],
        goal: "Grow @lagrangedev from a niche developer account into a recognized voice in AI and ZK.",
        outcome: "340% YoY follower growth, 635K+ average monthly impressions. Top mindshare in verifiable AI on X.",
      },
      {
        href: "https://x.com/OasisProtocol",
        title: "Oasis Rebrand: Privacy Layer → AI Stack",
        meta: "Quest IV — Rebrand",
        description: "Repositioned a blockchain project as infrastructure for the AI era.",
        tags: ["Rebrand", "Positioning", "Category Creation"],
        goal: "Escape the crowded L1 narrative and establish Oasis as the privacy layer for AI — a new category entirely.",
        outcome: "767% YoY social growth, 20K → 200K+ on X, 5M+ average monthly impressions, 40K+ Discord community.",
      },
      {
        href: "https://x.com/superlayerio",
        title: "Superlayer Thought Leadership: 9K → 100K+",
        meta: "Quest V — Thought Leadership",
        description: "Built brand authority for an ecosystem nobody had heard of yet.",
        tags: ["Thought Leadership", "Newsletter", "GTM"],
        goal: "Establish Superlayer and its portfolio projects (Unite, Joyride, Hotline) as credible consumer brands from cold start.",
        outcome: "481% social growth in six months. Thought leadership and newsletter strategy serving a 2M+ user base with 200K+ daily active users.",
      },
      {
        href: "https://x.com/rally_io",
        title: "Rally PR & Strategy: Fast Company Top 5",
        meta: "Quest VI — PR",
        description: "Turned a creator economy platform into an industry story.",
        tags: ["PR", "Content", "Social"],
        goal: "Build Rally's public narrative and press presence for a creator token platform in a skeptical market.",
        outcome: "Named a Fast Company Top 5 Most Innovative Company of 2022. Key socials grew 103% in 6 months.",
      },
    ],
  },
  creator: {
    id: "creator",
    name: "The Creator",
    className: "Maker",
    tagline: "Chronicler of culture and community.",
    blurb:
      "Worlds built at the intersection of image, language, and experience. The Creator invents narrative from visuals, community from ideas, and categories where there are none. He masters not only how to make things, but how to ship them, too.",
    sprite: spriteCreator,
    spriteDark: spriteCreatorDark,
    painterlyVideo: spriteCreatorVideoLight,
    painterlyVideoDark: spriteCreatorVideoDark,
    colorVar: "--creator",
    xp: [
      { label: "Audience", value: "30,000+" },
      { label: "Brand collaborations", value: "20+" },
      { label: "Years of video experience", value: "15+" },
      { label: "Worlds built", value: "8+" },
    ],
    skills: [
      { label: "Community Building", tier: "S-TIER" },
      { label: "Aesthetic & Taste", tier: "S-TIER" },
      { label: "Creative Direction", tier: "A-TIER" },
    ],
    stats: [
      { label: "Community Building", value: 96 },
      { label: "Aesthetic & Taste", value: 94 },
      { label: "Creative Direction", value: 91 },
    ],
    abilities: ["UX", "Creative Code", "Photography", "Video", "Zine-Making"],
    chapters: [
      {
        href: "https://github.com/example/voidjs",
        title: "Void.js — Tiny Canvas Library",
        meta: "Artifact I — OSS",
        description: "A 4kb creative-coding helper. 1.2k GitHub stars.",
        tags: ["Code", "OSS"],
        goal: "Make creative-coding setup disappear so artists can start in one line.",
        outcome: "1.2k stars, 40+ contributors, used in 3 published generative art books.",
      },
      {
        slug: "field-recorder",
        title: "Field Recorder",
        meta: "Artifact II — Audio",
        description: "Generative audio sketches released as a monthly drop.",
        tags: ["Sound", "Audio"],
        goal: "Treat sound design as a sketch practice — short, weird, finished.",
        outcome: "24 monthly drops, 6k subscribers, two pieces licensed for indie games.",
        details: {
          role: "Solo author",
          timeframe: "2 years, monthly",
          summary:
            "Each month: pick a constraint, record a generative piece, ship it as a downloadable patch + notes. No drafts, no deletions.",
          sections: [
            { heading: "Practice", body: "One constraint per month — a single oscillator, only field recordings, max 90 seconds." },
            { heading: "Format", body: "Each drop ships with the patch file, a short essay, and a downloadable .wav. The constraints are the marketing." },
            { heading: "Reach", body: "6k subscribers without paid promotion. Two pieces licensed by indie games; one used in a museum installation." },
          ],
          metrics: [
            { label: "Drops", value: "24" },
            { label: "Subs", value: "6k" },
            { label: "Licenses", value: "2" },
          ],
        },
      },
      {
        href: "https://example.com/slow-web-zine",
        title: "Slow Web Zine",
        meta: "Artifact III — Web",
        description: "An interactive editorial site about computing slowness.",
        tags: ["Web", "Editorial"],
        goal: "Make a website that defends slowness by being slow on purpose.",
        outcome: "Awwwards SOTD; 90k unique readers in launch month.",
      },
      {
        slug: "glyph-type-family",
        title: "Glyph — Pixel Type Family",
        meta: "Artifact IV — Type",
        description: "A 6-weight bitmap typeface used in 30+ indie games.",
        tags: ["Type", "Design"],
        goal: "Build a bitmap family that survives modern displays without losing its grid.",
        outcome: "6 weights, 30+ shipped indie games, 4k commercial licenses sold.",
        details: {
          role: "Type designer",
          timeframe: "9 months",
          summary:
            "Drew Glyph on a 12-unit grid then expanded to 6 weights without breaking the bitmap logic. Shipped with kerning tables and a small specimen site.",
          sections: [
            { heading: "Grid", body: "Anchored every glyph to a 12-unit baseline; kept stems on integer pixels at every weight." },
            { heading: "Range", body: "6 weights from Hairline to Black, plus an italic and a stencil cut for UI labels." },
            { heading: "Use", body: "Adopted by 30+ indie games and a generation of itch.io UI. 4k commercial licenses sold direct." },
          ],
          metrics: [
            { label: "Weights", value: "6" },
            { label: "Games", value: "30+" },
            { label: "Licenses", value: "4k" },
          ],
        },
      },
    ],
  },
};

export const characterList: Character[] = [
  characters.marketer,
  characters.writer,
  characters.creator,
];
