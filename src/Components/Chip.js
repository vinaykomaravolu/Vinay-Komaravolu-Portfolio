import React from 'react';
import { motion } from "framer-motion"

function Chip({ text, customClass }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`m-1.5 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-sm font-medium ${customClass} `}>
            {text}
        </motion.div>
    );
}

export default Chip;