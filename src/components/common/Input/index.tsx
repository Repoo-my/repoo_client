import * as s from "./style.css";

interface InputProps {
  label: string;
  placeholder: string;
}

function Input({ label, placeholder }: InputProps) {
  return (
    <div className={s.layout}>
      <div className={s.label}>{label}</div>
      <input type="text" placeholder={placeholder} className={s.input} />
    </div>
  );
}

export default Input;
