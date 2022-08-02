import { useCallback } from 'react';
import { Editor, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyEditor = ({ editorState, setEditorState }) => {

    const handleKeyCommand = useCallback((command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState)
            return "handled"
        }
        return "not-handled"
    },[setEditorState])

    return (
        <Editor 
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={setEditorState}
            placeholder='new note...'
        />
    )
}

export default MyEditor