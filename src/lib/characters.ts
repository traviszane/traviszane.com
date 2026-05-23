import spriteWriter from "@/assets/sprite-writer.webp";
import spriteMarketer from "@/assets/sprite-marketer.webp";
import spriteCreator from "@/assets/sprite-creator.webp";
import spriteWriterDark from "@/assets/sprite-writer-dark.webp";
import spriteMarketerDark from "@/assets/sprite-marketer-dark.webp";
import spriteCreatorDark from "@/assets/sprite-creator-dark.webp";
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
        href: "https://sleepoverxyz.substack.com",
        title: "Sleepover",
        meta: "Quest I—Newsletter",
        description: "A biweekly letter about how to live better—delivered with intention.",
        tags: ["Newsletter", "Essay", "Community"],
        goal: "Build a dedicated readership around modern culture, presence, and the art of living—without the noise of social media.",
        outcome: "200+ subscribers over two years of consistent publishing. A genuine community of readers who show up every other Thursday.",
      },
      {
        href: "https://amazon.com/Half-Thoughts-Phrases-Society-Disillusionment-ebook/dp/B0DZKHT2H7",
        title: "Half Thoughts",
        meta: "Quest II—Publication",
        description: "A book that started as a parody and became something true.",
        tags: ["Poetry", "Essay", "Publication"],
        goal: "Write and self-publish a debut collection of phrases on self, sex, and society—an experiment in form and sincerity disguised as satire.",
        outcome: "Published March 2025. Available globally on Amazon in print and Kindle. Readers describe it as a mirror—witty, honest, uncomfortably relatable.",
      },
      {
        href: "https://instagram.com/revolukin",
        title: "Revolukin Magazine",
        meta: "Quest III—Print Media",
        description: "A print magazine about the human experience. Funded, printed, shipped.",
        tags: ["Print", "Zine", "Crowdfunding", "Community", "Publication"],
        goal: "Create an independent print magazine celebrating 'revolutionary kin'—kind people doing meaningful things—at a time when print was supposed to be dead.",
        outcome: "$20,000 raised on Kickstarter. 3,000 copies printed and sold. 7,000+ community contributors. Issue 1 explored the human concept of time across 184 pages of personal essays, editorials, and interviews.",
      },
      {
        title: "Three Novels in Progress",
        meta: "Quest IV—Long Form",
        description: "700,000+ words written. The work continues.",
        tags: ["Autofiction", "Long-Form"],
        goal: "Write three full-length works of autofiction—drawing from real life to find something universal.",
        outcome: "Over 700,000 words drafted across three manuscripts. Currently in editing and revision. The commitment is the credential.",
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
        meta: "Quest I—Launch",
        description: "Launched verifiable AI to the world. Made it a game first.",
        tags: ["GTM Strategy", "Campaign", "Product Launch"],
        goal: "Introduce a technically complex AI product to developer and mainstream audiences without losing either.",
        outcome: "144,309 unique users generated 3.75M+ AI proofs. DeepProve launch hit 1.7M views. 30+ enterprise, AI, and finance partners secured.",
      },
      {
        href: "https://x.com/LagrangeFndn",
        title: "$LA Token Launch: Zero to $500M+",
        meta: "Quest II—Token Launch",
        description: "Took a token from concept to nine-figure valuation at launch.",
        tags: ["Token Launch", "GTM", "Partnerships", "PR"],
        goal: "Build the narrative, community, and distribution infrastructure to launch $LA at scale—coordinating PR, exchange, and financial partners across a single rollout.",
        outcome: "$500M+ valuation at launch. 71K+ airdrop registrations. 1.7M+ views across retail-focused launch content. Coordinated cross-functional GTM across PR, exchange, and financial partners simultaneously.",
      },
      {
        href: "https://x.com/lagrangedev",
        title: "Lagrange Social Growth: 30K → 100K+",
        meta: "Quest III—Social Growth",
        description: "340% YoY growth. Built category authority in verifiable AI.",
        tags: ["Social Growth", "Content", "Brand"],
        goal: "Grow @lagrangedev from a niche developer account into a recognized voice in AI and ZK.",
        outcome: "340% YoY follower growth, 635K+ average monthly impressions. Top mindshare in verifiable AI on X.",
      },
      {
        href: "https://x.com/OasisProtocol",
        title: "Oasis Rebrand: Privacy Layer → AI Stack",
        meta: "Quest IV—Rebrand",
        description: "Repositioned a blockchain project as infrastructure for the AI era.",
        tags: ["Rebrand", "Positioning", "Category Creation"],
        goal: "Escape the crowded L1 narrative and establish Oasis as the privacy layer for AI—a new category entirely.",
        outcome: "767% YoY social growth, 20K → 200K+ on X, 5M+ average monthly impressions, 40K+ Discord community.",
      },
      {
        href: "https://x.com/superlayerio",
        title: "Superlayer Thought Leadership: 9K → 100K+",
        meta: "Quest V—Thought Leadership",
        description: "Built brand authority for an ecosystem nobody had heard of yet.",
        tags: ["Thought Leadership", "Newsletter", "GTM"],
        goal: "Establish Superlayer and its portfolio projects (Unite, Joyride, Hotline) as credible consumer brands from cold start.",
        outcome: "481% social growth in six months. Thought leadership and newsletter strategy serving a 2M+ user base with 200K+ daily active users.",
      },
      {
        href: "https://x.com/rally_io",
        title: "Rally PR & Strategy: Fast Company Top 5",
        meta: "Quest VI—PR",
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
        href: "https://instagram.com/travis_zane",
        title: "Instagram: 25K+ Community",
        meta: "Quest I—Community",
        description: "A decade of documentary-style living, shared in real time.",
        tags: ["Content", "Photography", "Community"],
        goal: "Build an authentic audience around travel, creativity, and personal storytelling—without chasing trends or optimizing for the algorithm.",
        outcome: "25,000+ followers across California and Mexico City. A community that has grown alongside the work since college.",
      },
      {
        href: "https://www.youtube.com/@traviszane",
        title: "YouTube: Experimental Docs",
        meta: "Quest II—Video",
        description: "Moving image as a medium for ideas, not just content.",
        tags: ["Video", "Documentary", "Creative Direction"],
        goal: "Develop a distinct visual voice through experimental video—documentary-style, narrative-driven, built for people who want more than a thumbnail.",
        outcome: "10,000+ subscribers and growing. A body of work that treats YouTube as a creative medium, not a distribution channel.",
      },
      {
        title: "NYC, SF, CDMX: In Person Experiences",
        meta: "Quest III—Experience",
        description: "Five events. One city. Real people in a room together.",
        tags: ["Events", "Community"],
        goal: "Take the online community offline—create physical spaces amidst urban life for creative expression, connection, and honest conversation around sexuality and relationships.",
        outcome: "5+ events produced independently. Showcased local creative talent. Hosted educational workshops on sexuality and relationships. Proof that community lives beyond the feed.",
      },
    ],
  },
};

export const characterList: Character[] = [
  characters.marketer,
  characters.writer,
  characters.creator,
];
