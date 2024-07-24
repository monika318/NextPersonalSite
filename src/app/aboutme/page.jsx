"use client"
import React from 'react'
import styles from './about.module.css'
import { BsPerson } from 'react-icons/bs'

const Aboutme = () => {
    const handleDownload = () => {
        // Construct the download link
        const downloadLink = "https://drive.google.com/file/d/102hXdm2Bv4-_r0vU9G0ewILOArnGZ1K_/view?usp=drive_link";
        // Open the link in a new window
        window.open(downloadLink, '_blank');
    };
    return (
        <div className={styles.homeContainer}>
            <div className={styles.AboutMe}>
                <div className={styles.Heading}>
                    <h1>About Me.</h1>
                    <BsPerson />
                </div>
                <div className={styles.intro}>
                    <div className={styles.LeftSection}>
                        <h2>Computer Engineer <span style={{ fontFamily: 'Cagliostro' }}>&</span> Web Developer</h2>
                        <p>Dedicated Computer Engineering graduate with a distinction in the Bachelor &apos; s degree. Demonstrated passion for technology through active participation in tech competitions, emphasizing commitment to practical problem-solving and innovation. Published a paper on Machine Learning in a local journal, showcasing enthusiasm for staying at the forefront of technological developments. </p>
                        <p>Strong verbal and communication skills,honed through active involvement in clubs, enable effective communication in both technical and non-technical settings. Eager to contribute to cutting-edge projects in Computer Science and engineering, embracing challenges with enthusiasm, and leveraging passion and skills for meaningful team and project contributions.</p>
                    </div>
                    <div className={styles.RightSection}>
                        <h2>Personal Information</h2>
                        <p><span className={styles.underline}>Name </span> : Monika Shakya</p>
                        <p><span className={styles.underline}>Age </span> : 24 Years</p>
                        <p><span className={styles.underline}>Address </span> : Parramatta, Sydney, NSW, Australia</p>
                        <p><span className={styles.underline}>Email </span> : monikashakyaofficial@gmail.com</p>
                        <p><span className={styles.underline}>Phone </span> : +61 425 181 313</p>
                        <div className={styles.DownloadCV} onClick={handleDownload}>
                            Download Resume
                        </div>
                    </div>
                </div>
                {/* <div className={styles.Services}>
                    <h2>Services</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Aboutme
