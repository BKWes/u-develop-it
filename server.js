const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false} ));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'C0d!ng22',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.get('/', (req,res) => {
    res.json({
        message: 'Hello world'
    });
});

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err,res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
// });

// default response for any other request (NOT FOUND)
app.use((req,res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});