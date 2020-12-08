const pool = require('../utils/pool');

module.exports = class Fans {
    id;
    name;
    crazy_level;
    favorite_author;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.crazy_level = row.crazy_level;
        this.favorite_author = row.favorite_author;
    }
    //CRUD  Create, Read, Update, Delete
    static async add({ name, crazy_level, favorite_author }) {
        const { rows } = await pool.query(
            'INSERT INTO fans (name, crazy_level, favorite_author) VALUES ($1,$2,$3) RETURNING *',
            [name, crazy_level, favorite_author]
        );

        return new Fans(rows[0]);
    }
    static async read(id) {
        const { rows } = await pool.query(
            'Select * FROM fans WHERE id=$1',
            [id]
        );
        if (!rows[0]) {
            throw new Error(`no fan with id${id}`);
        }
        return new Fans(rows[0]);
    }
    static async update(id, { name, crazy_level, favorite_author }) {
        const { rows } = await pool.query(

            `UPDATE fans
            SET name=$1,
                crazy_level=$2,
                favorite_author=$3
            WHERE id=$4
            RETURNING *
            `,
            [name, crazy_level, favorite_author]
        );
        return new Fans(rows[0]);
    }
    static async delete(id) {
        const { rows } = await pool.query(
            'DELETE FROM fans Where id=$1, RETURNING *',
            [id]
        );
        return new Fans(rows[0]);
    }
};
