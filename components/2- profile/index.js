import React, { useState } from "react";
import "./index.css";
import Profile from "../midia/profile.jpg";

export default () => {
  const [showText, setShowText] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const showOrHide = () => {
    if (showText === false) {
      setShowText(true);
    } else {
      setShowText(false);
    }
    if (window.innerHeight <= 800) {
      setShowProfile(false);
    }
  };

  return (
    <div className="box">
      <div className="about">
        {" "}
        <h1>
          Olá, sou o Lucas <br></br> Dev Front-End
        </h1>
        <button onClick={showOrHide}></button>
        {showText ? (
          <p>
            Desenvolvo páginas usando React, Javascript, HTML5 e CSS3. Comecei a
            estudar desenvolvimento web voltado para o Front-End em 2021 visando
            mudar de carreira. Até então cursava direito na Universidade Federal
            do Rio de Janeiro e estagiava em escritório de advocacia. No inicio
            de 2022 iniciei o curso de Análise e Desenvolvimento de Sistemas
            pela Universidade Estácio de Sá e, no mês de Junho, me desliguei do
            estágio jurídico e tranquei a faculdade de direito para me dedicar
            integralmente à programação. Abaixo estão alguns projetos que ja fiz
            e as respectivas ferramentas usadas em baixo, ao terminar de ver é
            só clicar na seta no fim da página para fechar
          </p>
        ) : null}
      </div>
      {showProfile ? (
        <img className="profile" src={Profile} alt="Lucas-profile" />
      ) : null}
    </div>
  );
};
