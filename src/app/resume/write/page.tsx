"use client";

import { useState } from "react";
import Education, { EducationProps } from "@/components/resume/write/Education";
import Career, { CareerProps } from "@/components/resume/write/Career";
import Upload from "@/ui/src/icons/Upload";
import Button from "@/components/common/Button";
import ResumeWriteLabel from "@/components/resume/write/ResumeWriteLabel";
import Address from "@/components/resume/write/Address";
import Input from "@/components/common/Input";
import Plus from "@/ui/src/icons/Plus";
import * as s from "./style.css";

function Write() {
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const handleAddressComplete = (address: string) => {
    setRoadAddress(address);
  };
  const handleAddressToggle = () => {
    setShowAddress(!showAddress);
  };

  const [profileImage, setProfileImage] = useState<string | null>(
    "https://i.pinimg.com/736x/5b/e4/88/5be488211f49fa95d0079f8b6706d144.jpg",
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [introText, setIntroText] = useState<string>("");
  const [education, setEducation] = useState([
    { school: "", department: "", period: "" },
  ]);
  const [career, setCareer] = useState([
    {
      companyName: "",
      employmentType: "",
      department: "",
      position: "",
      period: "",
      resignationReason: "",
      jobContent: "",
    },
  ]);
  const [vocabulary, setvocabulary] = useState<string[]>([""]);

  const maxLength = 149;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroText(e.target.value);
  };

  const handleAddEducation = () => {
    setEducation([...education, { school: "", department: "", period: "" }]);
  };

  const handleAddCareer = () => {
    setCareer([
      ...career,
      {
        companyName: "",
        employmentType: "",
        department: "",
        position: "",
        period: "",
        resignationReason: "",
        jobContent: "",
      },
    ]);
  };

  const handleAddVocabulary = () => {
    setvocabulary([...vocabulary, ""]);
  };

  const handleEducationChange = (
    index: number,
    field: keyof EducationProps,
    value: string,
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducation(updatedEducation);
  };

  const handleCareerChange = (
    index: number,
    field: keyof CareerProps,
    value: string,
  ) => {
    const updatedCareer = [...career];
    updatedCareer[index] = { ...updatedCareer[index], [field]: value };
    setCareer(updatedCareer);
  };

  const handleVocabularyChange = (index: number, value: string) => {
    const updatedvocabulary = [...vocabulary];
    updatedvocabulary[index] = value;
    setvocabulary(updatedvocabulary);
  };

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
            <div className={s.smallGap}>
              <div className={s.label}>주소</div>
              <div className={s.addressFlex}>
                <div
                  className={s.label}
                  style={roadAddress ? { marginRight: "12px" } : {}}
                >
                  {roadAddress}
                </div>
                <Button onClick={handleAddressToggle} type="white">
                  주소 검색
                </Button>
                <div className={s.essential}>(필수)</div>
              </div>
              {showAddress && <Address onComplete={handleAddressComplete} />}
            </div>
          </div>

          <div className={s.profileImgContainer}>
            {profileImage && (
              <img src={profileImage} className={s.profileImg} />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="fileInput"
            />
            <Button
              onClick={() => document.getElementById("fileInput")?.click()}
              type="white"
            >
              <Upload />
              프로필 업로드
            </Button>
          </div>
        </div>

        <div className={s.section}>
          <ResumeWriteLabel>간단 소개글</ResumeWriteLabel>
          <div className={s.smallGap}>
            <textarea
              className={s.textarea}
              placeholder="본인을 소개하는 글을 작성해보세요!"
              maxLength={maxLength}
              value={introText}
              onChange={handleInputChange}
            />
            <div className={s.charCount}>
              {introText.length}/{maxLength + 1}
            </div>
          </div>

          <div className={s.section}>
            <ResumeWriteLabel>학력</ResumeWriteLabel>
            <div className={s.gap}>
              {education.map((edu, index) => (
                <Education
                  key={edu.school}
                  index={index}
                  school={edu.school}
                  department={edu.department}
                  period={edu.period}
                  onChange={handleEducationChange}
                />
              ))}
            </div>
            <div className={s.buttonEnd}>
              <Button type="white" onClick={handleAddEducation}>
                <Plus />
                추가
              </Button>
            </div>
          </div>
          <div className={s.section}>
            <ResumeWriteLabel>경력</ResumeWriteLabel>
            <div className={s.gap}>
              {career.map((car, index) => (
                <Career
                  key={car.companyName}
                  index={index}
                  companyName={car.companyName}
                  employmentType={car.employmentType}
                  department={car.department}
                  position={car.position}
                  period={car.period}
                  resignationReason={car.resignationReason}
                  jobContent={car.jobContent}
                  onChange={handleCareerChange}
                />
              ))}
            </div>
            <div className={s.buttonEnd}>
              <Button type="white" onClick={handleAddCareer}>
                <Plus />
                추가
              </Button>
            </div>
          </div>

          <div className={s.section}>
            <ResumeWriteLabel>어휘</ResumeWriteLabel>
            <div className={s.gap}>
              {vocabulary.map((skill, index) => (
                <Input
                  key={skill}
                  type="text"
                  placeholder="ex) 일본어능력시험 N1"
                  value={skill}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleVocabularyChange(index, e.target.value)
                  }
                />
              ))}
              <div className={s.buttonEnd}>
                <Button type="white" onClick={handleAddVocabulary}>
                  <Plus />
                  추가
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
