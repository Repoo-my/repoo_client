"use client";
import Logo from "@/ui/src/assets/Logo";
import DownArrow from "@/ui/src/icons/DownArrow";
import Menu from "@/ui/src/icons/Sidebar/Menu";
import Sparkle from "@/ui/src/icons/Sidebar/Sparkle";
import * as s from "./style.css";
import { useState } from "react";

function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);
  const handleCategoryOpen = () => {
    setIsOpened(!isOpened);
  };

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
            <div
              onClick={handleCategoryOpen}
              className={`${s.iconBox} ${isOpened ? s.opened : s.closed}`}
            >
              <DownArrow />
            </div>
          </div>
          {isOpened ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
