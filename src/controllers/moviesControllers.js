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

// metodo para criar um novo filme

// cadastrar novo filme
const createMovie = (req, res) => {
    // acessar os dados enviados na requisição
    let requestedTitle = req.body.title;
    let requestedGenre = req.body.genre;

    if (requestedTitle && requestedGenre) {
        let newMovie = {
            "id": Math.random().toString(32).substr(2, 6),
            "addedAt": new Date(),
            "title": requestedTitle,
            "genre": requestedGenre
        };

        movies.push(newMovie);

        // enviar uma resposta
        res.status(201).send({
            "mensagem": "Filme adicionado com sucesso",
            newMovie
        });
    } else {
        res.status(404).send({
            "message": "Não foi possível cadastrar um novo filme. Por favor, insira todas as informações necessárias"
        })
    }
};


//  fazer metodo para deletar um filme
const deleteMovieById = (req, res) => {
    const requestedId = req.params.id;
    const filteredMovie = movies.find(movie => movie.id == requestedId);

    const index = movies.indexOf(filteredMovie);

    movies.splice(index, 1);

    res.status(200).json([{
        "mensagem": "Filme deletado com sucesso",
        movies
    }]);
};

module.exports = {
  home,
  getAll,
  getAllGhibliMovies,
  createMovie,
  deleteMovieById
};
