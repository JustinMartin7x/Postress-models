const express = require('express');
const Book = require('./lib/models/Books');
const app = express();


//CRUD  Create, Read, Update, Delete

app.post('/books', (req, res) => {
    Book
        .create(req.body)
        .then(book => res.send(book));
});
app.get('/books', (req, res) => {
    Book
        .read()
        .then(book => res.send(book));
});
app.post('/books', (req, res) => {
    Book
        .update(req.body)
        .send(book => res.send(book));
});
app.delete('/books', (req, res) => {
    Book
        .delete()
        .send(book => res.send(book));
});


module.exports = app;