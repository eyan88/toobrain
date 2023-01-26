import { ComputerDesktopIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {

    return (
        <>
            <div className="flex flex-row content-center justify-between items-center p-2">
                <h1 className="text-xl font-bold p-6 dark:text-slate-400 dark:bg-slate-800">Projects</h1>
                <button>
                    <PlusCircleIcon className="transition duration-100 h-8 w-8 content-center hover:scale-110">New Note</PlusCircleIcon>
                </button>
            </div>
        </>
    )
}

export default Header;