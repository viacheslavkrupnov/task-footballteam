import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import s from './imageSlider.module.css';
import React from 'react'
 
const ImageSlider = ({images}) => { 

  const settings = { 
    infinite: true, 
    dots: true, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    lazyLoad: true, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  }; 

  return ( 
    <> 
    <div className={s.tag}> 
    </div> 
      <div className={s.imgSlider}> 
        <Slider {...settings}> 
          {images.map((item) => ( 
            <div key={item.id}> 
              <img src={item.src}  alt={item.alt} className={s.slickSlide}/> 
            </div> 
          ))} 
        </Slider> 
      </div> 
    </> 
  ) 
} 

export default ImageSlider;