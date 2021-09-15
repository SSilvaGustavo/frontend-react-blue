import React from "react";
import FilmList from "../../components/structure/FilmList/FilmList";
import "./Home.scss";

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Listagem de Filmes</h1>
      <div className="content-list">
        <h1>Projeto de Filmes</h1>
        <FilmList />
      </div>
    </section>
  );
};

export default Home;
