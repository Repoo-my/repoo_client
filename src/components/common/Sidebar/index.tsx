"use client";
import Logo from "@/ui/src/assets/Logo";
import DownArrow from "@/ui/src/icons/DownArrow";
import Menu from "@/ui/src/icons/Sidebar/Menu";
import Sparkle from "@/ui/src/icons/Sidebar/Sparkle";
import * as s from "./style.css";
import { useState } from "react";
import { sidebarMenu } from "@/data/sidebarMenu";

const Sidebar = () => {
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
        {sidebarMenu.map((menu) => (
          <div key={menu.id} className={s.category}>
            <div className={s.header}>
              <p className={s.bigText}>{menu.title}</p>
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
                {menu.items.map((item) => (
                  <div key={item.id} className={s.menu}>
                    {item.icon}
                    <p className={s.smallText}>{item.title}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
