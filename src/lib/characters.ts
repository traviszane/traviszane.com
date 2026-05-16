import spriteWriter from "@/assets/sprite-writer.png";
import spriteMarketer from "@/assets/sprite-marketer.png";
import spriteCreator from "@/assets/sprite-creator.png";
import spriteWriterDark from "@/assets/sprite-writer-dark.png";
import spriteMarketerDark from "@/assets/sprite-marketer-dark.png";
import spriteCreatorDark from "@/assets/sprite-creator-dark.png";
import spriteMarketerVideo from "@/assets/sprite-marketer-dark.mp4";

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
    painterlyVideo: spriteMarketerVideo,
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
            { heading: "Strategy", body: "Anchored on one contrarian claim about the category. Everything — landing page, founder posts, demo video — pointed at the same wedge. No 'features' page until week five." },
            { heading: "Execution", body: "Shipped a manifesto-style landing page, a 90-second demo, and a 12-post founder narrative arc on X. Seeded with 30 hand-picked operators before any paid spend." },
            { heading: "Results", body: "25,012 signups, 41% organic referral rate, covered in 3 industry newsletters, 2 podcast invites. Closed seed round inside the window." },
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
            { heading: "Diagnosis", body: "Mapped every trial event to a job-to-be-done. Found 3 seams where users hit a decision point with no support." },
            { heading: "Build", body: "Rewrote 14 lifecycle emails, added 6 in-app nudges tied to behavior, and re-cut the sales handoff trigger to fire on intent — not day count." },
            { heading: "Results", body: "Trial→paid lifted 38% in 90 days. Support tickets in the first 7 days dropped 22%. Net new MRR per trial up 1.6x." },
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
            { heading: "Reframe", body: "Wrote the category POV essay, defined the 4 capabilities that bound it, and gave it a name a buyer could repeat." },
            { heading: "Rollout", body: "Pushed the language through the website, sales deck, pricing page, and a 6-post technical content arc. Briefed 4 analysts on the shape of the category." },
            { heading: "Results", body: "ACV moved 2.4x as deals stopped being feature comparisons. 4 analyst mentions, 1 named report. Sales cycle shortened by 19 days on average." },
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
            { heading: "System", body: "One weekly recorded conversation. I edited the transcript into a long-form X post, an essay outline, and 3 reusable angles. CEO approves, ships." },
            { heading: "Voice", body: "Resisted the urge to sound like a thread guy. Kept the cadence slow, the claims specific, the receipts attached." },
            { heading: "Results", body: "200k+ monthly impressions inside one quarter. Inbound: 3 investor intros, 11 enterprise leads, 2 hires sourced from replies." },
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
    name: "The Creator",
    className: "Maker",
    tagline: "Chronicler of culture and community.",
    blurb:
      "Worlds built at the intersection of image, language, and experience. The Creator invents narrative from visuals, community from ideas, and categories where there are none. He masters not only how to make things, but how to ship them, too.",
    sprite: spriteCreator,
    spriteDark: spriteCreatorDark,
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
