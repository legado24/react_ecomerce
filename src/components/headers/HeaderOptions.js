import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CloseIcon from "@material-ui/icons/Close";

import './HeaderOptions.css'
import ButtonPrimary from '../util/ButtonPrimary';
import { useDispatch } from 'react-redux';
import { toggleShowCar } from '../../features/global/globalSlice';

const HeaderOptions = () => {
  const dispatch = useDispatch();
 
    return (
        <div className="header__option">
        <div className="header__links">
          <div className="header__modo-entrega">
            <div className="header__entrega-text">
              <p className="header__entrega-title">Selecciona tu</p>
              <button className="header__entrega-button">
                Modo de entrega
              </button>
            </div>
            <div className="header__icon-arrow-down">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <a href="">Registrate</a>
          <a href="">Ingresa</a>
        </div>
        <div className="header__button-car">
        {/* onClick={()=>{setShowCarList(!showCarList)}} */}
          <ShoppingCartOutlinedIcon  onClick={() => {
            dispatch(toggleShowCar());
          }} />
        </div>
    
     
    
      </div>
     
    )
}

export default HeaderOptions
