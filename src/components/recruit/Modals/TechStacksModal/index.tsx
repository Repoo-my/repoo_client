import React, { useState } from "react";
import { IModal } from "@/types/IModal";
import X from "@/ui/src/icons/X";
import { techStacks } from "@/data/techStacks";
import * as s from "./style.css";
import SearchBar from "../../SearchBar";

function TechStacksModal({ closeModal }: IModal) {
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTechStack = () => {
    const trimmedInput = inputValue.trim();
    if (
      trimmedInput !== "" &&
      techStacks.includes(trimmedInput) &&
      !selectedTechStacks.includes(trimmedInput)
    ) {
      setSelectedTechStacks([...selectedTechStacks, trimmedInput]);
    }
    setInputValue("");
  };

  const removeTechStack = (stack: string) => {
    setSelectedTechStacks(selectedTechStacks.filter((tech) => tech !== stack));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>기술 스택</p>
        <X onClick={closeModal} size={28} />
      </div>
      <SearchBar
        placeholder="보유 기술스택을 입력해주세요"
        width="100%"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTechStack()}
      />
      <div className={s.stackList}>
        {selectedTechStacks.map((stack) => (
          <div key={stack} className={s.stack}>
            {stack} <X onClick={() => removeTechStack(stack)} size={20} />
          </div>
        ))}
      </div>
      <div className={s.buttons}>
        <button type="button" className={s.reset}>
          초기화
        </button>
        <button type="button" className={s.reply} onClick={closeModal}>
          적용
        </button>
      </div>
    </div>
  );
}

export default TechStacksModal;
