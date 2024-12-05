"use client";
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
        <div className={s.flexContainer}>
          <div className={s.section}>
            <ResumeWriteLabel>프로필</ResumeWriteLabel>
            <Input type="text" label="이름" placeholder="이름을 입력하세요" />
            <Input
              type="email"
              label="이메일"
              placeholder="abcd1234@gmail.com"
            />
            <Input type="tel" label="전화번호" placeholder="010-0000-0000" />
          </div>
          <div className={s.profileImgcontainer}>
            <div className={s.profileImg} />
            <Button onClick={() => {}} type="white">
              <Upload />
              프로필 업로드
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
