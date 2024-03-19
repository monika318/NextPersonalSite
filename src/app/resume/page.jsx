import React from 'react'
import { BsFillPostcardHeartFill } from 'react-icons/bs'
import styles from './resume.module.css'

const page = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.AboutMe}>
                <div className={styles.Heading}>
                    <h1>Resume.</h1>
                    <BsFillPostcardHeartFill />
                </div>


            </div>
            <div classname={styles.container}>
                <div className={styles.LeftSection}>hi</div>
                <div className={styles.RightSection}>hi</div>
            </div>
        </div>
    )
}

export default page
