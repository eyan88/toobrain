import { MdDeleteForever } from 'react-icons/md';
import {Card, Button } from '@mui/material';

const Note = ({ note, text, date, handleDeleteNote }) => {
    return (
        <Card>
            <div className='note'>
                <span>{text}</span>

                <div className='note-footer'>
                    <small>
                        {date}
                    </small>
                    <Button 
                        variant='contained'
                        size='small' 
                        color='error'
                        onClick={() => handleDeleteNote(note.id) }
                     >
                        <MdDeleteForever 
                            className='delete-icon' 
                            size='1.3em'
                        />
                        Delete
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default Note;