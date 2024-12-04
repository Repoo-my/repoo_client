import Input from "@/components/common/Input";
import ResumeWriteLabel from "@/components/resume/write/ResumeWriteLabel";
import Button from "@/components/common/Button";
import Upload from "@/ui/src/icons/Upload";
import * as s from "./style.css";

function Write() {
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <input className={s.title} placeholder="이력서 제목 입력..." />
        <ResumeWriteLabel>프로필</ResumeWriteLabel>
        <Input label="이름" placeholder="이름을 입력하세요"/>
      </div>
    </div>
  );
}

export default Write;
