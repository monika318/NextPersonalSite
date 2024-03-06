"use client"
import react, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./page.module.css";

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [currentBackdrop, setCurrentBackdrop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackdrop((prevBackdrop) => (prevBackdrop + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backdrops = ['/homebackdrop/Component47.png', '/homebackdrop/Component48.png', '/homebackdrop/Component49.png'];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.textOverlay}>
        <h1>Monika <span>Shakya</span></h1>
        <div>
          <TypeAnimation
            cursor={false} // omit the default css typing animation class
            className={styles.type}
            preRenderFirstString={true}
            sequence={[
              500,
              'I am Computer Engineer', // initially rendered starting point
              1000,
              'I am Web Developer',
              1000,
              'I am Data Enthusiast',
              1000,
              'I am UI/UX Designer',
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      {/* <AnimatePresence>
        <motion.div
          key={currentBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${backdrops[currentBackdrop]})`,
          }}
        >

        </motion.div>
      </AnimatePresence> */}
      <AnimatePresence>
        <motion.div
          key={currentBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className={styles.backgroundImage}
        >
          <Image
            key={currentBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className={styles.backgroundImage}
            src={backdrops[currentBackdrop]}
            // src={backdrops[0]}
            alt="Backdrop"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
