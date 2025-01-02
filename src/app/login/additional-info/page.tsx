"use client";

import React, { useState } from "react";
import Logo from "@/ui/src/assets/Logo";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getEmail, requestPostInfo } from "@/services/users";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

function AdditionalInfo() {
  const router = useRouter();
  const [infos, setInfos] = useState({
    userEmail: "",
    userName: "",
    userGender: "",
    userAge: 0,
  });

  useQuery({
    queryKey: ["query.users.info"],
    queryFn: () => getEmail(),
    onSuccess: (data) =>
      setInfos((prevInfos) => ({ ...prevInfos, userEmail: data })),
  });

  const { mutate } = useMutation(requestPostInfo, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
      router.push("/");
    },
    onError: () => {
      alert("회원가입에 실패했습니다.");
      router.back();
      return null;
    },
  });

  const handleRegister = () => {
    if (!infos.userName || !infos.userGender || infos.userAge <= 0) {
      alert("정보를 모두 입력해주세요.");
      return;
    }

    mutate({
      userName: infos.userName,
      userGender: infos.userGender,
      userAge: infos.userAge,
    });
  };

  const isDisabled = !infos.userName || !infos.userGender || infos.userAge <= 0;

  return (
    <div className={s.container}>
      <Logo width={172} height={79} />
      <div className={s.inputs}>
        <div className={s.inputContainer}>
          <p className={s.label}>이메일</p>
          <input
            className={`${s.inputBox} ${s.readonly}`}
            value={infos.userEmail}
            readOnly
          />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>이름</p>
          <input
            className={s.inputBox}
            placeholder="이름을 입력하세요"
            value={infos.userName}
            onChange={(e) => setInfos({ ...infos, userName: e.target.value })}
          />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>나이</p>
          <div className={s.inputWithUnit}>
            <input
              className={`${s.inputBox} ${s.inputWithUnitInput}`}
              placeholder="0"
              type="number"
              min={0}
              value={infos.userAge}
              onChange={(e) =>
                setInfos({ ...infos, userAge: Number(e.target.value) })
              }
            />
            <span className={s.unit}>세</span>
          </div>
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>성별</p>
          <div className={s.genderContainer}>
            <div className={s.genderBox}>
              <input
                className={s.genderRadio}
                type="radio"
                name="gender"
                value="남"
                checked={infos.userGender === "남"}
                onChange={(e) =>
                  setInfos({ ...infos, userGender: e.target.value })
                }
              />
              <p className={s.genderText}>남</p>
            </div>
            <div className={s.genderBox}>
              <input
                className={s.genderRadio}
                type="radio"
                name="gender"
                value="여"
                checked={infos.userGender === "여"}
                onChange={(e) =>
                  setInfos({ ...infos, userGender: e.target.value })
                }
              />
              <p className={s.genderText}>여</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${s.registerButton} ${isDisabled ? s.isDisabled : s.isNotDisabled}`}
          onClick={handleRegister}
          disabled={isDisabled}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default AdditionalInfo;
