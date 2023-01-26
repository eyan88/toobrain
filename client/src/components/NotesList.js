import Note from './Note';
import { motion } from 'framer-motion';

const NotesList = () => {



    return (
        <>
            <div className='p-6 grid grid-cols-1 gap-2 overflow-auto bg-new-slate dark:bg-slate-600 rounded-lg md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2'>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </>
    )
};

export default NotesList;