import React from "react";
import "./Membro.css";
function Membro({ nome, cargo, imagem, corPrimaria }) {
  return (
    <div className="membro">
      <div className="header" style={{ backgroundColor: corPrimaria }}>
        <div
          className="box-imagem"
          style={{ backgroundImage: `url(${imagem})` }}
        ></div>
      </div>

      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

export default Membro;
