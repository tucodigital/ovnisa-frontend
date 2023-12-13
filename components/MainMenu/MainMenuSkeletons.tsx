export const ContactMainMenuItemDesktopSkeleton = ({ width = 32 }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="animate-pulse w-6 rounded-full bg-slate-200 h-6 " />
      <div className={`animate-pulse w-${width} rounded-md bg-slate-200 h-4`} />
    </div>
  );
};

export const NavigationMainMenuItemDesktopSkeleton = () => (
  <div className="animate-pulse rounded-md bg-slate-200 h-4 w-28" />
);
