import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const imagem =
    "https://github.com/Karadarevic/Music-order/blob/main/preview.PNG?raw=true";

  return (
    <div className="preview">
      <div className="main-info">
        <img alt="change" className="changing" src={imagem} />

        <div className="details">
          <p>
            O primeiro de vários cards que fiz pelo frontendMentor, também o que
            eu mais gostei porque tem a ver com música. A primeira versão era um
            caos de div's, recentemente fiz uma revisão no código e deixei bem
            mais simples, exclui muitas div's e fiz um uso melhor do display
          </p>
          <div className="links">
            <a
              href="https://github.com/Karadarevic/Music-order"
              target="_blank"
            >
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
