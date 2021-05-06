import React from 'react';
import { motion } from 'framer-motion';

function End({ toTop }) {
    return (
        <div id="skills" className="flex p-4  flex-col flex-nowrap w-full h-full ">
            <div className="flex flex-col flex-wrap content-center h-full w-full">
                <motion.button onClick={() => { toTop() }} whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} type="button" className="text-secondary focus:outline-none font-bold text-3xl">Go to Top!</motion.button>
            </div>
        </div>
    );
}

export default End;