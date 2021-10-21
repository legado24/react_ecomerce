import React from 'react'
import './ButtonPrimary.css'
const ButtonPrimary = ({text}) => {
    return (
        <input
              className="btn header__button_ingresar"
              type="button"
              value={text}
            />
    )
}

export default ButtonPrimary
