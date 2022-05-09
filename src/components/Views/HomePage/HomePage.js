import React from "react";
import Partners from "../../Partners";

// import { useState, useEffect } from 'react';
// import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
import images from "../../Images/images"; 
import ImageSlider from "../../Images/imageSlider";

export default function HomePage() {
  return (
    <>
    <div className={s.pageWraper}>
          <div className={s.obernul}>
            <ImageSlider images={images}/> 
            <Partners/>
          </div>
      </div>      
    </>
  );
}