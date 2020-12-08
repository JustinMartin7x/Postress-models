const Books = require('./lib/models/Books');
const request = require('supertest');
const express = require('express');
const Book = require('./lib/models/Books');
require('dotenv').config();

const app = express();
app.use(express.json());


const newBook = {
  'title': 'Enders Game',
  'author': 'Orson Scott Card',
  'genre': 'Scifi'
};
const expectedResponse = {
  'id': 3,
  'title': 'Enders Game',
  'author': 'Orson Scott Card',
  'genre': 'Scifi'

};

describe('POST /books', () => {
  it('responds with the new book added', async () => {
    return await request(app)
      .post('/books')
      .send(newBook)
      .then(response  => {
          console.log(response._data);
        expect(response).toEqual(expectedResponse);
      });

  });
});
app.listen('3001', () => {
  console.log('im listening on 3001');
});
