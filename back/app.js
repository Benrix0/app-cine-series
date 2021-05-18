const express = require('express');
const mongoose = require('mongoose');

const Content = require('./models/content');

require('dotenv').config()

const app = express();

mongoose.connect(`mongodb+srv://Benrix0:${process.env.PSWDMONGODB}@cluster0.kx2wg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.post('/add-content', (req, res) => {
    delete req.body._id;

    const content = new Content({
        ...req.body
    });

    content.save()
        .then(() => res.status(201).json({ message: 'Content registered'}))
        .catch(error => res.status(400).json({ error }));
})

module.exports = app;