import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

const ScrollAnimation = ({ children }) => {
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
    // useEffect(() => {
    //     if (isInView) {
    //         const loop = async () => {
    //             while (true) {
    //                 await mainControls.start("float");
    //                 await mainControls.start("visible");
    //             }
    //         };
    //         loop();
    //     }
    // }, [isInView, mainControls]);
    return (
        // <motion.div ref={ref}
        //     variants={{
        //         hidden: {
        //             opacity: 0,
        //             transform: "translate3d(0px, 0px, 10px)",
        //             transformOrigin: "325px 43.1975px",
        //         },
        //         visible: {
        //             opacity: 1,
        //             // Set the desired transform-origin
        //             transform: "translate3d(0px, 0px, 0px)",
        //         },
        //         // float: { y: [-20, 20, -20], transition: { duration: 7, ease: "linear", repeat: Infinity } }
        //     }}
        //     initial="hidden"
        //     animate={mainControls}
        //     transition={{ duration: 0.5, delay: 0.25 }}
        //     style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        //     {children}
        // </motion.div>
        /* <motion.div ref={ref}
                    variants={{
                        hidden: {
                            opacity: 1,
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
                </motion.div> */
        <motion.div ref={ref}
            variants={{
                hidden: {
                    rotateX: 80,
                    translateY: 50,
                    opacity: 0
                },
                visible: {
                    rotateX: 0, translateY: 0, opacity: 1
                }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
        >
            {children}</motion.div>

    )
}

export default ScrollAnimation

