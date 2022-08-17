import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { query, collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [notes, setNotes] = useState([]);

  // read notes
  useEffect(() => {
    const q = query(collection(db, 'notes'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notesArr = []
      querySnapshot.forEach((doc) => {
        notesArr.push({...doc.data(), id: doc.id});
      });
      // it is bad to mutate state in react
      setNotes(notesArr);
    })
    return () => unsubscribe;
  },[])

  // add note
  const addNote = async (text) => {
    const date = new Date();
    const newNote = {
      userid: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    await addDoc(collection(db, 'notes'), newNote)
  };

  // delete note
  const deleteNote = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, 'notes', id))
  };

  return (
    <div className='container'>
      <Header 
        signedIn={signedIn}
        setSignedIn={setSignedIn}
      />
      <NotesList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  )
};

export default App;