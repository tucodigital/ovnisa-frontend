interface MainButton {
  paddingY: string;
  paddingX: string;
  name: string;
}

export const MainButton = ({ paddingY, paddingX, name }: MainButton) => {
  return (
    <button
      className={`bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white ${paddingY} ${paddingX} rounded-full hover:to-blue-800`}
    >
      {name}
    </button>
  );
};
