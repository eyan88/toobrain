import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '@mui/material';
import {Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const AddNote = ({ handleAddNote }) => {
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty(),
    );
    
    const handleChange = (event) => {

    }

    const handleSaveClick = () => {
        if(editorState.getCurrentContent().getPlainText().length > 0) {
            handleAddNote(editorState.getCurrentContent().getPlainText());
        }
    }

    return (
        <div className='note new'>
            <div className='editor-container'>
                <Editor 
                    placeholder='New note...' 
                    editorState={editorState} 
                    onChange={setEditorState} 
                />
            </div>
            <div className='note-footer'>
                    
                    <Button variant='contained' size='small' onClick={handleSaveClick}>
                        Save
                    </Button>
            </div>
        </div>
    )
}

export default AddNote;