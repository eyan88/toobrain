import { useState } from 'react';
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Form } from "react-router-dom";
import { motion } from "framer-motion";

const CreateNote = () => {

    const createNote = (e) => {
        e.preventDefault();
        console.log("Created new note");
    }

    return (
        <>            
        <motion.div
        className="flex flex-row place-content-center"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
            <div className="bg-white dark:bg-slate-800 dark:border-gray-600 rounded-lg flex-col border border-slate-300 w-1/2">
                <h2 className="text-2xl dark:text-slate-200 p-6">Add Note</h2>
                <form onSubmit={ createNote } className="p-6 flex flex-col">
                    <div>
                        <label htmlFor="title" className="block w-auto">
                            <span className="block mb-2 text-xl text-slate-700 dark:text-slate-200">Title</span>
                            <input type="text" required className="text-xl p-4 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 sm:text-md focus:ring-blue-400 focus:border-blue-300" />
                        </label>
                    </div>
                    <div className="pt-4">
                        <label htmlFor="content" className="block w-auto">
                            <span className="block mb-2 text-xl text-slate-700 dark:text-slate-200">Content</span>
                            <input type="text" required className="block w-full p-4 text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 sm:text-md focus:ring-blue-500 focus:border-blue-300" />
                        </label>
                    </div>

                    <button type="submit" className="w-20 h-10 mt-4 text-white bg-blue-500 hover:bg-blue-300 place-self-end rounded-lg transition duration:400">Save</button>
                </form>
            </div>
        </motion.div>
        </>
    )
};

export default CreateNote;