import React, { useState } from 'react'
import ButtonPrimaryOutline from '../util/ButtonPrimaryOutline'
import ButtonPrimary from '../util/ButtonPrimary'
import './NavMovil.css'
import { useSelector } from 'react-redux'
const NavMovil = () => {
    const MENU_MOVIL = [
        {
          menu: "Ofertas",
          sub_menu: [
            { menu: "Jumbo Prime" },
            { menu: "Jumbo Ofertas" },
            { menu: "Tarjeta Cencosud" },
            { menu: "Puntos Cencosud" },
          ],
        },
        {
          menu: "Exclusivo en Jumbo",
          sub_menu: [
            { menu: "Duendes Mágicos" },
            { menu: "Cuisine & Co" },
            { menu: "Jumbo Artesanal" },
            { menu: "MundoBio" },
            { menu: "Home Care" },
            { menu: "Family Care" },
          ],
        },
        {
          menu: "Bebé",
          sub_menu: [
            { menu: "Pañales" },
            { menu: "Toallas Húmedas" },
            { menu: "Colados,Picados y Otros" },
            { menu: "Leche y Suplementos Infantiles" },
            { menu: "Perfumería Infantil" },
            { menu: "Accesorios de Bebé" },
            { menu: "Vestuario  Bebé" },
            { menu: "Rodados" },
          ],
        },
        {
          menu: "Congelados",
          sub_menu: [
            { menu: "Verduras Congeladas" },
            { menu: "Frutas Congeladas" },
            { menu: "Hamburgesas" },
            { menu: "Nuggets y Apanados" },
            { menu: "Helados y Postres" },
            { menu: "Cgurrascos, Lomitos y Otros" },
            { menu: "Cocktail" },
            { menu: "Vegetariano y Vegano" },
            { menu: "Comidas Preparadas" },
            { menu: "Hielos" },
          ],
        },
        {
          menu: "Desayunos y Dulces",
          sub_menu: [
            { menu: "Desayuno" },
            { menu: "Café y Cafeteras" },
            { menu: "Chocolates y Dulces" },
            { menu: "Galletas y Colaciones" },
            { menu: "Postres y Repostería" },
          ],
        },
        {
          menu: "Ofertas",
          sub_menu: [
            { menu: "Jumbo Prime" },
            { menu: "Jumbo Ofertas" },
            { menu: "Tarjeta Cencosud" },
            { menu: "Puntos Cencosud" },
          ],
        },
        {
          menu: "Exclusivo en Jumbo",
          sub_menu: [
            { menu: "Duendes Mágicos" },
            { menu: "Cuisine & Co" },
            { menu: "Jumbo Artesanal" },
            { menu: "MundoBio" },
            { menu: "Home Care" },
            { menu: "Family Care" },
          ],
        },
        {
          menu: "Bebé",
          sub_menu: [
            { menu: "Pañales" },
            { menu: "Toallas Húmedas" },
            { menu: "Colados,Picados y Otros" },
            { menu: "Leche y Suplementos Infantiles" },
            { menu: "Perfumería Infantil" },
            { menu: "Accesorios de Bebé" },
            { menu: "Vestuario  Bebé" },
            { menu: "Rodados" },
          ],
        },
        {
          menu: "Congelados",
          sub_menu: [
            { menu: "Verduras Congeladas" },
            { menu: "Frutas Congeladas" },
            { menu: "Hamburgesas" },
            { menu: "Nuggets y Apanados" },
            { menu: "Helados y Postres" },
            { menu: "Cgurrascos, Lomitos y Otros" },
            { menu: "Cocktail" },
            { menu: "Vegetariano y Vegano" },
            { menu: "Comidas Preparadas" },
            { menu: "Hielos" },
          ],
        },
        {
          menu: "Desayunos y Dulces",
          sub_menu: [
            { menu: "Desayuno" },
            { menu: "Café y Cafeteras" },
            { menu: "Chocolates y Dulces" },
            { menu: "Galletas y Colaciones" },
            { menu: "Postres y Repostería" },
          ],
        },
        {
          menu: "Ofertas",
          sub_menu: [
            { menu: "Jumbo Prime" },
            { menu: "Jumbo Ofertas" },
            { menu: "Tarjeta Cencosud" },
            { menu: "Puntos Cencosud" },
          ],
        },
        {
          menu: "Exclusivo en Jumbo",
          sub_menu: [
            { menu: "Duendes Mágicos" },
            { menu: "Cuisine & Co" },
            { menu: "Jumbo Artesanal" },
            { menu: "MundoBio" },
            { menu: "Home Care" },
            { menu: "Family Care" },
          ],
        },
        {
          menu: "Bebé",
          sub_menu: [
            { menu: "Pañales" },
            { menu: "Toallas Húmedas" },
            { menu: "Colados,Picados y Otros" },
            { menu: "Leche y Suplementos Infantiles" },
            { menu: "Perfumería Infantil" },
            { menu: "Accesorios de Bebé" },
            { menu: "Vestuario  Bebé" },
            { menu: "Rodados" },
          ],
        },
        {
          menu: "Congelados",
          sub_menu: [
            { menu: "Verduras Congeladas" },
            { menu: "Frutas Congeladas" },
            { menu: "Hamburgesas" },
            { menu: "Nuggets y Apanados" },
            { menu: "Helados y Postres" },
            { menu: "Cgurrascos, Lomitos y Otros" },
            { menu: "Cocktail" },
            { menu: "Vegetariano y Vegano" },
            { menu: "Comidas Preparadas" },
            { menu: "Hielos" },
          ],
        },
        {
          menu: "Desayunos y Dulces",
          sub_menu: [
            { menu: "Desayuno" },
            { menu: "Café y Cafeteras" },
            { menu: "Chocolates y Dulces" },
            { menu: "Galletas y Colaciones" },
            { menu: "Postres y Repostería" },
          ],
        },
        {
          menu: "Ofertas",
          sub_menu: [
            { menu: "Jumbo Prime" },
            { menu: "Jumbo Ofertas" },
            { menu: "Tarjeta Cencosud" },
            { menu: "Puntos Cencosud" },
          ],
        },
        {
          menu: "Exclusivo en Jumbo",
          sub_menu: [
            { menu: "Duendes Mágicos" },
            { menu: "Cuisine & Co" },
            { menu: "Jumbo Artesanal" },
            { menu: "MundoBio" },
            { menu: "Home Care" },
            { menu: "Family Care" },
          ],
        },
        {
          menu: "Bebé",
          sub_menu: [
            { menu: "Pañales" },
            { menu: "Toallas Húmedas" },
            { menu: "Colados,Picados y Otros" },
            { menu: "Leche y Suplementos Infantiles" },
            { menu: "Perfumería Infantil" },
            { menu: "Accesorios de Bebé" },
            { menu: "Vestuario  Bebé" },
            { menu: "Rodados" },
          ],
        },
        {
          menu: "Congelados",
          sub_menu: [
            { menu: "Verduras Congeladas" },
            { menu: "Frutas Congeladas" },
            { menu: "Hamburgesas" },
            { menu: "Nuggets y Apanados" },
            { menu: "Helados y Postres" },
            { menu: "Cgurrascos, Lomitos y Otros" },
            { menu: "Cocktail" },
            { menu: "Vegetariano y Vegano" },
            { menu: "Comidas Preparadas" },
            { menu: "Hielos" },
          ],
        },
        {
          menu: "Desayunos y Dulces",
          sub_menu: [
            { menu: "Desayuno" },
            { menu: "Café y Cafeteras" },
            { menu: "Chocolates y Dulces" },
            { menu: "Galletas y Colaciones" },
            { menu: "Postres y Repostería" },
          ],
        },
        {
          menu: "Ofertas",
          sub_menu: [
            { menu: "Jumbo Prime" },
            { menu: "Jumbo Ofertas" },
            { menu: "Tarjeta Cencosud" },
            { menu: "Puntos Cencosud" },
          ],
        },
        {
          menu: "Exclusivo en Jumbo",
          sub_menu: [
            { menu: "Duendes Mágicos" },
            { menu: "Cuisine & Co" },
            { menu: "Jumbo Artesanal" },
            { menu: "MundoBio" },
            { menu: "Home Care" },
            { menu: "Family Care" },
          ],
        },
        {
          menu: "Bebé",
          sub_menu: [
            { menu: "Pañales" },
            { menu: "Toallas Húmedas" },
            { menu: "Colados,Picados y Otros" },
            { menu: "Leche y Suplementos Infantiles" },
            { menu: "Perfumería Infantil" },
            { menu: "Accesorios de Bebé" },
            { menu: "Vestuario  Bebé" },
            { menu: "Rodados" },
          ],
        },
        {
          menu: "Congelados",
          sub_menu: [
            { menu: "Verduras Congeladas" },
            { menu: "Frutas Congeladas" },
            { menu: "Hamburgesas" },
            { menu: "Nuggets y Apanados" },
            { menu: "Helados y Postres" },
            { menu: "Cgurrascos, Lomitos y Otros" },
            { menu: "Cocktail" },
            { menu: "Vegetariano y Vegano" },
            { menu: "Comidas Preparadas" },
            { menu: "Hielos" },
          ],
        },
        {
          menu: "Desayunos y Dulces",
          sub_menu: [
            { menu: "Desayuno" },
            { menu: "Café y Cafeteras" },
            { menu: "Chocolates y Dulces" },
            { menu: "Galletas y Colaciones" },
            { menu: "Postres y Repostería" },
          ],
        },
      ];
      const {familias} = useSelector(state => state.familia);
      const {showMenuMovil} = useSelector(state => state.global)
    return (
        <div
        className={
          !showMenuMovil ? "header__nav-movil" : "header__nav-movil active"
        }
      >
        <div className="header__options-movil">
          <h3>!Hola!</h3>
          <p>Aún no has seleccionado modo de entrega</p>
          <a href="">Seleccionar</a>
          <div className="header__buttons-options">
            
            <ButtonPrimaryOutline text="Registrate"/>
            <ButtonPrimary text="Ingresa"/>
          </div>
        </div>

        <nav className="header__menu-items">
          {familias.map((item) => (
            <a key={item['id']} className="header__menu-title" href="">
              {item['descripcion']}
            </a>
          ))}
        </nav>
      </div>
     
    )
}

export default NavMovil
