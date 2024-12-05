import * as s from "./style.css";

interface ButtonProps {
  type?: "white" | "black";
  isDisabled?: boolean;
  width?: number | string;
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ type, isDisabled, width, children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width: typeof width === "number" ? `${width}px` : width }}
      className={`${s.baseButton} ${type === "black" ? s.blackButton : s.whiteButton}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "white",
  isDisabled: false,
  width: "",
};

export default Button;
