import Button from "@/components/common/Button";
import Upload from "@/ui/src/icons/Upload";
import * as s from "./style.css";

function Resume() {
  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <h1 className={s.title}>나의 이력서를 관리할 수 있어요</h1>
        <div className={s.actionContainer}>
          <Button type="white">
            <Upload />
            파일 업로드
          </Button>
          <Button type="black">이력서 작성하기</Button>
        </div>
      </div>
      <div className={s.resumeList}>
        {[1, 2, 3].map((item) => (
          <div className={s.resumeItem} key={item}>
            <div>
              <h2 className={s.resumeTitle}>이력서 제목입니다</h2>
              <p className={s.resumeDate}>마지막 수정: 9999.99.99</p>
            </div>
            <div className={s.actionLinks}>
              <button type="button" className={s.downloadLink}>
                다운로드
              </button>
              <button type="button" className={s.deleteLink}>
                삭제하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
