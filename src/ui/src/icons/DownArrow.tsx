import theme from "@/ui/styles/theme.css";
import React from "react";

interface DownArrowProps {
  size?: string;
  color?: string;
}

function DownArrow({ size = "18", color = theme.black }: DownArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 6.75L9 12L3.75 6.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownArrow;
