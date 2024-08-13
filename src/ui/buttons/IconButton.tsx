import { ReactElement } from "react";

const TextIconButton = ({
  icon,
  text,
  onClick,
}: {
  icon: ReactElement;
  text: string;
  onClick: () => {};
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 focus:outline-none"
    >
      <span>{icon}</span>
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default TextIconButton;
