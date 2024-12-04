"use client";

import React, { useState } from "react";
import Logo from "@/ui/src/assets/Logo";
import DownArrow from "@/ui/src/icons/DownArrow";
import { sidebarMenu } from "@/data/sidebarMenu";
import { usePathname, useRouter } from "next/navigation";
import * as s from "./style.css";

interface OpenedMenus {
  [key: number]: boolean;
}

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
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
              <button
                type="button"
                onClick={() => toggleCategory(menu.id)}
                className={`${s.iconBox} ${
                  openedMenus[menu.id] ? s.opened : s.closed
                }`}
              >
                <DownArrow />
              </button>
            </div>
            {openedMenus[menu.id] && (
              <div className={s.menuList}>
                {menu.items.map((item) => (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    className={`${s.menu} ${pathname === item.link ? s.selected : ""}`}
                    onClick={() => router.push(item.link)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") router.push(item.link);
                    }}
                  >
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
}

export default Sidebar;
