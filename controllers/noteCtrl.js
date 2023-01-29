const Notes = require('../models/noteModel');

const noteCtrl = {
    getNotes: async (req, res) => {
        try {
            const notes = await Notes.find({ user_id: req.user.id });
            res.json(notes);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createNote: async (req, res) => {
        try {
            const { title, content } = req.body;
            const newNote = new Notes({
                title,
                content,
                user_id: req.user.id,
            });
            await newNote.save();
            res.json({ msg: 'created a note' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
}

module.exports = noteCtrl;