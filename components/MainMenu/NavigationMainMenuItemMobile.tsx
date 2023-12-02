import Link from "next/link";

interface NavigationMainMenuItemMobileContent {
  text: String;
  url: String;
  separator: Boolean;
  setOpen: Function;
}

export const NavigationMainMenuItemMobile = ({
  text,
  url,
  separator,
  setOpen,
}: NavigationMainMenuItemMobileContent) => {
  return (
    <>
      <Link href={`${url}`} onClick={() => setOpen(false)} >
        <div className="text-white font-bold text-lg hover:underline underline-offset-4">
          {text}
        </div>
      </Link>
      {separator && <hr className="w-full border-ov-primaryLight my-2"></hr>}
    </>
  );
};
