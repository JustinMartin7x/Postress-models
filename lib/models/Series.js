const pool = require('../utils/pool');

module.exports = class Series {
    id;
    name;
    genre;
    number_of_books_in_series;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.genre = row.genre;
        this.number_of_books_in_series = row.number_of_books_in_series;
    }
    //CRUD  Create, Read, Update, Delete
    static async add({ name, genre, number_of_books_in_series }) {
        const { row } = await pool.query(
            'INSERT INTO series (name, genre, number_of_books_in_series) VALUES ($1,$2,$3) RETURNING *',
            [name, genre, number_of_books_in_series]
        );

        return new Series(row[0]);
    }
    static async read(id) {
        const { rows } = await pool.query(
            'Select * FROM series WHERE id=$1',
            [id]
        );
        if (!rows[0]) {
            throw new Error(`no series with id${id}`);
        }
        return new Series(rows[0]);
    }
    static async update(id, { name, genre, number_of_books_in_series }) {
        const { rows } = await pool.query(

            `UPDATE series
            SET name=$1,
                genre=$2,
                number_of_books_in_series=$3
            WHERE id=$4
            RETURNING *
            `,
            [name, genre, number_of_books_in_series]
        );
        return new Series(rows[0]);
    }
    static async delete(id) {
        const { rows } = await pool.query(
            'DELETE FROM series Where id=$1, RETURNING *',
            [id]
        );
        return new Series(rows[0]);
    }
};
