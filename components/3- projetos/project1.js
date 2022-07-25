import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const imagem =
    "https://github.com/Karadarevic/Rent-a-car/blob/main/preview2.PNG?raw=true";

  return (
    <div className="preview">
      <div className="main-info">
        <img alt="change" className="changing" src={imagem} />

        <div className="details">
          <p>
            Este foi um dos primeiros projetos que busquei no Front-End Mentor,
            design simples que consiste em uma div centralizada contendo três
            divs de mesmo tamanho, um ícone no topo, o título a que se refere a
            coluna (sedans, suvs ou luxury), a descrição de cada uma e um botão
            que, em um projeto real, levaria a uma página para alugal um carro
            do tipo clicado .
          </p>
          <div className="links">
            <a href="https://github.com/Karadarevic/Rent-a-car" target="_blank">
              {" "}
              Link do repositório{" "}
            </a>
            <a href="/" target="_blank">
              {" "}
              Link do projeto on-line
            </a>
          </div>
        </div>
      </div>
      <div className="tecnics">
        <img
          className="icon"
          alt="react-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          className="icon"
          alt="css3-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        />
        <img
          className="icon"
          alt="html5-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        />
      </div>
    </div>
  );
};
