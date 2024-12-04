import ResumeWriteTitle from "@/components/resume/write/ResumeTitle";
import Button from "@/components/common/Button";
import Upload from "@/ui/src/icons/Upload";
import * as s from "./style.css";

function Write() {
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <ResumeWriteTitle>프로필</ResumeWriteTitle>
      </div>
    </div>
  );
}

export default Write;
