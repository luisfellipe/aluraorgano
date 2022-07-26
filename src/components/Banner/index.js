import React from "react";
import "./Banner.css"

const Banner = function(){
  return (
    <div className="banner">
      <img src={process.env.PUBLIC_URL + "/imagens/banner.png"} alt="Banner principal da página"/>
    </div>
  )
}

export default Banner;