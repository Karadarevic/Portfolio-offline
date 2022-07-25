import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const imagem =
    "https://github.com/Karadarevic/Movie-list/blob/main/preview.PNG?raw=true";

  return (
    <div className="preview">
      <div className="main-info">
        <img alt="change" className="changing" src={imagem} />

        <div className="details">
          <p>
            This was my first project using javascript without a tutorial that
            shows how to build the intire project. When you open the file
            there's three movie-posters in it already, they're been render by a
            simples system that uses a list of links and a loop that write the
            image one by one until the list.length is over you can add new
            posters by copying a link in the input and clicking the button you
            cann also remove posters by clicking the respective poster you want
            out I had a few problems doing this: first my loop wasn't working
            properly, it was re-writing the html erasing whole the page and
            setting only the first image with the original dimensions after i
            fixed this, the default posters were been writen outside the proper
            div, but the new posters were in the right place, so instead of the
            new appears on the side of the default, they were pushing it down
            Becouse of this problem i also couldn't exclude the default posters,
            only the new ones i fixed all by moving the tag "script" inside the
            div where all of this should happen so now is working properly
          </p>
          <div className="links">
            <a href="https://github.com/Karadarevic/Movie-list" target="_blank">
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
          alt="javascript-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
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
