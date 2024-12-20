import * as s from "./style.css";

export interface EducationProps {
  id: number;
  school: string;
  department: string;
  period: string;
  onChange: (id: number, field: keyof EducationProps, value: string) => void;
}

function Education({
  id,
  school,
  department,
  period,
  onChange,
}: EducationProps) {
  const handleChange =
    (field: keyof EducationProps) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(id, field, e.target.value);
    };

  return (
    <div className={s.layout}>
      <input
        type="text"
        className={s.input}
        placeholder="학교명"
        value={school}
        onChange={handleChange("school")}
      />
      <input
        type="text"
        className={s.input}
        placeholder="학과명"
        value={department}
        onChange={handleChange("department")}
      />
      <input
        type="text"
        className={s.input}
        placeholder="YYYY.MM - YYYY.MM"
        value={period}
        onChange={handleChange("period")}
      />
    </div>
  );
}

export default Education;
