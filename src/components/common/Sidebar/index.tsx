import Logo from "@/ui/src/assets/Logo";
import DownArrow from "@/ui/src/icons/DownArrow";
import Menu from "@/ui/src/icons/Sidebar/Menu";
import Sparkle from "@/ui/src/icons/Sidebar/Sparkle";
import * as s from "./style.css";

function Sidebar() {
  return (
    <div className={s.container}>
      <div className={s.logoBox}>
        <Logo />
      </div>
      <div className={s.categoryList}>
        <div className={s.category}>
          <div className={s.header}>
            <p className={s.bigText}>채용 정보</p>
            <div className={s.line} />
            <DownArrow />
          </div>
          <div className={s.menuList}>
            <div className={s.menu}>
              <Menu />
              <p className={s.smallText}>전체공고</p>
            </div>
            <div className={s.menu}>
              <Sparkle />
              <p className={s.smallText}>맞춤공고</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
