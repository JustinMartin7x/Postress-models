const pool = require('../utils/pool');

module.exports = class Characters {
    id;
    name;
    race;
    gender;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.race = row.race;
        this.gender = row.gender;
    }
    //CRUD  Create, Read, Update, Delete
    static async add({ name, race, gender }) {
        const { row } = await pool.query(
            'INSERT INTO books (name, race, gender) VALUES ($1,$2,$3) RETURNING *',
            [name, race, gender]
        );

        return new Book(row[0]);
    }
    static async read(id) {
        const { rows } = await pool.query(
            'Select * FROM books WHERE id=$1',
            [id]
        );
        if (!rows[0]) {
            throw new Error(`no book with id${id}`);
        }
        return new Book(rows[0]);
    }
    static async update(id, { name, race, gender }) {
        const { rows } = await pool.query(

            `UPDATE books
            SET name=$1,
                race=$2,
                gender=$3
            WHERE id=$4
            RETURNING *
            `,
            [name, race, gender]
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
