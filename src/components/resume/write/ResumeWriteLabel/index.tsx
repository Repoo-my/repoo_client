import * as s from "./style.css";

interface ResumeWriteLabelProps {
  children: string;
}
function ResumeWriteLabel({ children }: ResumeWriteLabelProps) {
  return <div className={s.title}>{children}</div>;
}

export default ResumeWriteLabel;
