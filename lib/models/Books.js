const pool = require('../utils/pool');

module.exports = class Book {
    id;
    title;
    author;
    genre;

    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.author = row.author;
      this.genre = row.genre;
    }
    //CRUD  Create, Read, Update, Delete
    static async add({ title, author, genre }) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, author, genre) VALUES ($1,$2,$3) RETURNING *',
        [title, author, genre]
      );

      return new Book(rows[0]);
    }
    static async read(id) {
      const { rows } = await pool.query(
        'Select * FROM books WHERE id=$1',
        [id]
      );
      if(!rows[0]) {
        throw new Error(`no book with id${id}`);
      }
      return new Book(rows[0]);
    }
    static async update(id, { title, author, genre }) {
      const { rows } = await pool.query(

        `UPDATE books
            SET title=$1,
                author=$2,
                genre=$3
            WHERE id=$4
            RETURNING *
            `,
        [title, author, genre]
      );
      return new Book(rows[0]);
    }
    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM books Where id=$1, RETURNING *',
        [id]
      );
      return new Book(rows[0]);
    }
};
