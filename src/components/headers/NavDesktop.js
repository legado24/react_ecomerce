import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFamilias } from "../../features/familia/familiaApi";
 import "./NavDesktop.css";
const NavDesktop = () => {
  const MENU_DESKTOP = [
    {
      menu: "Ofertas",
      priority: 1,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Supermercado",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Lácteos",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Despensa",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Frutas y verduras",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Limpieza",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Carnicería",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Botillería",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
    {
      menu: "Mascotas",
      priority: 0,
      categories: [
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
        {
          name: "Bebé",
          sub_categories: ["Pañales", "Toallas", "Mojados"],
        },
      ],
    },
  ];


  const dispatch = useDispatch();
  const {familias} = useSelector(state => state.familia);
  const {isLoading} = useSelector(state => state.loading);
   
   
   useEffect(() => {
      dispatch(fetchAllFamilias());
  }, [dispatch])
  

  const [isShown, setIsShown] = useState(false);

  if (isShown) {
    document.body.classList.add("overlay");
  } else {
    document.body.classList.remove("overlay");
  }

  const onEnterHover = (index) => () => {
       
    setIsShown(true);
       
    document.getElementById(`header__menu_${index}`).classList.add(`active-navdesk`);
     
   
    document
      .getElementById(`header__menu_drop_${index}`)
      .classList.add("active-navdesk");
      if(index>familias.length/2)
      {
           document.getElementById(`header__menu_${index}`).classList.add('middleright');
          document
          .getElementById(`header__menu_drop_${index}`).classList.add('middleright');
      }

  };

  const onExitHover = (index) => () => {
   
    setIsShown(false);

    document.getElementById(`header__menu_${index}`).classList.remove("active-navdesk");
    document
      .getElementById(`header__menu_drop_${index}`)
      .classList.remove("active-navdesk");


      if(index>familias.length/2)
      {
        document.getElementById(`header__menu_${index}`).classList.remove('middleright');
        document
        .getElementById(`header__menu_drop_${index}`).classList.remove('middleright');
      }

  };
  return (
    <div className="header__nav-desktop">
      <div className="header-menu__item-desktop only">
        <a className={`header__menu only`} href="">
          {MENU_DESKTOP[0].menu}
        </a>
        <div className="header-menu__drop">
          <div className="header-menu__drop-colum">
            <li>asoid</li>
          </div>
        </div>
      </div>
      <div className="header-menu__items">
      
{isLoading?<div>loading</div>:familias.map((familia,index) => {
           return  <div
              key={familia['id']}
              id={`header__menu_${index}`}
              className="header__menu"
              onMouseEnter={onEnterHover(index)}
              onMouseLeave={onExitHover(index)}
            >
              <a className="header__menu" href="">
                {familia['descripcion']}
              </a>
              <div
                id={`header__menu_drop_${index}`}
                className="header-menu__drop"
              >
                {familia['clases'].map((clase,index) => {
                  return ( <div key={clase['id']} className="header-menu__drop-colum">
                      <h1>{clase['descripcion']}</h1>

                      {clase['subclases'].map((subclase,index) => (
                        <li>{subclase[0]}</li>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
        //  ;
        })}
      </div>
    </div>
  );
};

export default NavDesktop;
