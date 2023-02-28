import express from "express";

const app = express();

const livros = [
{id: 1, "titulo": "senho dos Aneis"},
{id: 2, "titulo": "O Hobiit"},
]

app.get('/')