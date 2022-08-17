import Note from './Note';
import { Grid } from '@mui/material';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <Grid container spacing={2}>
            {notes.map((note, index) => (
                <Grid item key={index} > 
                    <Note 
                        note={note}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                    /> 
                </Grid>
            ))}
            <Grid item>
                <AddNote handleAddNote={handleAddNote}/>
            </Grid>
        </Grid>
    )
};

export default NotesList;