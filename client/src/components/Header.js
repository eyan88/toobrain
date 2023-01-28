import { PlusCircleIcon, HomeIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ( { darkMode, toggleDarkMode } ) => {


    return (
        <header>
            <div className='flex flex-row content-center dark:text-slate-200 dark:bg-slate-800 justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <h1 className='text-xl font-bold p-6 dark:text-slate-200 dark:bg-slate-800'>
                        <Link to='/'>Too Brain</Link>
                    </h1>
                    <Link to='/' className='m-4'>
                        <HomeIcon className='h-8 w-8 content-center'></HomeIcon>
                    </Link>
                    <button id='theme-toggle' className='h-8 w-8 content-center' type='button' onClick={toggleDarkMode}>
                        <MoonIcon className={darkMode === 'dark' ? "hidden" : ""}></MoonIcon>
                        <SunIcon className={darkMode === 'light' ? "hidden" : ""}></SunIcon>
                    </button>
                </div>
                <Link to='/create'>
                    <PlusCircleIcon className='transition duration-100 h-8 w-8 content-center hover:scale-110'></PlusCircleIcon>
                </Link>

            </div>
        </header>
    )
}

export default Header;