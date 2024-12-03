import React from "react";
import Search from "@/ui/src/icons/Search";
import * as s from "./style.css";

interface SearchBarProps {
  placeholder: string;
  width: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({
  placeholder,
  width,
  value,
  onChange,
  onKeyPress,
}: SearchBarProps) {
  return (
    <div className={s.searchBar} style={{ width }}>
      <Search />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={s.input}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default SearchBar;
