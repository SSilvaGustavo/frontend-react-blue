import React from "react";
import "./FilmCard.scss";

const FilmCard = (props) => {
  const filme = props.filme;

  return (
    <div className="card">
      <div className="card-img">
        <img src={filme.imagem} alt="" />
      </div>
      <p className="card-text">{filme.nome}</p>
      <span className="card-info">{filme.genero}</span>
      <details>
        <p>{filme.sinopse}</p>
      </details>
    </div>
  );
};

export default FilmCard;
