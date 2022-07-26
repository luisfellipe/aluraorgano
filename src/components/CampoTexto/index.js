import React from "react";
import "./CampoTexto.css"
const CampoTexto = function(props){
  const saveChange = (event) => {
    props.setInput(event.target.value);
    
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
        onChange={saveChange} 
        value={props.value}
        required={props.required}
        type={props.type} 
        placeholder={props.placeholder}
       />
    </div>
  );
}
export default CampoTexto;