import React, { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";
import './Search.css'
function Search() {
  const [scroll, setScroll] = useState("scroll");
  const scrollChanged = () => {
    if (window.scrollY == 0) {
      setScroll("scroll");
    } else if (window.scrollY > 0) {
      setScroll("scroll-none");
    }
  };
  window.addEventListener("scroll", scrollChanged);

  return (
    <div className={`header__search ${scroll}`}>
      <div className="header__input-search">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <SearchIcon className="header__icon-search" />
      </div>
    </div>
  );
}

export default Search;
