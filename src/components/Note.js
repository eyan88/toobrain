import { TrashIcon } from "@heroicons/react/24/outline";

const Note = () => {

    return (
        <>
            <div className="p-4 bg-white rounded-lg h-60 w-60 flex flex-col">
                <div className="flex flex-row items-center">
                    <h2 className="basis-5/6 text-lg font-bold">note title</h2>
                    <TrashIcon className="basis-1/6 transition duration-300 h-4 w-4 text-neutral-500 hover:text-red-600"></TrashIcon>
                </div>
                <p className="text-sm">lorem ipsum dolor this is a new note haha wooo</p>
            </div>
        </>
    )
};

export default Note;