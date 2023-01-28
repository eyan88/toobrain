import Note from './Note';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            await fetch(`${process.env.REACT_APP_MOCK_URI}/api/notes`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => {
                    const notes = []
                    for (const key in data) {
                        data[key].id = key;
                        notes.push(data[key])
                    }
                    console.log(notes);
                    setNotes(notes);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
            <div className='p-6 grid grid-cols-1 gap-2 overflow-auto md:grid-cols-2 md:gap-5 lg:grid-cols-6 lg:gap-5'>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                ))}
            </div>
        </>
    )
};

export default Home;