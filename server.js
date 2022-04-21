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

// default response for any other request (NOT FOUND)
app.use((req,res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});