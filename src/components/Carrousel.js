import React, { useEffect, useState } from "react";
import "./Carrousel.css";
const Carrousel = () => {
  const data = ["https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY", 
  "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY", 
  "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
  ];

  const [slideIndex, setSlideIndex] = useState(1);

        setTimeout(() => {
            nextSlide();
        }, 3000);

    const nextSlide=()=>{
        if(slideIndex!==data.length){
            setSlideIndex(slideIndex+1)
        }else if(slideIndex===data.length){
             setSlideIndex(1)
        }
    }
    const prevSlide=()=>{
        if(slideIndex!==1){
            setSlideIndex(slideIndex-1)
        }else if(slideIndex===1){
            setSlideIndex(data.length)
        }
    }


  return (
     
      <div  className="carrousel">
      <div className="carrousel__container">
        {data.map((item, indx) => {
            console.log(slideIndex)
          return<div key={indx} className={`${slideIndex===indx+1?'slide active-anim':'slide'}`}><img  src={item} /></div> ;
        })}
        
      </div>
      {/* <h1 onClick={nextSlide}>aaaaaa</h1> */}
    </div>
     
  );
};

export default Carrousel;
