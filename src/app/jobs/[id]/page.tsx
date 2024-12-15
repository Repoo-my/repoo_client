import Image from "next/image";
import { jobDetails } from "@/data/jobDetails";
import companyEx from "@/assets/companyEx.png";
import * as s from "./style.css";

function JobDescription({
  title,
  content,
}: {
  title: string;
  content:
    | string
    | {
        id: number;
        task?: string;
        qualification?: string;
        preference?: string;
        skill?: string;
      }[];
}) {
  return (
    <div className={s.jobDescription}>
      <p className={s.topic}>{title}</p>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item) => {
            const value =
              item.task || item.qualification || item.preference || item.skill;
            return (
              <li key={item.id} className={s.explain}>
                {value}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.explain}>{content}</p>
      )}
    </div>
  );
}

function JobDetail() {
  const jobData = jobDetails[0];

  return (
    <div className={s.container}>
      <div className={s.contentLayout}>
        <div className={s.companyImgLayout}>
          <Image className={s.companyImg} src={companyEx} alt="기업 이미지" />
          <div className={s.backgroundBlur} />
          <div className={s.textsLayoutContainer}>
            <div className={s.textsLayout}>
              <p className={s.companyName}>아이지에이웍스(IGAWorks)</p>
              <div className={s.infoLayout}>
                <p className={s.title}>[모바일인덱스] 프론트엔드 엔지니어</p>
                <div className={s.subInfoLayout}>
                  <p className={s.subInfo}>서울 용산구</p>
                  <p className={s.subInfo}>경력 2-5년</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.jobDetailWrapper}>
          <div className={s.jobContent}>
            <JobDescription title="기업 상세" content={jobData.companyDetail} />
            <JobDescription title="주요 업무" content={jobData.mainTasks} />
            <JobDescription
              title="자격 요건"
              content={jobData.qualifications}
            />
            <JobDescription title="우대 사항" content={jobData.preferences} />
            <JobDescription title="기술 스택" content={jobData.skills} />
            <JobDescription title="마감일" content={jobData.deadline} />
          </div>
          <aside className={s.applyContainer}>
            <button type="button" className={s.applyButton}>
              지원하기
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
