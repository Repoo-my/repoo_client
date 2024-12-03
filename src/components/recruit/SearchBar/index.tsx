import React from "react";
import Search from "@/ui/src/icons/Search";
import * as s from "./style.css";

interface SearchBarProps {
  placeholder: string;
  width: string;
}

function SearchBar({ placeholder, width }: SearchBarProps) {
  return (
    <div className={s.searchBar} style={{ width }}>
      <Search />
      <input type="text" placeholder={placeholder} className={s.input} />
    </div>
  );
}

export default SearchBar;
