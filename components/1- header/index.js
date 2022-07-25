import React from "react";
import "./index.css";

export default () => {
  return (
    <header>
      <a
        href="https://www.linkedin.com/in/lucas-vuletic-915a64191/"
        target="_blank"
      >
        <img
          className="icon"
          alt="linkedin--icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
        />
      </a>
      <a href="https://github.com/Karadarevic" target="_blank">
        <img
          className="icon"
          alt="github--icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        />
      </a>
      <a href="mailto:lucasvuletic@gmail.com" target="_blank">
        <img
          className="icon"
          alt="gmail--icon"
          src="https://cdn-icons-png.flaticon.com/512/104/104069.png"
        />
      </a>
      <a href="https://contate.me/lucas.vuletic" target="_blank">
        <img
          className="icon"
          alt="whatsapp--icon"
          src="https://cdn-icons-png.flaticon.com/512/154/154858.png"
        />
      </a>
      <a
        href="https://drive.google.com/uc?export=download&id=1DGew2hwmNtRnskjxtdcNWlXZH4Wxsvw_"
        target="_blank"
      >
        <img
          className="icon"
          alt="curriculum--icon"
          src="https://cdn-icons-png.flaticon.com/512/1412/1412114.png"
        />
      </a>
    </header>
  );
};
