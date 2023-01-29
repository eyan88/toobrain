import './index.css';
import Header from './components/Header';
import Login from './components/Login';
import Notes from './components/Notes';
import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(mode => {
      if (mode === 'dark') {
        return 'light';
      } else if (mode === 'light') {
        return 'dark';
      }
    });
  }

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <>
      <div className={darkMode}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? (
            <Notes />
        ) : (
            <Login setIsLoggedIn={setIsLoggedIn}/>
        )}
      </div>
    </>
  )
};
export default App;