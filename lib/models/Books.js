const pool = require('../pool');

module.exports = class Book {
    id;
    title;
    author;
    genre;

    constructor(row) {
        this.id = row.id;
        this.title = row.title
    }

}