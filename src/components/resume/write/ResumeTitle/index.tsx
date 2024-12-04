import * as s from "./style.css";

interface ResumeWriteTitleProps {
  children: string;
}
function ResumeWriteTitle({ children }: ResumeWriteTitleProps) {
  return <div className={s.title}>{children}</div>;
}

export default ResumeWriteTitle;
