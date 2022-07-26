import React from "react";
import "./Botao.css"

const Botao = function(props){

  return (
    <button>
      {props.children}
    </button>
  );
}

export default Botao;