export const Changelog = () => {
  return (
    <ol className="relative border-s p-4">
      <li className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
          Sept 2024
        </time>
        <h3 className="text-lg font-semibold text-white">
          Release v1.0.0 - Initial Launch
        </h3>
        <p className="mb-4 text-base font-normal text-muted-foreground">
          This release includes a responsive landing page, user authentication
          (login & signup), a customizable dashboard, a Kanban board for task
          management, an interactive flow diagram, analytics with performance
          metrics, and a settings page for profile and preferences management.
        </p>
      </li>
    </ol>
  );
};
