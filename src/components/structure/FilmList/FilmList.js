import React, { useEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import "../FilmList/FilmList.scss";

const FilmList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilm();
  }, []);

  const url = "http://localhost:3001/filmes";

  const getFilm = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    setFilmes(data);
  };

  return (
    <div className="list">
      {filmes.map((filme, index) => (
        <FilmCard filme={filme} key={filme._id} />
      ))}
    </div>
  );
};

export default FilmList;
