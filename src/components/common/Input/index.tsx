import * as s from "./style.css";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

function Input({ label, type, placeholder }: InputProps) {
  return (
    <div className={s.layout}>
      <div className={s.label}>{label}</div>
      <input type={type} placeholder={placeholder} className={s.input} />
    </div>
  );
}

export default Input;
