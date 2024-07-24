"use client"
import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import { PiSuitcaseSimpleFill } from 'react-icons/pi'
import { motion } from 'framer-motion'
import Image from "next/image";
export default function Page() {
    const backdrops = ['/projects/Project1.png', '/projects/Project2.png', '/projects/Project3.png', '/projects/Project4.png', '/projects/Project5.png'];


    return (
        <div className={styles.homeContainer}>
            <div className={styles.AboutMe}>
                <div className={styles.Heading}>
                    <h1>Portfolio.</h1>
                    <PiSuitcaseSimpleFill />
                </div>
                <div className={styles.PopularProjects}>
                    <div className={styles.imagesContainer}>


                        <div className={styles.Project} onClick={() => window.open("https://murphystechnology.com.au/", "_blank")} >
                            {/* <p>hi</p> */}
                            <Image
                                key={backdrops[0]}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // transition={{ duration: 2, ease: 'easeInOut' }}
                                className={styles.backgroundImage}
                                src={backdrops[2]}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"

                                priority
                            />
                            <div className={styles.Project_overlay}>
                                <span>Murphy&apos;s Technology</span>
                            </div>
                        </div>
                        <div className={styles.Project} onClick={() => window.open("https://mommybearcleaning.com.au", "_blank")}>
                            {/* <p>hi</p> */}
                            <Image
                                key={backdrops[0]}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // transition={{ duration: 2, ease: 'easeInOut' }}
                                className={styles.backgroundImage}
                                src={backdrops[1]}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"

                                priority
                            />
                            <div className={styles.Project_overlay}>
                                <span>Mommy Bear Cleaning Site</span>
                            </div>
                        </div>
                        <div className={styles.Project} onClick={() => window.open("https://nagarkotfarmhouse.com/", "_blank")}>
                            {/* <p>hi</p> */}
                            <Image
                                key={backdrops[0]}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // transition={{ duration: 2, ease: 'easeInOut' }}
                                className={styles.backgroundImage}
                                src={backdrops[3]}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                            <div className={styles.Project_overlay}>
                                <span>Nagarkot Farm House</span>
                            </div>
                        </div>
                        <div className={styles.Project} onClick={() => window.open("https://eventsolutionnepal.com.np/", "_blank")}>
                            {/* <p>hi</p> */}
                            <Image
                                key={backdrops[0]}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // transition={{ duration: 2, ease: 'easeInOut' }}
                                className={styles.backgroundImage}
                                src={backdrops[4]}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"

                                priority
                            />
                            <div className={styles.Project_overlay}>
                                <span>Event Solution - Company Profile</span>
                            </div>
                        </div>
                        <div className={styles.Project} onclick={() => window.open("https://eventsolutionnepal.com.np/", "_blank")}>
                            {/* <p>hi</p> */}
                            <Image
                                key={backdrops[0]}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                // transition={{ duration: 2, ease: 'easeInOut' }}
                                className={styles.backgroundImage}
                                src={backdrops[0]}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                            <div className={styles.Project_overlay}>
                                <span>Groovy Ecommerce Site</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}