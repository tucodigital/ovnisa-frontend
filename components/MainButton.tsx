interface MainButton {
  paddingY: string;
  paddingX: string;
  name: string;
}

export const MainButton = ({ paddingY, paddingX, name }: MainButton) => {
  return (
    <button
      className={`bg-ov-primary text-white ${paddingY} ${paddingX} rounded-lg hover:bg-blue-800`}
    >
      {name}
    </button>
  );
};
