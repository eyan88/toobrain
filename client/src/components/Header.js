import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className='flex flex-row content-center dark:text-slate-200 dark:bg-slate-800 justify-between items-center'>
                <h1 className='text-xl font-bold p-6 dark:text-slate-200 dark:bg-slate-800'>
                    <Link to='/'>Too Brain</Link>
                </h1>
                <Link to='/create'>
                    <PlusCircleIcon className='transition duration-100 h-8 w-8 content-center hover:scale-110'></PlusCircleIcon>
                </Link>
            </div>
        </header>
    )
}

export default Header;