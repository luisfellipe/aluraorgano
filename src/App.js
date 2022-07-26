import React, { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Time from "./components/Time";
function App() {
  const times = [
    {
      nome: "-",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
      id: 0,
    },

    { nome: "DevOps", corPrimaria: "#e06b69", corSecundaria: "#fde7e8", id: 1 },
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
      id: 2,
    },
    { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9", id: 3 },
    {
      nome: "UX Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
      id: 4,
    },
    {
      nome: "Front End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
      id: 5,
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
      id: 6,
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
      id: 7,
    },
    {
      nome: "Desenvolvedora de software e instrutora",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
      id: 8,
    },
  ];
  const [employes, setEmployes] = useState([]);
  /*const membros = [
    {
      nome: "Juliana Amoasei",
      cargo: "Desenvolvedora de software e instrutora",
      id: 0,
      imagem: https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
      
        "https://www.alura.com.br/assets/img/imersoes/instrutores/juliana_amoasei.1647533644.jpg",
     
        "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg",
 
      imagem: "https://github.com/luisfellipe.png",
*/

  const setEmploye = (employer) => {
    console.log(employer);
    setEmployes([...employes, employer]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => {
          return {
            nome: time.nome,
            id: time.id,
            corPrimaria: time.corPrimaria,
          };
        })}
        onEmployeRegistered={(employer) => setEmploye(employer)}
      />

      {times.map((time) => {
        return (
          <Time
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            key={time.id}
            nomeTime={time.nome}
            membros={employes
              .filter((emp) => emp.time === time.nome)
              .map((membro) => {
                console.log("membro", membro);
                return {
                  ...membro,
                  corPrimaria: time.corPrimaria,
                };
              })}
          />
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
