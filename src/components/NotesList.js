import Note from './Note';

const NotesList = () => {

    return (
        <>
            <div className='p-6 min-w-screen max-w-6xl container mx-auto grid grid-cols-4 gap-5 bg-new-slate rounded-lg'>
                <Note />
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