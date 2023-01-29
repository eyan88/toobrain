import Home from './notes/Home';
import CreateNote from './notes/CreateNote';
import { Outlet } from 'react-router-dom';


const Notes = () => {

    return (
        <div className='p-6 h-screen bg-new-slate dark:bg-dark-slate overflow-auto'>
            <Outlet />
        </div>
    )
}

export default Notes;