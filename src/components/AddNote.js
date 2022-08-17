import { useState } from 'react';
import { Button } from '@mui/material';
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import MyEditor from './MyEditor';

const AddNote = ({ handleAddNote }) => {
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty(),
    );

    const handleSaveClick = () => {
        if(editorState.getCurrentContent().getPlainText().length > 0) {
            handleAddNote(editorState.getCurrentContent().getPlainText());
        };
    };

    return (
        <div className='note new'>
            <div className='editor-container'>
                <MyEditor 
                    editorState={editorState} 
                    setEditorState={setEditorState}
                />
            </div>
            <div className='note-footer'>
                    <small>

                    </small>
                    <Button variant='contained' size='small' onClick={handleSaveClick}>
                        Save
                    </Button>
            </div>
        </div>
    )
};

export default AddNote;