import React, { useState } from "react";
import "./index.css";
import Project1 from "./project1.js";
import Project2 from "./project2.js";
import Project3 from "./project3.js";
import Project4 from "./project4.js";
import Project5 from "./project5";

export default () => {
  // array com as imagens
  let imagens = {
    img1: "https://github.com/Karadarevic/Rent-a-car/blob/main/preview2.PNG?raw=true",
    img2: "https://github.com/Karadarevic/Form/blob/main/preview.PNG?raw=true",
    img3: "https://github.com/Karadarevic/Preview-Page/blob/main/preview.PNG?raw=true",
    img4: "https://github.com/Karadarevic/Music-order/blob/main/preview.PNG?raw=true",
    img5: "https://github.com/Karadarevic/Movie-list/blob/main/preview.PNG?raw=true",
  };

  const [preview, setPreview] = useState();
  // <p className="default"> Clique nas miniaturas para ver mais. </p>

  const [button, setButton] = useState();

  function show() {
    setButton(
      <button
        className="excludes"
        onClick={() => {
          setPreview("");
          setButton("");
        }}
      >
        \/
      </button>
    );
    window.scroll(0, 2000);
  }

  return (
    <section>
      {/* lista de projetos */}
      <div className="projectRow--list">
        <div
          onClick={() => {
            setPreview(Project1);
            show();
          }}
        >
          <img alt="project1" className="projectRow--item" src={imagens.img1} />
        </div>
        <div
          onClick={() => {
            setPreview(Project2);
            show();
          }}
        >
          <img alt="project2" className="projectRow--item" src={imagens.img2} />
        </div>
        <div
          onClick={() => {
            setPreview(Project3);
            show();
          }}
        >
          <img alt="project2" className="projectRow--item" src={imagens.img3} />
        </div>
        <div
          onClick={() => {
            setPreview(Project4);
            show();
          }}
        >
          <img alt="project2" className="projectRow--item" src={imagens.img4} />
        </div>
        <div
          onClick={() => {
            setPreview(Project5);
            show();
          }}
        >
          <img alt="project2" className="projectRow--item" src={imagens.img5} />
        </div>
      </div>
      {preview}
      {button}
    </section>
  );
};
