"use client"
import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import { BsPerson } from 'react-icons/bs'
import { motion } from 'framer-motion'

const page = () => {
    // const fetchPopular = async () => {
    //     const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7d35aa65ce521f41f80e5f69663a3d7f&language=en-US&page=1')
    //     const movie = await data.json();
    // }
    return (
        <div className={styles.homeContainer}>
            <div className={styles.AboutMe}>
                <div className={styles.Heading}>
                    <h1>Portfolio.</h1>
                    <BsPerson />
                </div>
            </div>
        </div>
    )
}

export default page
