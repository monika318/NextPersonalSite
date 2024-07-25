import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../Home/Pricing.module.css';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1300px, rgba(0,0,0,1) 1300px, rgba(0,0,0,1) 1300px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1300px)`;


const CombineAnimation = ({ children }) => {
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
            className={styles.CombinedAnimation}

        >
            {children}
        </motion.div>
    )
}

export default CombineAnimation