import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"


const ScrollTopDiv = ({ children }) => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            // console.log(true)
        }
        // eslint-disable-next-line 
    }, [isInView])
    return (
        <motion.div ref={ref}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0
                },
                // float: { y: [-20, 20, -20], transition: { duration: 7, ease: "linear", repeat: Infinity } }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75 }}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </motion.div>
    )
}

export default ScrollTopDiv
