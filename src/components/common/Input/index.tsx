import * as s from "./style.css";

interface InputProps {
  label?: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label = "",
  type,
  placeholder,
  name,
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
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
  label: "",
};
export default Input;
