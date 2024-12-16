import React from "react";
import theme from "@/ui/styles/theme.css";
import * as s from "./style.css";

interface LoginButtonProps {
  backgroundColor: string;
  borderColor?: string;
  textColor?: string;
  icon: React.ReactNode;
  text: string;
  handleLogin: () => void;
}

function LoginButton({
  backgroundColor,
  borderColor,
  textColor,
  icon,
  text,
  handleLogin,
}: LoginButtonProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={s.loginButton}
      style={{
        background: backgroundColor,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
      onClick={handleLogin}
      onKeyDown={handleLogin}
    >
      {icon}
      <p
        className={s.loginText}
        style={{
          color: textColor || theme.black,
        }}
      >
        {text}
      </p>
    </div>
  );
}

LoginButton.defaultProps = {
  borderColor: null,
  textColor: theme.black,
};

export default LoginButton;
