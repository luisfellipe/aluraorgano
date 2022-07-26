import React from "react";
import Membro from "../Membro";

import "./Time.css";

function Time(props) {
  return (
    <section style={{ backgroundColor: props.corSecundaria }} className="time">
      <div className="time-box">
        <h3 className="nomeTimeTitulo">
          {props.nomeTime}
          <div
            style={{ borderColor: props.corPrimaria }}
            className="borda-inferior"
          ></div>
        </h3>

        <div className="membros">
          {props.membros.map((membro) => {
            return (
              <Membro
                key={membro.id}
                imagem={membro.imagem}
                cargo={membro.cargo}
                nome={membro.nome}
                corPrimaria={membro.corPrimaria}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Time;
