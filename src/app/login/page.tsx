import React from "react";
import Google from "@/ui/src/assets/OAuth/Google";
import Kakao from "@/ui/src/assets/OAuth/Kakao";
import Naver from "@/ui/src/assets/OAuth/Naver";
import theme from "@/ui/styles/theme.css";
import LoginButton from "@/components/login/Button";
import * as s from "./style.css";

function Login() {
  return (
    <div className={s.container}>
      <p className={s.title}>나한테 꼭 맞는 채용정보만, 레포</p>
      <div className={s.explains}>
        <p className={s.explain}>
          취업, 이직, 커리어 콘텐츠까지 당신의 성장 여정을 함께합니다.
        </p>
        <p className={s.explain}>커리어 성장의 모든 것, 레포!</p>
      </div>
      <div className={s.oAuthList}>
        <LoginButton
          backgroundColor={theme.white}
          borderColor={theme.gray[200]}
          icon={<Google />}
          text="구글 로그인"
        />
        <LoginButton
          backgroundColor="#fee500"
          icon={<Kakao />}
          text="카카오 로그인"
        />
        <LoginButton
          backgroundColor="#03c75a"
          textColor={theme.white}
          icon={<Naver />}
          text="네이버 로그인"
        />
      </div>
    </div>
  );
}

export default Login;
