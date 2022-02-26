/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Url } from "url";
import "./App.css";
import { apiComics, apiHeroes } from "./services";

interface heroes {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}

function App() {
  const [comics, setComics] = useState([]);

  const [Heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(apiComics)
      .then((response) => response.json())
      .then((response) => setComics(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(apiHeroes)
      .then((response) => response.json())
      .then((response) => setHeroes(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(Heroes);

  return (
    <div className="App">
      <header>Olá mundo</header>
      {Heroes &&
        Heroes.map((heroes: heroes) => (
          <>
            <div>{heroes.name}</div>
            <div>{heroes.id}</div>
            <img
              src={heroes.thumbnail.path + "." + heroes.thumbnail.extension}
              alt="imagem"
            />
          </>
        ))}
    </div>
  );
}

export default App;
