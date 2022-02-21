const express = require('express');
const db = require('./db/db.json');
const path = require('path');
const fs = require('fs');


//making the database readable 
let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

//calling express
const app = express();

//setting local port
const PORT = process.env.PORT || 3001;

//linking all public assets
app.use(express.static('public'));

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});
app.post('/api/notes', (req, res) => {
    let note = req.body;
    let notesLength = (notes.length).toString();
    note.id = notesLength;
    notes.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//setting the app to listen to the port defined above
app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}/`);
})