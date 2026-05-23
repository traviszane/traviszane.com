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

// Half Thoughts photos
import ht1 from "@/assets/quests/half-thoughts/1D16D0DA-EE00-499E-9B24-8B5D3D761DEA.jpg";
import ht2 from "@/assets/quests/half-thoughts/276C23D0-C06E-438B-A06E-838445ADBE9D.jpg";
import ht3 from "@/assets/quests/half-thoughts/3215E5A3-FC47-4930-B33E-E59B3F0D1B0D.jpg";
import ht4 from "@/assets/quests/half-thoughts/7C4BCD6A-0EC6-464F-B327-8FB03D3CD653.jpg";
import ht5 from "@/assets/quests/half-thoughts/BC229B90-D175-489D-B595-1336E52B9225.jpg";
import ht6 from "@/assets/quests/half-thoughts/C36A9FB4-C354-4C14-9C0E-506190AE5D29.jpg";
import ht7 from "@/assets/quests/half-thoughts/D643572E-61F1-4186-AD55-110F230AD979.jpg";
import ht8 from "@/assets/quests/half-thoughts/DA7EAA13-105E-4D79-9327-6C9E669FD877.jpg";
import ht9 from "@/assets/quests/half-thoughts/EEDD9A60-4ADA-4C19-90A7-6DA6F7BA9C60.jpg";

// Ayem
import ayemFlyer1 from "@/assets/quests/ayem/event-flyers.png";
import ayemFlyer2 from "@/assets/quests/ayem/event-flyers-2.png";
import ayemShot1 from "@/assets/quests/ayem/screenshot-1.png";
import ayemShot2 from "@/assets/quests/ayem/screenshot-2.png";
import ayemShot3 from "@/assets/quests/ayem/screenshot-3.png";

// Gatherings
import gather1 from "@/assets/quests/gatherings/event-1.jpg";
import gather2 from "@/assets/quests/gatherings/event-2.jpg";
import gather3 from "@/assets/quests/gatherings/event-3.jpg";
import gather4 from "@/assets/quests/gatherings/event-4.jpg";

// Sleepover
import sleepoverHome from "@/assets/quests/sleepover/sleepover-home.png";

import type { Embed } from "@/components/QuestEmbed";

export type CharacterId = "writer" | "marketer" | "creator";

export interface QuestSection {
  heading: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface QuestDetails {
  client?: string;
  role?: string;
  timeframe?: string;
  situation?: string;
  approach?: string;
  workItems?: string[];
  metrics?: { label: string; value: string }[];
  embeds?: Embed[];
  gallery?: GalleryImage[];
  pressLinks?: { label: string; url: string }[];
  attachments?: { label: string; href: string }[];
  testimonials?: string[];
  // legacy/extra
  summary?: string;
  sections?: QuestSection[];
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
  details?: QuestDetails;
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

const tw = (url: string): Embed => ({ type: "twitter", url });
const yt = (url: string): Embed => ({ type: "youtube", url });
const ig = (url: string): Embed => ({ type: "instagram", url });

export const characters: Record<CharacterId, Character> = {
  writer: {
    id: "writer",
    name: "The Writer",
    className: "Storyteller",
    tagline: "Master of syntax and storytelling.",
    blurb:
      "Essays, fiction, philosophy: the form changes, the insight grows. The Writer transforms tangled ideas into prose that reads like a current—quiet, deliberate, and hard to put down. He seeks truth in modern life whilst honoring its shapeshifting nature.",
    sprite: spriteWriter,
    spriteDark: spriteWriterDark,
    painterlyVideo: spriteWriterVideoLight,
    painterlyVideoDark: spriteWriterVideoDark,
    colorVar: "--writer",
    xp: [
      { label: "Stories written", value: "20+" },
      { label: "Awards granted", value: "5" },
      { label: "Novels drafted", value: "4" },
      { label: "Publications shipped", value: "3" },
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
        slug: "sleepover",
        href: "https://sleepoverxyz.substack.com",
        title: "Sleepover",
        meta: "Quest I — Newsletter",
        description: "A biweekly letter about how to live better—delivered with intention.",
        tags: ["Newsletter", "Essay", "Community"],
        goal: "Build a dedicated readership around modern culture and the art of living—minus the noise of social media.",
        outcome: "Every other Thursday. 200+ readers. Two years running.",
        details: {
          role: "Writer & Publisher",
          timeframe: "2023 – present",
          situation:
            "Build a dedicated readership around modern culture, joy, presence, and the art of living—without the noise of social media. Write the newsletter you'd want to receive.",
          approach:
            "Published every other Thursday under the name Sleepover—a biweekly letter that contemplates how to live with more joy, presence, and compassion. No growth hacks, no virality plays. Just consistent, honest writing delivered directly to people who opted in.",
          workItems: [
            "Biweekly essays on modern culture and life",
            "Two years of uninterrupted publishing",
            "200+ dedicated subscribers",
            "Home to the announcement and backstory of Half Thoughts",
          ],
          metrics: [
            { label: "Subscribers", value: "200+" },
            { label: "Cadence", value: "Biweekly" },
            { label: "Years running", value: "2+" },
          ],
          attachments: [
            { label: "Read Sleepover ↗", href: "https://sleepoverxyz.substack.com" },
          ],
          gallery: [
            { src: sleepoverHome, alt: "Sleepover homepage on Substack" },
          ],
        },
      },
      {
        slug: "half-thoughts",
        href: "https://amazon.com/Half-Thoughts-Phrases-Society-Disillusionment/dp/B0DZV9KHSQ",
        title: "Half Thoughts",
        meta: "Quest II — Publication",
        description: "A book that started as a parody and became something true.",
        tags: ["Poetry", "Essay", "Publication"],
        goal: "Write and self-publish a debut collection of phrases on self, sex, and society—an experiment with form and satire.",
        outcome: "Debut collection. Self-published March 2025. Available worldwide.",
        details: {
          role: "Author, Designer, Publisher",
          timeframe: "2024 – 2025",
          situation:
            "Write a book. Not the serious literary novel in progress—something faster, stranger, more immediate. An experiment in form triggered by a TikTok spiral about what good writing actually is.",
          approach:
            "Half Thoughts began as a response to a style of social media poetry that felt too simple—and became a genuine reckoning with that instinct. The book is split into three sections (Sex, Society, Self), each introduced by a prose essay. Sharp, witty, unfiltered. Phrases that read like intrusive thoughts—but the kind you want to highlight.",
          workItems: [
            "Conceived, written, designed, and self-published in under a year",
            "Available globally on Amazon in print and Kindle",
            "Published March 2025",
            "Three sections: I. Sex — II. Society — III. Self",
          ],
          testimonials: [
            "A window into the author's world, and a mirror to your own.",
            "Genuine, honest, and authentic—each poem is a beautiful exploration of love, sex, identity, and the struggle of life.",
            "Full of many 'makes ya think' bits.",
          ],
          gallery: [
            { src: ht1, alt: "Half Thoughts — interior" },
            { src: ht2, alt: "Half Thoughts — interior" },
            { src: ht3, alt: "Half Thoughts — interior" },
            { src: ht4, alt: "Half Thoughts — interior" },
            { src: ht5, alt: "Half Thoughts — interior" },
            { src: ht6, alt: "Half Thoughts — interior" },
            { src: ht7, alt: "Half Thoughts — interior" },
            { src: ht8, alt: "Half Thoughts — interior" },
            { src: ht9, alt: "Half Thoughts — interior" },
          ],
          attachments: [
            {
              label: "Buy on Amazon ↗",
              href: "https://amazon.com/Half-Thoughts-Phrases-Society-Disillusionment/dp/B0DZV9KHSQ",
            },
          ],
        },
      },
      {
        slug: "revolukin-magazine",
        href: "https://instagram.com/revolukin",
        title: "Revolukin Magazine",
        meta: "Quest III — Print Media",
        description: "$20K raised. 3,000 copies. 7,000+ contributors. Print isn't dead.",
        tags: ["Print", "Zine", "Crowdfunding", "Community", "Publication"],
        goal: "Create an independent print magazine celebrating 'revolutionary kin'—kind people doing meaningful things—at a time when everyone said print was dead.",
        outcome: "$20K raised on Kickstarter. 3,000 copies printed. 7,000+ community contributors.",
        details: {
          role: "Founder & Editor-in-Chief",
          timeframe: "2019",
          situation:
            "Create an independent print magazine at a time when everyone said print was dead—celebrating 'revolutionary kin,' kind people doing meaningful things, through personal essays, editorials, and interviews.",
          approach:
            "Launched a Kickstarter campaign in 2019, raised $20,000, and produced a 184-page debut issue exploring the human concept of time. Three sections: Introspection (personal essays), Invention (editorials with creative influencers), Inquiry (interviews with artists, researchers, and activists).",
          workItems: [
            "Founded and edited Revolukin Magazine",
            "$20,000 Kickstarter campaign conceived and executed",
            "184-page Issue 1 designed, edited, and published",
            "3,000 print copies produced and distributed",
            "7,000+ community contributors amassed",
          ],
          metrics: [
            { label: "Raised", value: "$20K" },
            { label: "Copies", value: "3,000" },
            { label: "Pages", value: "184" },
            { label: "Contributors", value: "7,000+" },
          ],
          attachments: [
            { label: "@revolukin on Instagram ↗", href: "https://instagram.com/revolukin" },
          ],
        },
      },
      {
        slug: "trilogy-in-progress",
        title: "Three Novels In Progress",
        meta: "Quest IV — Long Form",
        description: "700,000+ words and counting.",
        tags: ["Autofiction", "Long-Form"],
        goal: "Write three full-length works of autofiction—finding something universal in the specific.",
        outcome: "Over 700,000 words drafted. Currently in editing and revision.",
        details: {
          role: "Author",
          timeframe: "Ongoing",
          situation:
            "Write three full-length novels drawing from real life—autofiction that finds something universal in the specific. No deadline. No publisher. Just the work.",
          approach:
            "Over 700,000 words drafted across three manuscripts. Currently in editing and revision phases. The writing happens alongside everything else—the marketing work, the newsletter, the travel, the city-switching. It's the thread that runs through all of it.",
          workItems: [
            "Three autofiction manuscripts in progress",
            "700,000+ words drafted",
            "Currently in editing and revision",
            "Genre: literary autofiction",
          ],
          metrics: [
            { label: "Manuscripts", value: "3" },
            { label: "Words drafted", value: "700K+" },
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
      { label: "Products launched", value: "15+" },
      { label: "Markets reached", value: "12+" },
      { label: "Years in marketing", value: "10+" },
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
        slug: "deepprove-gtm",
        href: "https://lagrange.dev/blog/turing-roulette-recap-humanity",
        title: "Turing Roulette & DeepProve",
        meta: "Quest I — GTM",
        description: "Making verifiable AI playable—and impossible to ignore.",
        tags: ["GTM Strategy", "Campaign", "Product Launch"],
        goal: "Introduce a technically complex AI product to developer and mainstream audiences without losing either.",
        outcome: "144,309 unique users · 3.75M+ AI proofs · 1.7M+ launch views · 30+ enterprise partners.",
        details: {
          client: "Lagrange",
          role: "Head of Marketing",
          timeframe: "2024 – 2025",
          situation:
            "DeepProve was a technically complex verifiable AI product entering a crowded, skeptical market. The challenge: make zero-knowledge machine learning legible—and exciting—to developers and mainstream audiences simultaneously, without dumbing it down for one or alienating the other.",
          approach:
            "Instead of a standard product launch, the campaign was built around an experience: Turing Roulette, an AI tournament that put the product's capabilities directly in players' hands. The campaign ran in phases—teaser, announcement, activation, partner amplification, use case storytelling, and ongoing progress updates—each piece building narrative momentum toward the full product reveal.",
          workItems: [
            "Full end-to-end GTM strategy across brand, social, growth, and PR",
            "All hero content and campaign messaging written and directed in-house",
            "Multi-phase social rollout across X with coordinated partner and enterprise posts",
            "Turing Roulette tournament design and activation",
            "DeepProve product launch content suite",
          ],
          metrics: [
            { label: "Unique users", value: "144K+" },
            { label: "AI proofs", value: "3.75M+" },
            { label: "Launch views", value: "1.7M+" },
            { label: "Partners", value: "30+" },
          ],
          embeds: [
            tw("https://x.com/lagrangedev/status/1899853992714498449"),
            tw("https://x.com/lagrangedev/status/1907447933047615862"),
            tw("https://x.com/lagrangedev/status/1915058083577188387"),
            tw("https://x.com/lagrangedev/status/1937859910877769992"),
            tw("https://x.com/lagrangedev/status/1957472685103226883"),
          ],
        },
      },
      {
        slug: "la-token-launch",
        href: "https://x.com/LagrangeFndn",
        title: "$LA: Zero to $1B+",
        meta: "Quest II — Token Launch",
        description: "One token. One shot. Coordinated across exchanges, press, and the open internet.",
        tags: ["Token Launch", "GTM", "Partnerships", "PR"],
        goal: "Launch a new token at scale—building the narrative, community infrastructure, and distribution to hit a $1B+ valuation at launch.",
        outcome: "$1B+ valuation at launch · 71K+ airdrop registrations · 1.7M+ views.",
        details: {
          client: "Lagrange",
          role: "Head of Marketing",
          timeframe: "2025",
          situation:
            "Launch a new token at scale—building the narrative, community infrastructure, and distribution network needed to hit a $1B+ valuation at launch. One window, no second chances.",
          approach:
            "Built a coordinated GTM rollout across PR partners, exchange partners, and financial partners simultaneously—each lane moving in parallel toward a single launch moment. Retail-focused content ran alongside institutional positioning to capture both audiences at once.",
          workItems: [
            "Full token launch GTM strategy and execution",
            "All launch content written and directed: teasers, announcement, staking explainers",
            "Cross-functional coordination across PR, exchange, and financial partners",
            "Retail audience content strategy and rollout",
          ],
          metrics: [
            { label: "Valuation at launch", value: "$1B+" },
            { label: "Airdrop registrations", value: "71K+" },
            { label: "Launch views", value: "1.7M+" },
          ],
          embeds: [
            tw("https://x.com/lagrangedev/status/1927035305183355211"),
            tw("https://x.com/lagrangedev/status/1927760534218457462"),
            tw("https://x.com/lagrangedev/status/1930233195934457911"),
          ],
        },
      },
      {
        slug: "lagrange-social",
        href: "https://x.com/lagrangedev",
        title: "Lagrange: 30K → 100K+",
        meta: "Quest III — Social Growth",
        description: "340% YoY. Not followers—a community with a point of view.",
        tags: ["Social Growth", "Content", "Brand"],
        goal: "Grow @lagrangedev from a niche developer account into a recognized, trusted voice in verifiable AI and ZK.",
        outcome: "340% YoY growth · 635K+ avg monthly impressions · top mindshare in verifiable AI.",
        details: {
          client: "Lagrange",
          role: "Head of Marketing",
          timeframe: "2024 – 2025",
          situation:
            "Grow @lagrangedev from a niche developer account into a recognized, trusted voice in verifiable AI and zero-knowledge technology—without losing technical credibility in the process.",
          approach:
            "Every post was built around a consistent thesis: verifiable AI is the next frontier, and Lagrange owns that conversation. Content mixed technical depth with accessibility—research threads, product storytelling, community highlights, and real-time market commentary—creating a feed that developers and non-developers could both follow.",
          workItems: [
            "Full social strategy and content calendar ownership",
            "All copy written in-house across @lagrangedev and @lagrangefndn",
            "Narrative arc built across product launches, ecosystem moments, and market events",
            "Korean developer community built via Telegram alongside English-language growth",
          ],
          metrics: [
            { label: "YoY growth", value: "340%" },
            { label: "Monthly impressions", value: "635K+" },
            { label: "Followers", value: "100K+" },
          ],
          embeds: [
            tw("https://x.com/lagrangedev/status/1831065183151902876"),
            tw("https://x.com/lagrangedev/status/1866528308550307998"),
            tw("https://x.com/lagrangedev/status/1933192657330733204"),
            tw("https://x.com/lagrangedev/status/2006070846738293076"),
          ],
        },
      },
      {
        slug: "oasis-rebrand",
        href: "https://x.com/OasisProtocol",
        title: "Oasis: From Blockchain to AI Infrastructure",
        meta: "Quest IV — Rebrand",
        description: "767% social growth. A category nobody owned—until they did.",
        tags: ["Rebrand", "Positioning", "Category Creation"],
        goal: "Reposition the entire project around privacy-preserving AI—a genuinely differentiated category—before anyone else claimed it.",
        outcome: "767% YoY growth · 20K → 200K+ on X · 5M+ avg monthly impressions · 40K+ Discord.",
        details: {
          client: "Oasis Protocol",
          role: "Head of Marketing",
          timeframe: "2022 – 2024",
          situation:
            "Oasis was a well-built but narratively stuck L1 blockchain competing in a crowded field. The opportunity: reposition the entire project around privacy-preserving AI—a genuinely differentiated category—before anyone else claimed it.",
          approach:
            "Built the rebrand around ROFL (Runtime OFf-chain Logic)—a technically real capability that became the narrative anchor for a new category: the privacy layer for the AI stack. Repositioning wasn't just messaging work; it required rebuilding the entire content and campaign infrastructure around a new thesis.",
          workItems: [
            "Led narrative and positioning workshops to establish category leadership",
            "Directed multiple product launches and rebrands: Emerald EVM, Sapphire EVM, Oasis Privacy Layer, ROFL",
            "Built and managed co-marketing network of 100+ partners",
            "Owned all content, messaging, and brand assets across social, blog, and ads",
            "Produced ETHDam, Oasis' flagship branded developer event",
            "Grew @oasisprotocol from 20K → 200K+ on X",
          ],
          metrics: [
            { label: "YoY growth", value: "767%" },
            { label: "Monthly impressions", value: "5M+" },
            { label: "Discord community", value: "40K+" },
            { label: "Followers", value: "200K+" },
          ],
          embeds: [
            tw("https://x.com/OasisProtocol/status/1778741634962002345"),
            tw("https://x.com/OasisProtocol/status/1781540809155969221"),
            tw("https://x.com/OasisProtocol/status/1781041265192431753"),
            tw("https://x.com/OasisProtocol/status/1802782957993873491"),
          ],
        },
      },
      {
        slug: "superlayer",
        href: "https://x.com/superlayerio",
        title: "Superlayer: Mobile & Web App Ecosystem",
        meta: "Quest V — Ecosystem Growth",
        description: "481% in six months. Built brand recognition for products nobody had heard of yet.",
        tags: ["Thought Leadership", "Newsletter", "GTM"],
        goal: "Establish credibility across a portfolio of consumer apps—Unite, Joyride, Hotline, Trophy, SuperChamps, Taki—from cold start.",
        outcome: "481% social growth in six months · 2M+ user base · 200K+ DAU across Unite/Taki.",
        details: {
          client: "Superlayer",
          role: "Marketing Lead",
          timeframe: "2022 – 2023",
          situation:
            "Superlayer was an incubator with a portfolio of consumer apps—Unite, Joyride, Hotline, Trophy, SuperChamps, Taki—each needing brand recognition built from nothing. The challenge: establish credibility across multiple products simultaneously with a lean team.",
          approach:
            "Built GTM strategies and marketing playbooks tailored to each product's audience—consumer, gaming, social—while maintaining coherent Superlayer brand equity across the ecosystem. Thought leadership and newsletter strategy ran in parallel to build the umbrella brand.",
          workItems: [
            "GTM strategies and marketing playbooks for Superlayer and all ecosystem projects",
            "Social media and content funnels for Unite, Joyride, Hotline, Trophy, SuperChamps, Taki",
            "Thought leadership and newsletter campaigns ghostwritten for leadership",
            "Influencer and community campaigns for a 2M+ user base",
          ],
          metrics: [
            { label: "Social growth", value: "481%" },
            { label: "User base", value: "2M+" },
            { label: "Daily actives", value: "200K+" },
          ],
          embeds: [
            tw("https://x.com/superlayerio/status/1673786179655811073"),
            tw("https://x.com/uniteio/status/1805586821440483633"),
            tw("https://x.com/uniteio/status/1810660376700141686"),
          ],
        },
      },
      {
        slug: "rally",
        href: "https://x.com/rally_io",
        title: "Rally: Content, Community & a Fast Company Top 5",
        meta: "Quest VI — PR & Strategy",
        description: "Creator economy storytelling that earned the room.",
        tags: ["PR", "Content", "Social"],
        goal: "Build a content and community presence that told the creator-token story clearly—and get it in front of the right people.",
        outcome: "Fast Company Top 5 Most Innovative Company 2022 · 103% social growth in 6 months.",
        details: {
          client: "Rally",
          role: "Content & Community Lead",
          timeframe: "2021 – 2022",
          situation:
            "Rally was building infrastructure for creator tokens at a time when the category was misunderstood and the press was skeptical. The job: build a content and community presence that told the story clearly—and get it in front of the right people.",
          approach:
            "Built Rally's social and community ops from the ground up while working closely with execs and PR to place the brand in earned media. The Portugal. The Man campaign became a proof point: a real artist, a real token, a story the mainstream press could tell.",
          workItems: [
            "Developed and managed all social, community, and content ops",
            "Covered and amplified creator stories across the platform",
            "Collaborated with exec team and PR on media strategy",
            "Portugal. The Man token campaign—covered by CoinDesk, Rolling Stone, Decrypt",
          ],
          metrics: [
            { label: "Fast Company", value: "Top 5" },
            { label: "Social growth", value: "103%" },
          ],
          embeds: [
            tw("https://x.com/rally_io/status/1501279289005596678"),
            tw("https://x.com/rally_io/status/1527671538148851712"),
          ],
          pressLinks: [
            {
              label: "Rolling Stone — Portugal. The Man PTM Coin",
              url: "https://rollingstone.com/pro/features/portugal-the-man-cryptocurrency-ptm-coin-1129477",
            },
            {
              label: "CoinDesk — Portugal. The Man launches a social token",
              url: "https://coindesk.com/business/2021/01/14/latest-music-act-to-launch-a-social-token-portugal-the-man",
            },
            {
              label: "Decrypt — Portugal. The Man cryptocurrency",
              url: "https://decrypt.co/54155/portugal-the-man-cryptocurrency",
            },
          ],
        },
      },
      {
        slug: "colangelo-influencer",
        title: "Colangelo & Partners: Influencer Program",
        meta: "Quest VII — Influencer Marketing",
        description: "A program that won 10+ new clients. Built from a single guide.",
        tags: ["Influencer", "Beverage", "Business Development"],
        goal: "Lead influencer marketing for a portfolio of premium alcohol and beverage brands—and make it repeatable enough to become a business development asset.",
        outcome: "10+ new clients won using the influencer marketing guide as a BD asset.",
        details: {
          client: "Colangelo & Partners",
          role: "Influencer Marketing Lead",
          timeframe: "2019 – 2020",
          situation:
            "Lead influencer marketing for a portfolio of premium alcohol and beverage brands—each with distinct audiences, aesthetics, and compliance requirements—and build a program repeatable enough to become a business development asset.",
          approach:
            "Built an influencer marketing guide that codified strategy, creator selection, content standards, and measurement into a single replicable framework. The guide became the pitch—and won.",
          workItems: [
            "Led influencer marketing program across multiple alcohol and beverage brands",
            "Managed creator relationships for: @SapporoBeerUSA, @DiplomaticoRum, @Disaronno_Official, @FarNienteWinery, @koloarum, @proseccodoc",
            "Developed influencer marketing guide that won 10+ new clients",
            "Built content strategy and creator briefs for each brand",
          ],
          metrics: [
            { label: "New clients won", value: "10+" },
            { label: "Brands managed", value: "6+" },
          ],
          attachments: [
            {
              label: "Download influencer whitepaper (PDF) ↗",
              href: "/quest-assets/colangelo-influencer-whitepaper.pdf",
            },
          ],
        },
      },
      {
        slug: "refinery29-unleashed",
        title: "Refinery29 × UNLEASHED: #ConnectingThread",
        meta: "Quest VIII — Creative Direction",
        description: "654K reach. 8.92% engagement. Zero budget. Just creativity and conviction.",
        tags: ["Creative Direction", "Influencer", "Nonprofit"],
        goal: "Create genuine hype for a Refinery29 documentary launch with no marketing budget—using nothing but creative leverage.",
        outcome: "654,852 reach · 733,939 impressions · 8.92% avg engagement.",
        details: {
          client: "UNLEASHED × Refinery29",
          role: "Campaign Director",
          timeframe: "2018",
          situation:
            "UNLEASHED—a nonprofit media company—spent two years producing three documentary films about women around the world. They had a launch date on Refinery29, the #1 content platform for women, and no marketing budget. The challenge: create genuine hype with nothing but creative leverage.",
          approach:
            "Built an international influencer campaign around what both UNLEASHED and Refinery29 do best—creative content and female empowerment. Designed, developed, and produced the full campaign from scratch: recruited female creators on Instagram, briefed them on the film series, and offered jewelry gifts in exchange for authentic promotion. No paid media. No agency. Just well-matched creators and a story worth telling.",
          workItems: [
            "Full influencer campaign development, management, and analysis",
            "Creator sourcing and outreach across international Instagram talent",
            "Campaign materials and creative briefs designed in-house",
            "Featured creators: @melaniesutra, @whatthedoost, @p.s.kaguya, @madebylondon, @pearlsandbrandy",
          ],
          metrics: [
            { label: "Reach", value: "654,852" },
            { label: "Impressions", value: "733,939" },
            { label: "Engagement", value: "8.92%" },
            { label: "Paid media", value: "$0" },
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
        slug: "instagram",
        href: "https://instagram.com/travis_zane",
        title: "@travis_zane: 25K+ and a Decade in the Making",
        meta: "Quest I — Community",
        description: "Documentary-style living, shared in real time.",
        tags: ["Content", "Photography", "Community"],
        goal: "Build an authentic audience around travel, creativity, and personal storytelling.",
        outcome: "25,000+ followers. Built organically over a decade between California and Mexico City.",
        details: {
          role: "Creator",
          timeframe: "2014 – present",
          situation:
            "Build an authentic audience around travel, creativity, and personal storytelling—without chasing trends or optimizing for the algorithm. Let the life be the content.",
          approach:
            "A decade of documentary-style photography and storytelling split between California and Mexico City. The feed has grown alongside the work—same audience, same voice, since college. Zines, travel, community, and the texture of daily life in two cities.",
          workItems: [
            "25,000+ followers built organically",
            "Documentary-style photography and video content",
            "Dual California / Mexico City lifestyle content",
            "Zine and print work featured throughout",
          ],
          metrics: [
            { label: "Followers", value: "25K+" },
            { label: "Years active", value: "10+" },
            { label: "Cities", value: "CA · CDMX" },
          ],
          attachments: [
            { label: "@travis_zane on Instagram ↗", href: "https://instagram.com/travis_zane" },
          ],
        },
      },
      {
        slug: "youtube",
        href: "https://youtube.com/@travontheweb",
        title: "Film & Video: Collections of Fleeting Moments",
        meta: "Quest II — Film & Video",
        description: "Documentary shorts, personal films, and branded video.",
        tags: ["Video", "Documentary", "Creative Direction"],
        goal: "Develop a distinct visual voice through film and video—documentary-style, narrative-driven, intimate.",
        outcome: "A body of work spanning personal documentary, memoir, and branded content for Spotify, Adobe, and Google.",
        details: {
          role: "Director / Editor",
          timeframe: "2016 – present",
          situation:
            "Develop a distinct visual voice through film and video—documentary-style, narrative-driven, intimate. Treat the camera as a tool for emotional honesty, not just documentation.",
          approach:
            "A body of work built around the belief that the most interesting films are about ordinary people in specific places at particular moments—and that the job of the filmmaker is to show up, pay attention, and get out of the way.",
          sections: [
            {
              heading: "Isla Vista & UCSB Series",
              body: "A four-part documentary series exploring the UC Santa Barbara and Isla Vista experience, built from footage shot in 2017. An attempt to preserve what makes a community of young people navigating their lives genuinely special—the magic of a place we once called home, continuing to teach and embolden us long after we've left.",
            },
            {
              heading: "96 Years: A Film for My Grandmother",
              body: "A visual memoir for Jeanette Zane's 96th birthday, built around an interview conducted in 2016. A film about joy, loss, memory, and what it means to have lived a full life—including footage from Hawaii, California, New England, and Oahu spanning 2016–2019.",
            },
            {
              heading: "Shorts on Uncertainty: 'Joy' + 'Floating'",
              body: "Two short films made in the first year after moving from California to New York City. An attempt to capture the multifaceted nature of joy amid uncertainty—celebrating the people, places, and moments that give us a reason to keep going.",
            },
          ],
          embeds: [
            yt("https://youtu.be/4gN4ovbrhnQ"),
            yt("https://youtu.be/PI_P_-Q0UfA"),
            yt("https://youtu.be/YxJvjbgW_58"),
            yt("https://www.youtube.com/watch?v=RuuiooyNCcs"),
          ],
          workItems: [
            "Branded clients include: Spotify, Adobe, Google",
          ],
          attachments: [
            { label: "youtube.com/@travontheweb ↗", href: "https://youtube.com/@travontheweb" },
          ],
        },
      },
      {
        slug: "photography",
        title: "Photography: Documentary & Editorial",
        meta: "Quest III — Photography",
        description: "Travel, portraiture, and cultural moments across California, Mexico City, and beyond.",
        tags: ["Photography", "Documentary", "Editorial"],
        goal: "Capture the texture of real life, real places, and real people without staging any of it.",
        outcome: "Featured at the Japanese American National Museum in Los Angeles.",
        details: {
          role: "Photographer",
          timeframe: "Ongoing",
          situation:
            "Documentary and editorial photography as a natural extension of the same instinct that drives the writing and video work—capturing the texture of real life, real places, and real people without staging any of it.",
          approach:
            "Selected to exhibit photography and writing at the Japanese American National Museum—one of the largest museums dedicated to sharing the Japanese American experience in the United States—as part of a community exhibition exploring identity, mental health, and human connection in the digital age.",
          workItems: [
            "Documentary and editorial photography spanning travel, portraiture, and cultural moments",
            "Work spans California, Mexico City, New York, Hawaii, and international travel",
            "Photography and writing selected for exhibition at the Japanese American National Museum in Los Angeles",
          ],
          metrics: [
            { label: "Featured at", value: "JANM, LA" },
          ],
        },
      },
      {
        slug: "branded-content",
        title: "Branded Content Collaborations",
        meta: "Quest IV — Branded Content",
        description: "Storytelling that serves the brand without betraying the audience.",
        tags: ["Brand Partnerships", "Content", "Creative Direction"],
        goal: "Build a body of partnership work that spans industries—content that feels native to the creator's world, not like an ad dropped into it.",
        outcome: "Collaborations with brands small and large—including Adobe, Spotify, and Google.",
        details: {
          role: "Creator / Director",
          timeframe: "Ongoing",
          situation:
            "Build a body of partnership work that spans industries—creating content that feels native to the creator's world, not like an ad dropped into it.",
          approach:
            "Every collaboration built around authentic storytelling and real audience fit. The brief never drives the content—the voice does.",
          workItems: [
            "Altos Tequila collaboration",
            "Korbel collaboration",
            "Google Local Guides — chosen as a creator for the launch of the Google Local Guides program",
            "Adobe, Spotify branded video content",
            "More on the way",
          ],
          embeds: [
            ig("https://www.instagram.com/reel/DGEGAMkvnot/"),
            ig("https://www.instagram.com/reel/DQmeYP8karS/"),
          ],
        },
      },
      {
        slug: "ayem",
        title: "ayem: An Experiment in Queer Education",
        meta: "Quest V — Education",
        description: "A queer education project built in public.",
        tags: ["Education", "Community", "Publishing"],
        goal: "Create a platform for honest, accessible education around sexuality, relationships, and identity.",
        outcome: "A body of educational content, workshops, and a printed relationship anarchy zine.",
        details: {
          role: "Founder & Educator",
          timeframe: "2022–2024",
          situation:
            "Build a queer education project that could live online and offline—giving people language, frameworks, and community around sexuality, relationships, and identity.",
          approach:
            "Created ayem as an ongoing educational platform: visual content, workshops, and printed materials—including a zine on relationship anarchy designed to deconstruct how we relate to others and build our own models of love.",
          workItems: [
            "Educational workshops on sexuality, relationships, and identity",
            "Visual identity and content design across event flyers and digital assets",
            "Relationship anarchy zine produced and distributed",
          ],
          embeds: [
            yt("https://www.youtube.com/watch?v=p65hcxiR4IQ"),
          ],
          gallery: [
            { src: ayemFlyer1, alt: "ayem event flyer" },
            { src: ayemFlyer2, alt: "ayem event flyer" },
            { src: ayemShot1, alt: "ayem event design" },
            { src: ayemShot2, alt: "ayem event design" },
            { src: ayemShot3, alt: "ayem event design" },
          ],
          attachments: [
            {
              label: "Download the Relationship Anarchy zine (PDF) ↗",
              href: "/quest-assets/ayem-relationship-anarchy-zine.pdf",
            },
          ],
        },
      },
      {
        slug: "gatherings",
        title: "Gatherings: Taking Community Offline",
        meta: "Quest VI — Gatherings",
        description: "Five events. One city. Real people in a room together.",
        tags: ["Events", "Community", "Production"],
        goal: "Take the online community offline—create physical spaces in Mexico City for creative expression, connection, and honest conversation.",
        outcome: "5+ events independently produced in Mexico City, including the Sleepover community party.",
        details: {
          role: "Producer & Host",
          timeframe: "2023",
          situation:
            "Take the online community offline—create physical spaces in Mexico City for creative expression, connection, and honest conversation. Build something that could only exist in a room.",
          approach:
            "Produced a series of in-person events in Mexico City—including 'Exploring Relationship Anarchy' at HAAB Project, and Sleepover, a recurring community party. Each gathering designed to bring online conversations into shared physical space.",
          workItems: [
            "5+ events produced independently in Mexico City",
            "'Exploring Relationship Anarchy' hosted at HAAB Project, Hipódromo Condesa, June 2023",
            "Sleepover community party",
          ],
          gallery: [
            { src: gather1, alt: "Gathering in Mexico City" },
            { src: gather2, alt: "Gathering in Mexico City" },
            { src: gather3, alt: "Gathering in Mexico City" },
            { src: gather4, alt: "Gathering in Mexico City" },
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
