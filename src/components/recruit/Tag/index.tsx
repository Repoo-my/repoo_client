import React from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import * as s from "./style.css";

interface TagProps {
  title: string;
  onClick: () => void;
}

function Tag({ title, onClick }: TagProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={s.container}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <p>{title}</p>
      <DownArrow />
    </div>
  );
}

export default Tag;
