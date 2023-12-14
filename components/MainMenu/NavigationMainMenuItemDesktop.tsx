import Link from "next/link";

interface NavigationMainMenuItemContent {
  text: String;
  url: String;
}

export const NavigationMainMenuItemDesktop = ({
  text,
  url,
}: NavigationMainMenuItemContent) => {
  return (
    <Link href={`${url}`}>
      <div className="MenuDecoration text-gray-300 hover:text-white transition duration-300 font-bold text-lg">{text}</div>
    </Link>
  );
};
