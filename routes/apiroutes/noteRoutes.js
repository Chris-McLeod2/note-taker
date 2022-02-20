const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const notes = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(noteArray);
});


router.post('/api/notes', (req, res) => {
    let note = req.body;
    let arrayLength = (noteArray.length).toString();
    note.id = arrayLength;
    noteArray.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteArray));
    res.json(noteArray);
})