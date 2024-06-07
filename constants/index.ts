export const protectedPaths = ["/dashboard"];

export const DEFAULT_CARDS = [
  // BACKLOG
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    card_id: "1",
    title: "Render bug in dashboard",
    description: "Resolve dashboard rendering issue.",
    status: "backlog",
    position: 1,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    card_id: "2",
    title: "SOX compliance checklist",
    status: "backlog",
    description: "Compile SOX compliance checklist.",
    position: 2,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "[SPIKE] Migrate to Azure",
    card_id: "3",
    status: "backlog",
    description: "Evaluate Azure migration feasibility.",
    position: 3,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Document Notifications",
    card_id: "4",
    status: "backlog",
    description: "Create Notifications service documentation.",
    position: 4,
  },
  // TODO
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Research DB options",
    card_id: "5",
    status: "todo",
    description: "Research database options for new microservice.",
    position: 1,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Postmortem for outage",
    card_id: "6",
    status: "todo",
    description: "Analyze recent outage root cause.",
    position: 2,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Sync with product roadmap",
    card_id: "7",
    status: "todo",
    description: "Coordinate with product team on Q3 roadmap.",
    position: 3,
  },
  // DOING
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Refactor context providers",
    card_id: "8",
    status: "doing",
    description: "Use Zustand for context provider refactoring.",
    position: 1,
  },
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Add logging to CRON",
    card_id: "9",
    status: "doing",
    description: "Implement logging in daily CRON job.",
    position: 2,
  },
  // DONE
  {
    board_id: "c1d98581-25b8-4882-b77c-c8a6a7d93cdb",
    title: "Setup DD dashboards",
    card_id: "10",
    status: "done",
    description: "Configure Datadog dashboards for Lambda listener.",
    position: 1,
  },
];
