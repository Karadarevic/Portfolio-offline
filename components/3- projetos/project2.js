import React from "react";

export default () => {
  const imagem =
    "https://github.com/Karadarevic/Form/blob/main/preview.PNG?raw=true";

  return (
    <div className="preview">
      <div className="main-info">
        <img alt="change" className="changing" src={imagem} />

        <div className="details">
          <p>
            Este foi o último formulário que criei, também peguei o projeto no
            FrontendMentor e fiz a validação por campo. Todos os campos devem
            estar preenchidos, se algum não estiver vai aparecer um erro em
            baixo do campo vazio dizendo que aquele campo deve ser preenchido
          </p>
          <div className="links">
            <a href="https://github.com/Karadarevic/Form" target="_blank">
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
        <img
          className="icon"
          alt="javascript-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
      </div>
    </div>
  );
};
