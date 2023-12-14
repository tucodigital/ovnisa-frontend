export const ContactMainMenuItemDesktopSkeleton = ({ width = 32 }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="animate-pulse w-7 rounded-full bg-blue-800 h-7 " />
      <div className={`animate-pulse w-${width} rounded bg-blue-800 h-7`} />
    </div>
  );
};

export const NavigationMainMenuItemDesktopSkeleton = () => (
  <div className="animate-pulse rounded-md bg-blue-800 h-7 w-28" />
);
