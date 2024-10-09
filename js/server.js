const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt.js');


const SECRET_KEY = 'LeaoProerd';

app.use(cors());

app.get('/dados', (req, res) => {
    res.json({ message: 'Requisição recebida com sucesso!' });
});


app.use(bodyParser.json());


// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_system'
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.sendStatus(200); // Login bem-sucedido
        } else {
            res.status(400).send('Usuario já existe');
        }
    });
});

app.post('/register', async (req, res) => {
    hashedPassword } , (err, result) => {
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
        if (err) throw err;
        res.sendStatus(201); // Usuário registrado com sucesso
    });
});

if (result.length === 0 || ! (await bcrypt.compare(password, result[0].password))) {
    return res.status(400).send('Email ou senha inválidos')
}


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
