import { TrashIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Note = ({ title, content }) => {

    return (
        <>
            <motion.div
                className="flex flex-row place-content-center"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg h-60 w-60 flex flex-col drop-shadow-md">
                    <div className="flex flex-row items-center">
                        <h2 className="basis-5/6 text-lg font-bold dark:text-slate-200">
                            {title}
                        </h2>
                        <button>
                            <TrashIcon className="basis-1/6 transition duration-300 h-4 w-4 text-neutral-500 dark:text-neutral-400 hover:text-red-600 hover:dark:text-red-500"></TrashIcon>
                        </button>
                    </div>
                    <p className="text-sm dark:text-slate-400 overflow-auto">
                        {content}
                    </p>
                </div>
            </motion.div>
        </>
    )
};

export default Note;