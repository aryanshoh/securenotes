const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.userId });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const note = new Note({
            ...req.body,
            user: req.userId
        });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate(
            { _id: req.params.id, user: req.userId },
            req.body,
            { new: true }
        );
        if (!note) {
            return res.status(404).json({ error: 'Заметка не найдена' });
        }
        res.json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ 
            _id: req.params.id, 
            user: req.userId 
        });
        if (!note) {
            return res.status(404).json({ error: 'Заметка не найдена' });
        }
        res.json({ message: 'Заметка удалена' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
