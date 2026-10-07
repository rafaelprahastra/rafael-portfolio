export type Project = {
  title: string;
  slug: string;
  category: string;
  role: string;
  year?: number;
  description: string;
  problem: string;
  solution: string;
  contribution: string[];
  architecture: string[];
  decisions: { title: string; body: string }[];
  reliability: string;
  deployment: string;
  learning: string;
  stack: string[];
  images: { src: string; alt: string; caption: string }[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: string;
  evidence: "source-reviewed" | "profile-reported";
};
export const projects: Project[] = [
  {
    title: "SimbaBlox",
    slug: "simbablox",
    category: "Backend / Marketplace operations",
    role: "Primary developer · backend & infrastructure",
    featured: true,
    status: "V1 in use · V2 rewrite in progress",
    evidence: "source-reviewed",
    description:
      "A Python-based Discord bot for marketplace operations, including tickets, transaction records, seller verification, and reputation.",
    problem:
      "A middleman-assisted marketplace needs more than commands. Buyer and seller selection, fees, ticket status, completion, and reputation must remain consistent when interactions are repeated or fail.",
    solution:
      "A modular Python bot separates Discord interactions from persistence and accounting. Dedicated cogs handle tickets, seller verification, reputation, statistics, and administrative workflows.",
    contribution: [
      "Developed modular Python and discord.py workflows for marketplace operations.",
      "Worked on SQLite transaction boundaries, duplicate handling, and ticket-state validation.",
      "Operated the application on an Ubuntu VPS using systemd, SSH, and Tailscale.",
      "Used isolated tests and mocks while keeping development away from production data.",
    ],
    architecture: [
      "Discord interactions → authorization & state validation",
      "Modular cogs → ticket and reputation workflows",
      "SQLite → ledger records and aggregates",
      "Ubuntu VPS → systemd-managed process",
    ],
    decisions: [
      {
        title: "Keep related writes together",
        body: "Reviewed accounting paths group ledger and aggregate updates within a transaction. Unique keys and conflict handling protect specific retry paths from duplicate credit.",
      },
      {
        title: "Keep blocking I/O off the event loop",
        body: "Ticket I/O runs complete SQLite units on a worker thread. Connections are created and closed on the same worker; cancellation waits for the unit to finish.",
      },
      {
        title: "Separate reputation from accounting",
        body: "Received vouch reputation is read from its ledger, rather than inferred from spender totals or seller-profile caches.",
      },
    ],
    reliability:
      "Offline regression testing uses mocks and temporary SQLite databases. Reviewed paths include rollback, duplicate retries, and party selection under a write lock. This does not establish that every workflow is atomic or that live delivery cannot fail.",
    deployment:
      "V1 deployment on an Ubuntu VPS is reported in the supplied profile. V2 is an ongoing rewrite, not a claim of a completed release. No live server or production database was accessed for this portfolio.",
    learning:
      "A database commit and a successful Discord response are different events. Designing for retries, late work, and explicit state transitions matters as much as the happy path.",
    stack: ["Python", "discord.py", "SQLite", "asyncio", "Ubuntu", "systemd"],
    images: [
      {
        src: "/projects/simbablox.svg",
        alt: "Illustrated SimbaBlox architecture connecting Discord workflows, modular Python cogs, SQLite, and Ubuntu operations",
        caption: "Architecture illustration · not a product screenshot",
      },
    ],
  },
  {
    title: "Automm Escrow",
    slug: "automm-escrow",
    category: "AI-assisted development / Workflow design",
    role: "Development workflow design",
    featured: false,
    status: "Architecture experiment",
    evidence: "profile-reported",
    description:
      "A development workflow experiment using reusable instructions, clearly defined tasks, and separate planning and review steps.",
    problem:
      "Repeated prompts and loosely scoped tasks make AI-assisted changes harder to review. A useful workflow needs durable context and a clear distinction between analysis and implementation.",
    solution:
      "Repository-level instructions and role-specific agent configurations provide shared context, task boundaries, and a review handoff. The focus is development practice, not autonomous financial execution.",
    contribution: [
      "Structured reusable instructions and bounded development tasks.",
      "Separated planning, implementation, and validation responsibilities.",
      "Used repository context to reduce repeated setup in AI-assisted work.",
    ],
    architecture: [
      "Repository instructions → shared context",
      "Planning role → read-only analysis",
      "Implementation task → bounded changes",
      "Validation → review and isolated tests",
    ],
    decisions: [
      {
        title: "Bound responsibilities",
        body: "Planning and implementation have distinct responsibilities. Read-only review helps preserve the difference between observed behavior and desired guarantees.",
      },
      {
        title: "Make context reusable",
        body: "Small routing documents and scoped instructions keep context relevant without treating the whole repository as a prompt.",
      },
    ],
    reliability:
      "Role boundaries support review, but do not guarantee correctness. No benchmark or measured token savings are claimed.",
    deployment:
      "A development workflow experiment, not a hosted escrow product or an autonomous AI system. Project-specific repository and demo links have not been supplied.",
    learning:
      "Good AI-assisted work still depends on precise scope, evidence, and human ownership of the result.",
    stack: [
      "AI-assisted workflows",
      "Repository instructions",
      "Agent configurations",
      "Python",
    ],
    images: [
      {
        src: "/projects/automm.svg",
        alt: "Illustrated development workflow moving from context to planning, implementation, and validation",
        caption: "Workflow illustration · not a product screenshot",
      },
    ],
  },
  {
    title: "Human-Centered Smart Space",
    slug: "smart-space",
    category: "Academic / Rule-based web prototype",
    role: "Academic prototype development",
    featured: false,
    status: "Academic prototype",
    evidence: "profile-reported",
    description:
      "An academic web prototype that uses rules to suggest room layouts based on accessibility, collaboration, privacy, and sustainability needs.",
    problem:
      "Room planning involves competing needs. Accessibility, the number of occupants, privacy, and collaboration all affect what makes a layout useful.",
    solution:
      "A single-page prototype accepts room dimensions and user preferences, then applies heuristic rules to suggest a layout. Browser storage preserves inputs locally.",
    contribution: [
      "Worked on an academic single-page prototype using React and Tailwind CSS.",
      "Applied rule-based recommendation logic to room-planning inputs.",
      "Connected local browser persistence with an interactive interface.",
    ],
    architecture: [
      "Room dimensions & preferences → inputs",
      "Heuristic rules → layout recommendation",
      "React interface → recommendation display",
      "LocalStorage → local persistence",
    ],
    decisions: [
      {
        title: "Use rules, not an ML claim",
        body: "The recommendation mechanism is described as heuristic and rule-based. It is not presented as a trained machine-learning model.",
      },
      {
        title: "Keep the prototype local",
        body: "LocalStorage supports a simple academic prototype without implying a deployed backend or shared account system.",
      },
    ],
    reliability:
      "This entry is based on the supplied project profile. Source files, screenshots, and a project-specific test report were not available in the selected workspace. No validated accessibility outcomes are claimed.",
    deployment:
      "Academic prototype reported as completed. A verified live demonstration and public repository are not yet available.",
    learning:
      "Constraints make a recommendation explainable. A useful prototype should make its assumptions visible rather than promise a universally optimal layout.",
    stack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
      "Heuristics",
    ],
    images: [
      {
        src: "/projects/smart-space.svg",
        alt: "Conceptual room layout with open circulation paths and shared work surfaces, illustrating the smart-space project",
        caption: "Concept illustration · not an application screenshot",
      },
    ],
  },
];
