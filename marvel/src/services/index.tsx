import md5 from "md5";
import axios from "axios";

const publicKey = "6221ced41d8dae9b7c81098342271c5a";

const privateKey = "f80f52e4197b38ba66d4f2944ded284f5046e072";

const dateTime = Number(new Date());

const hash = md5(dateTime + privateKey + publicKey);

const comicsURL = `http://gateway.marvel.com/v1/public/comics?ts=${dateTime}&apikey=${publicKey}&hash=${hash}`;

const heroesURL = `http://gateway.marvel.com/v1/public/characters?ts=${dateTime}&apikey=${publicKey}&hash=${hash}`;

export const apiComics = comicsURL;

export const apiHeroes = heroesURL;

const apiRegister = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});

export default apiRegister;
