require('dotenv').config();
const express = require('express');
const Book = require('./lib/models/Books');
const Characters = require('./lib/models/Characters');
const Authors = require('./lib/models/Authors');
const Series = require('./lib/models/Series');
const Fans = require('./lib/models/Fans');
const app = express();
app.use(express.json());

//CRUD  Create, Read, Update, Delete
//Books
app.post('/books', (req, res) => {
    Book
        .add(req.body)
        .then(book => res.send(book));
});
app.get('/books', (req, res) => {
    Book
        .read(req.body.id)
        .then(book => res.send(book));
});
app.post('/books', (req, res) => {
    Book
        .update(req.body.id)
        .send(book => res.send(book));
});
app.delete('/books', (req, res) => {
    Book
        .delete(req.body.id)
        .send(book => res.send(book));
});
//Characters
app.post('/characters', (req, res) => {
    Characters
        .add(req.body)
        .then(character => res.send(character));
});
app.get('/characters', (req, res) => {
    Characters
        .read(req.body.id)
        .then(character => res.send(character));
});
app.post('/characters', (req, res) => {
    Characters
        .update(req.body.id)
        .send(character => res.send(character));
});
app.delete('/characters', (req, res) => {
    Characters

        .delete(req.body.id)
        .send(character => res.send(character));
});
//Authors
app.post('/authors', (req, res) => {
    Authors
        .add(req.body)
        .then(author => res.send(author));
});
app.get('/authors', (req, res) => {
    Authors
        .read(req.body.id)
        .then(author => res.send(author));
});
app.post('/authors', (req, res) => {
    Authors
        .update(req.body.id)
        .send(author => res.send(author));
});
app.delete('/authors', (req, res) => {
    Authors
        .delete(req.body.id)
        .send(author => res.send(author));
});
// Series
app.post('/series', (req, res) => {
    Series
        .add(req.body)
        .then(series => res.send(series));
});
app.get('/series', (req, res) => {
    Series
        .read(req.body.id)
        .then(series => res.send(series));
});
app.post('/series', (req, res) => {
    Series
        .update(req.body.id)
        .send(series => res.send(series));
});
app.delete('/series', (req, res) => {
    Series
        .delete(req.body.id)
        .send(series => res.send(series));
});
// Fans
app.post('/fans', (req, res) => {
    Fans
        .add(req.body)
        .then(fan => res.send(fan));
});
app.get('/fans', (req, res) => {
    Fans
        .read(req.body.id)
        .then(fan => res.send(fan));
});
app.post('/fans', (req, res) => {
    Fans
        .update(req.body.id)
        .send(fan => res.send(fan));
});
app.delete('/fans', (req, res) => {
    Fans
        .delete(req.body.id)
        .send(fan => res.send(fan));
});



app.listen('3000', () => {
    console.log('im listening on 3000');
});
