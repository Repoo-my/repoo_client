"use client";

import React, { useState } from "react";
import Logo from "@/ui/src/assets/Logo";
import DownArrow from "@/ui/src/icons/DownArrow";
import * as s from "./style.css";
import { sidebarMenu } from "@/data/sidebarMenu";

interface OpenedMenus {
  [key: number]: boolean;
}

const Sidebar = () => {
  const [openedMenus, setOpenedMenus] = useState<OpenedMenus>(
    Object.fromEntries(sidebarMenu.map((menu) => [menu.id, true])),
  );
  const toggleCategory = (menuId: number) => {
    setOpenedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
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
                onClick={() => toggleCategory(menu.id)}
                className={`${s.iconBox} ${
                  openedMenus[menu.id] ? s.opened : s.closed
                }`}
              >
                <DownArrow />
              </div>
            </div>
            {openedMenus[menu.id] && (
              <div className={s.menuList}>
                {menu.items.map((item) => (
                  <div key={item.id} className={s.menu}>
                    {item.icon}
                    <p className={s.smallText}>{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
