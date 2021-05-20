const express = require('express');
const mongoose = require('mongoose');

const Content = require('./models/content');

require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://Benrix0:${process.env.PSWDMONGODB}@cluster0.kx2wg.mongodb.net/cine-series?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.post('/add-content', (req, res) => {
    const content = new Content({
        ...req.query
    });

    content.save()
        .then(() => res.status(201).json({ message: 'Content registered' }))
        .catch(error => res.status(400).json({ error }));
});

app.put('/edit-content', (req, res) => {
    req.query['platforms'] = (req.query['platforms']).split(', ')
    Content.updateOne({ _id: req.query['id'] }, { ...req.query })
        .then(content => res.status(200).json(content))
        .catch(error => res.status(400).json({ error }))
});

app.delete('/delete-content', (req, res) => {
    Content.deleteOne({ _id: req.query['id'] })
        .then(() => res.status(200).json({ message: 'contenu supprimé' }))
        .catch(error => res.status(400).json({ error }))
})

app.get('/get-content', (req, res) => {
    if (req.query['byID'] == 0) {
        Content.find()
            .then(content => {
                res.status(200).json(content);
            })
            .catch(error => {
                res.status(400).json({ error })
            })
    } else {
        Content.findOne({ _id: req.query['id']})
            .then(content => res.status(200).json(content))
            .catch(error => res.status(400).json({ error }));
    }
});

module.exports = app;