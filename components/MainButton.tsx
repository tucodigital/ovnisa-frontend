interface MainButton {
  paddingY: string;
  paddingX: string;
  name: string;
}

export const MainButton = ({ paddingY, paddingX, name }: MainButton) => {
  return (
    <button
      className={`bg-ov-primary text-white text-sm ${paddingY} ${paddingX} rounded-lg hover:bg-ov-primaryLight duration-300 transition`}
    >
      {name}
    </button>
  );
};
