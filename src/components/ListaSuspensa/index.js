import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = function(props) {
  return (
    <div className="lista-suspensa">
      <label className="labelItem">{props.label}</label>
      <select
        className="selectLista"
        style={{ backgroundColor: props.corPrimaria }}
        onChange={(event) => props.setInput(event.target.value)}
        value={props.value}
        required={props.required}
      >
        {props.itens.map((item) => {
          return <option key={item.id}>{item.nome}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
