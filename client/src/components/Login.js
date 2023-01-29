import { useState } from 'react';
import { motion } from 'framer-motion';


const Login = ( { setIsLoggedIn } ) => {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value });
    };

    const loginUser = async (credentials) => {
        return await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .catch(error => {
                console.log(error);
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            email: user.email,
            password: user.password
        });
        localStorage.setItem('token', JSON.stringify(token));
        setIsLoggedIn(true);
    };

    return (
        <>
            <motion.div
                className="flex flex-row place-content-center dark:bg-dark-slate h-screen"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className="bg-white dark:bg-slate-800 dark:border-gray-600 rounded-lg flex-col border border-slate-300 min-w-min w-1/2 h-96 mt-8">
                    <h2 className="text-2xl dark:text-slate-200 p-6">Login</h2>
                    <form className="p-6 flex flex-col">
                        <div>
                        <label htmlFor="email" className="block w-auto">
                                <span className="block mb-2 text-xl text-slate-700 dark:text-slate-200">Email</span>
                                <input type="email" name="email" onChange={onChangeInput} required className="block w-full p-4 text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 sm:text-md focus:ring-blue-500 focus:border-blue-300" />
                            </label>
                        </div>
                        <div className="pt-4">
                            <label htmlFor="content" className="block w-auto">
                                <span className="block mb-2 text-xl text-slate-700 dark:text-slate-200">Password</span>
                                <input type="password" name="password" onChange={onChangeInput} required className="block w-full p-4 text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 sm:text-md focus:ring-blue-500 focus:border-blue-300" />
                            </label>
                        </div>

                        <button type="submit" onClick={handleSubmit} className="w-20 h-10 mt-4 text-white bg-blue-500 hover:bg-blue-300 place-self-end rounded-lg transition duration:400">Login</button>
                    </form>
                </div>
            </motion.div>
        </>
    )
}


export default Login;