import express from 'express';

const app = express();
const livros = [
    {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J. R. R. Tolkien'},
    {id: 2, titulo: 'Harry Potter', autor: 'J. K. Rowling'},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso Node');
});


app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

export default app;