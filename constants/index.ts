export const protectedPaths = ["/dashboard"];

export const DEFAULT_CARDS = [
  // BACKLOG
  {
    title: "Render bug in dashboard",
    id: "1",
    column: "backlog",
    description: "Resolve dashboard rendering issue.",
    tags: [{ option: "Critical", className: "text-red-600 bg-red-100" }],
  },
  {
    title: "SOX compliance checklist",
    id: "2",
    column: "backlog",
    description: "Compile SOX compliance checklist.",
  },
  {
    title: "[SPIKE] Migrate to Azure",
    id: "3",
    column: "backlog",
    description: "Evaluate Azure migration feasibility.",
    tags: [{ option: "Critical", className: "text-red-600 bg-red-100" }],
  },
  {
    title: "Document Notifications",
    id: "4",
    column: "backlog",
    description: "Create Notifications service documentation.",
    tags: [{ option: "Critical", className: "text-red-600 bg-red-100" }],
  },
  // TODO
  {
    title: "Research DB options",
    id: "5",
    column: "todo",
    description: "Research database options for new microservice.",
    tags: [
      { option: "Critical", className: "text-red-600 bg-red-100" },
      { option: "Development", className: "text-blue-600 bg-blue-100" },
    ],
  },
  {
    title: "Postmortem for outage",
    id: "6",
    column: "todo",
    description: "Analyze recent outage root cause.",
    tags: [{ option: "Development", className: "text-blue-600 bg-blue-100" }],
  },
  {
    title: "Sync with product roadmap",
    id: "7",
    column: "todo",
    description: "Coordinate with product team on Q3 roadmap.",
    tags: [
      { option: "Critical", className: "text-red-600 bg-red-100" },
      { option: "Development", className: "text-blue-600 bg-blue-100" },
    ],
  },
  // DOING
  {
    title: "Refactor context providers",
    id: "8",
    column: "doing",
    description: "Use Zustand for context provider refactoring.",
    tags: [
      { option: "Critical", className: "text-red-600 bg-red-100" },
      { option: "Development", className: "text-blue-600 bg-blue-100" },
    ],
  },
  {
    title: "Add logging to CRON",
    id: "9",
    column: "doing",
    description: "Implement logging in daily CRON job.",
    tags: [
      { option: "Critical", className: "text-red-600 bg-red-100" },
      { option: "Development", className: "text-blue-600 bg-blue-100" },
    ],
  },
  // DONE
  {
    title: "Setup DD dashboards",
    id: "10",
    column: "done",
    description: "Configure Datadog dashboards for Lambda listener.",
    tags: [],
  },
];
