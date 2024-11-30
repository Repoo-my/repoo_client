import React from "react";
import Search from "@/ui/src/icons/Search";
import * as s from "./style.css";

function SearchBar() {
  return (
    <div className={s.searchBar}>
      <Search />
      <input
        type="text"
        placeholder="검색어를 입력해 주세요."
        className={s.input}
      />
    </div>
  );
}

export default SearchBar;
