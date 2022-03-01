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
  urls: { type: string; url: string };
  description: string;
}

function App() {
  const [Comics, setComics] = useState([]);

  const [Heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(apiComics)
      .then((response) => response.json())
      .then((response) => setComics(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(apiHeroes)
      .then((response) => response.json())
      .then((response) => setHeroes(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(Heroes);
  console.log(Comics);

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
            <div>{heroes.description}</div>
          </>
        ))}

      {Comics &&
        Comics.map((comic: heroes) => (
          <>
            <div>{comic.name}</div>
            <div>{comic.id}</div>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="imagem"
            />
            <div>{comic.urls.url}</div>
          </>
        ))}
    </div>
  );
}

export default App;
