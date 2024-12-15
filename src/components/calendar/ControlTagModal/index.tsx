import React, { useState, useEffect, useRef, useCallback } from "react";
import KebabIcon from "@/ui/src/icons/KebabIcon";
import * as s from "./style.css";

interface OwnProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function ControlTagModal({ isOpened, setIsOpened }: OwnProps) {
  const [options, setOptions] = useState([
    { id: 0, title: "옵션1", isSelected: false },
    { id: 1, title: "옵션2", isSelected: true },
    { id: 2, title: "옵션3", isSelected: false },
    { id: 3, title: "옵션4", isSelected: true },
  ]);

  const [hoveredOption, setHoveredOption] = useState<{
    [key: number]: boolean;
  }>({});
  const [inputValue, setInputValue] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, isSelected: !option.isSelected }
          : option,
      ),
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const exists = options.some(
        (option) => option.title === inputValue.trim(),
      );
      if (!exists) {
        setOptions((prevOptions) => [
          ...prevOptions,
          {
            id: prevOptions.length,
            title: inputValue.trim(),
            isSelected: true,
          },
        ]);
      }
      setInputValue("");
    }
  };

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpened(false);
      }
    },
    [setIsOpened],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const selectedOptions = options.filter((option) => option.isSelected);

  if (!isOpened) {
    return null;
  }

  return (
    <div className={s.container} ref={modalRef}>
      <div className={s.optionSearchBar}>
        <div className={s.selectedOptionList}>
          {selectedOptions.map((option) => (
            <div
              key={option.id}
              role="button"
              tabIndex={0}
              onClick={() => handleOptionClick(option.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOptionClick(option.id);
              }}
              className={s.selectedOptionItem}
            >
              <div>{option.title}</div>
            </div>
          ))}
        </div>
        <input
          placeholder="옵션 검색"
          className={s.searchInput}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <p className={s.selectOrCreate}>옵션 선택 또는 생성</p>
      <div className={s.createdOptionList}>
        {options.map((option) => (
          <div
            key={option.id}
            className={s.createdOptionItem}
            role="button"
            tabIndex={0}
            onClick={() => handleOptionClick(option.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleOptionClick(option.id);
            }}
            onMouseEnter={() =>
              setHoveredOption((prev) => ({ ...prev, [option.id]: true }))
            }
            onMouseLeave={() =>
              setHoveredOption((prev) => ({ ...prev, [option.id]: false }))
            }
          >
            <div className={s.createdOptionContent}>{option.title}</div>
            {hoveredOption[option.id] ? <KebabIcon /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ControlTagModal;
