import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1000px, rgba(0,0,0,1) 1000px, rgba(0,0,0,1) 1000px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1000px)`;


const ImageAnimation = ({ children }) => {
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={
                isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            style={{ display: 'flex', justifyContent: 'space-around' }}
        >
            {children}
        </motion.div>
    )
}

export default ImageAnimation
