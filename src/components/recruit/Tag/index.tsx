import React from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import * as s from "./style.css";

interface TagProps {
  title: string;
}

function Tag({ title }: TagProps) {
  return (
    <div className={s.container}>
      <p>{title}</p>
      <DownArrow />
    </div>
  );
}

export default Tag;
