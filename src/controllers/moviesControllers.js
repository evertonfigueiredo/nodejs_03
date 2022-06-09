const movies = require("../models/movies.json");
const axios = require("axios");

// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

const home = (req, res) => {
  res.status(200).send({
    message: "Olá pessoa, seja bem vinda à API Teraflix! (: ",
  });
};

// visualizar todos os filmes

const getAll = (req, res) => {
  res.status(200).send(movies);
};

// consumir lista de filmes de api terceira utilizando fetch

const getAllGhibliMovies = async (req, res) => {
  try {
    const url = "https://ghibliapi.herokuapp.com/films";

    const response = await axios.get(url);
    const data = response.data;
    res.status(200).send(data);
  } catch (e) {
      console.error(e);
  }
};

module.exports = {
  home,
  getAll,
  getAllGhibliMovies,
};
