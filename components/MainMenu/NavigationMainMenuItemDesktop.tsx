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
      <div className="MenuDecoration text-white hover:text-gray-100 transition duration-300 text-lg">{text}</div>
    </Link>
  );
};
