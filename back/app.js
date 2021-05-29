const express = require('express');
const mongoose = require('mongoose');

const Content = require('./models/content');
const Platform = require('./models/platforms');

require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://Benrix0:${process.env.PSWDMONGODB}@cluster0.kx2wg.mongodb.net/cine-series?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/add-content', (req, res) => {
    req.query['platforms'] = (req.query['platforms']).split(', ')
    const content = new Content({
        ...req.query
    });

    content.save()
        .then((content) => res.status(201).json({ id: content['_id']}))
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

app.post('/edit-platforms', (req, res) => {
    req.query['platforms'] = (req.query['platforms']).split(', ');
    Platform.updateOne({ _id: '60ab8aca02498133f4f6925b'}, {...req.query})
        .then((platforms) => {
            res.status(200).json(platforms);
        })
        .catch((err) => {
            res.status(400).json({ error })
        });
})

app.get('/get-platforms', (req, res) => {
    Platform.findOne({ _id: '60ab8aca02498133f4f6925b'})
        .then(platforms => res.status(200).json(platforms['platforms']))
        .catch(err => res.status(400).json({ err }));
})

module.exports = app;