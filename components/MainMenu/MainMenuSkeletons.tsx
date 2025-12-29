export const ContactMainMenuItemDesktopSkeleton = () => {
  return (
    <div className="flex flex-row gap-2 items-center mb-1">
      <div className="animate-pulse w-7 rounded-full bg-ov-primaryLight h-5 " />
      <div className={`animate-pulse w-40 rounded bg-ov-primaryLight h-5`} />
    </div>
  );
};

export const NavigationMainMenuItemDesktopSkeleton = () => (
  <div className="animate-pulse rounded-md bg-ov-primary h-7 w-28" />
);
