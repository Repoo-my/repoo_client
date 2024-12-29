import React from "react";
import Logo from "@/ui/src/assets/Logo";
import * as s from "./style.css";

function AdditionalInfo() {
  return (
    <div className={s.container}>
      <Logo width={172} height={79} />
      <div className={s.inputs}>
        <div className={s.inputContainer}>
          <p className={s.label}>이메일</p>
          <input
            className={`${s.inputBox} ${s.readonly}`}
            value="cntjddn715@gmail.com"
            readOnly
          />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>이름</p>
          <input className={s.inputBox} placeholder="이름을 입력하세요" />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>나이</p>
          <div className={s.inputWithUnit}>
            <input
              className={`${s.inputBox} ${s.inputWithUnitInput}`}
              placeholder="0"
              type="number"
              min={0}
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
              />
              <p className={s.genderText}>남</p>
            </div>
            <div className={s.genderBox}>
              <input
                className={s.genderRadio}
                type="radio"
                name="gender"
                value="여"
              />
              <p className={s.genderText}>여</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`${s.registerButton} + ${s.isNotDisabled}`}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default AdditionalInfo;
