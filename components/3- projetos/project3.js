import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const imagem =
    "https://github.com/Karadarevic/Preview-Page/blob/main/preview.PNG?raw=true";

  return (
    <div className="preview">
      <div className="main-info">
        <img alt="change" className="changing" src={imagem} />

        <div className="details">
          <p>
            Uma landing page do FrontendMentor, tentei fazer da forma mais
            simples e com menos código possível considerando que é uma página
            bem simples
          </p>
          <div className="links">
            <a
              href="https://github.com/Karadarevic/Preview-Page"
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
