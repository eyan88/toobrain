import Note from './Note';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <>
            <div className='p-6 grid grid-cols-1 gap-2 overflow-auto md:grid-cols-2 md:gap-5 lg:grid-cols-6 lg:gap-5'>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </>
    )
};

export default Home;