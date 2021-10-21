import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Search from "../components/headers/Search";
 import Logo from "../components/headers/Logo";
 import HeaderOptions from "../components/headers/HeaderOptions";
  import NavMovil from "../components/headers/NavMovil";
  import NavDesktop from "../components/headers/NavDesktop";
 import CarList from "../components/headers/CarList";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowMenuMovil } from "../features/global/globalSlice";
  
function Header() {

  const [bodyClass, setBodyClass] = useState("body__scroll");

  // const [clickMenu, setClickMenu] = useState(false);
  const dispatch = useDispatch();
  const {showMenuMovil} = useSelector(state => state.global)


  // const handleClickMenuMovil = () => {
  //   setClickMenu(!clickMenu);
  //   if (!clickMenu) {
  //     document.body.classList.remove("active");
  //     setBodyClass("inactive");
  //   } else {
  //     document.body.classList.remove("inactive");
  //     setBodyClass("active");
  //   }
  // };

  useEffect(() => {
       if (showMenuMovil) {
      document.body.classList.remove("active");
      setBodyClass("inactive");
    } else {
      document.body.classList.remove("inactive");
      setBodyClass("active");
    }
    
  }, [showMenuMovil])


  useEffect(() => {
    document.body.classList.add(bodyClass);
  }, [bodyClass]);

  return (
    <>
      <header className="header">
        <div className="header__content">
          <Logo />
         <Search />
          <HeaderOptions /> 
          <div
            className={
              !showMenuMovil
                ? "header__icon-menu-movil"
                : "header__icon-menu-movil active"
            }
          >
            <MenuIcon  onClick={() => {
            dispatch(toggleShowMenuMovil());
          }} />
          </div>

          <div
            className={
              !showMenuMovil
                ? "header__icon-menu-close"
                : "header__icon-menu-close active"
            }
          >
            <CloseIcon   onClick={() => {
            dispatch(toggleShowMenuMovil());
          }} />
          </div>
        </div>
      </header>
      <NavMovil  />
      <NavDesktop />
       <CarList/>
      </>
  );
}

export default Header;
