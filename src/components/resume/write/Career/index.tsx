import { useState, useEffect } from "react";
import * as s from "./style.css";

export interface CareerProps {
  index: number;
  companyName: string;
  employmentType: string;
  department: string;
  position: string;
  period: string;
  resignationReason: string;
  jobContent: string;
  onChange: (index: number, field: keyof CareerProps, value: string) => void;
}

function Career({
  index,
  companyName,
  employmentType,
  department,
  position,
  period,
  resignationReason,
  jobContent,
  onChange, // onChange 프로퍼티가 정의된 대로 받음
}: CareerProps) {
  // 초기값을 props로 설정하는 방식으로 변경
  const [careerData, setCareerData] = useState({
    companyName,
    employmentType,
    department,
    position,
    period,
    resignationReason,
    jobContent,
  });

  // 필드 변경 시 careerData 상태를 업데이트하고 부모에게도 변경 알림
  const handleChange =
    (field: keyof CareerProps) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setCareerData((prevData) => {
        const updatedData = { ...prevData, [field]: value };
        onChange(index, field, value); // onChange 호출
        return updatedData;
      });
    };

  return (
    <div className={s.layout}>
      <input
        type="text"
        className={s.companyName}
        placeholder="직장명"
        value={careerData.companyName}
        onChange={handleChange("companyName")}
      />
      <input
        type="text"
        className={s.Detail}
        placeholder="고용 형태"
        value={careerData.employmentType}
        onChange={handleChange("employmentType")}
      />
      <input
        type="text"
        className={s.Detail}
        placeholder="부서"
        value={careerData.department}
        onChange={handleChange("department")}
      />
      <input
        type="text"
        className={s.Detail}
        placeholder="직위"
        value={careerData.position}
        onChange={handleChange("position")}
      />
      <input
        type="text"
        className={s.Detail}
        placeholder="YYYY.MM - YYYY.MM"
        value={careerData.period}
        onChange={handleChange("period")}
      />
      <div className={s.companyBox}>
        <div className={s.title}>퇴직이유</div>
        <input
          className={s.content}
          placeholder="퇴직하신 사유를 적어주세요"
          value={careerData.resignationReason}
          onChange={handleChange("resignationReason")}
        />
      </div>
      <div className={s.companyBox}>
        <div className={s.title}>업무 내용</div>
        <input
          className={s.content}
          placeholder="맡았던 업무 내용을 적어주세요"
          value={careerData.jobContent}
          onChange={handleChange("jobContent")}
        />
      </div>
    </div>
  );
}

export default Career;