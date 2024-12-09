import * as s from "./style.css";

interface InputProps {
  label?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label = "",
  type,
  placeholder,
  value = "",
  onChange = () => {},
}: InputProps) {
  return (
    <div className={s.layout}>
      {label && <div className={s.label}>{label}</div>}{" "}
      <input
        type={type}
        placeholder={placeholder}
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
};
export default Input;
