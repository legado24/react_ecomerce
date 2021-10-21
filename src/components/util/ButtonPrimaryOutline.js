import React from 'react'
import './ButtonPrimaryOutline.css'
const ButtonPrimaryOutline = ({text}) => {
    return (
        <input
              className="btn header__button_registrar"
              type="button"
              value={text}
            />
    )
}

export default ButtonPrimaryOutline
