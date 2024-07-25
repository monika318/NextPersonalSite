import React, { useRef } from 'react';
import { motion } from "framer-motion"


const NavbarAnimation = ({ children }) => {
    const ref = useRef();
    return (
        <motion.div ref={ref}
            initial={{
                opacity: 0,
                y: 70
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.75 }}
        >
            {children}
        </motion.div >
    )
}

export default NavbarAnimation