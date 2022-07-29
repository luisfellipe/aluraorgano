import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BotaoAddCard from "../BotaoAddCard";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Form.css";

const Form = function(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const setInputs = (event) => {
    event.preventDefault();
    const membro = {
      id: String(uuidv4()),
      cargo,
      nome,
      imagem,
      time,
    };
    props.onEmployeRegistered(membro);
    setCargo("");
    setImagem("");
    setNome("");
    setTime("");
  };

  return (
    <section className="sectionForm">
      <form className="formMembro" onSubmit={setInputs}>
        <h2 className="tituloForm">
          Preencha os dados para criar o card do colaborador
        </h2>

        <CampoTexto
          value={nome}
          setInput={(value) => setNome(value)}
          required={true}
          type="text"
          label="Nome"
          placeholder="Insira seu nome"
        />

        <CampoTexto
          value={cargo}
          setInput={(value) => setCargo(value)}
          required={true}
          type="text"
          label="Cargo"
          placeholder="Insira seu cargo"
        />

        <CampoTexto
          value={imagem}
          setInput={(value) => setImagem(value)}
          required={true}
          type="text"
          label="Imagem"
          placeholder="Insira o link da imagem"
        />

        <ListaSuspensa
          corPrimaria={props.corPrimaria}
          value={time}
          setInput={(value) => setTime(value)}
          required={true}
          label="Time"
          itens={props.times}
        />

        <BotaoAddCard>
          <p>Criar Card</p>
        </BotaoAddCard>
      </form>
    </section>
  );
};

export default Form;
