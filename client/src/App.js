import './index.css';
import Header from './components/Header';
import { Outlet, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState('light');

  const toggleDarkMode = () => {
      setDarkMode(mode => {
        if(mode === 'dark') {
          return 'light';
        } else if(mode === 'light') {
          return 'dark';
        }
      });
  }

  return (
    <>
      <div className={darkMode}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className='p-6 h-screen bg-new-slate dark:bg-dark-slate overflow-auto'>
          <Outlet />
        </div>
      </div>
    </>
  )
};
export default App;