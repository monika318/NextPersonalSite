"use client"
import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import { PiSuitcaseSimpleFill } from 'react-icons/pi'
import { motion } from 'framer-motion'

export default function Page() {


    return (
        <div className={styles.homeContainer}>
            <div className={styles.AboutMe}>
                <div className={styles.Heading}>
                    <h1>Portfolio.</h1>
                    <PiSuitcaseSimpleFill />
                </div>
                <div className={styles.popularMovies}>

                </div>
            </div>
        </div>
    );
}