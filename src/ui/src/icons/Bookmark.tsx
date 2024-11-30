import React from "react";

function Bookmark({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M22.1667 24.5L14 18.6667L5.83334 24.5V5.83333C5.83334 5.21449 6.07918 4.621 6.51676 4.18342C6.95435 3.74583 7.54784 3.5 8.16668 3.5H19.8333C20.4522 3.5 21.0457 3.74583 21.4833 4.18342C21.9208 4.621 22.1667 5.21449 22.1667 5.83333V24.5Z"
        fill={color}
      />
    </svg>
  );
}

export default Bookmark;
