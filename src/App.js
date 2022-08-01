import NotesList from "./components/NotesList";
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "07/30/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "07/31/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "07/31/2022"
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    // it is bad to mutate state in react - this line creates a new array
    // instead of updating the old array
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <NotesList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App;