import React from 'react'
import CloseIcon from "@material-ui/icons/Close";
import ButtonPrimary from '../util/ButtonPrimary';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowCar } from '../../features/global/globalSlice';
import './CarList.css'
const CarList = () => {

  const dispatch = useDispatch();
  const {showCarList} = useSelector(state => state.global)
     return (
        <div className={`header__list-car ${showCarList?'active_carlist':''}`}>
        <CloseIcon
          className="header__icon-close-car"
          onClick={() => {
            dispatch(toggleShowCar());
          }}
        />
        <div className="header__empty-car">
          <b>Tu carrito está vacío</b>
          <p>Navega por las ofertas y categorías</p>
          <ButtonPrimary text="Intentalo aquí" />
        </div>
      </div>
   
    )
}

export default CarList
