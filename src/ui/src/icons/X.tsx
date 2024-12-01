import React from "react";

interface OwnProps {
  onClick: () => void;
}

function X({ onClick }: OwnProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <path
        d="M7 21L21 7M7 7L21 21"
        stroke="#5A5A5A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default X;
