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
            <div className={styles.Resumecontainer}>
                <div className={styles.LeftSection}>
                    <div className={styles.TextWithUnderline}>
                        <h2 className={styles.Heading2}>Experience</h2>
                        <div className={styles.timeline}>
                            <div className={styles.container}>
                                <div className={styles.secondCircle}></div>
                                <div className={styles.secondArrow}></div>
                                <div className={styles.content}>
                                    <h2>April, 2024</h2>
                                    <p className={styles.Role}>Full-Time Lecturer</p>
                                    <p className={styles.Company}>Asian College of Higher Studies, Lalitpur, Nepal</p>
                                    <p className={styles.description}>Worked as Faculty member for the college affiliated to Tribhuwan University. Reponsible for giving lectures and doing lab works. Centered on the DBMS syllabus and Web development, ensuring comprehensive coverage.
                                        Conducted engaging lab sessions for DBMS, fostering hands-on learning and practical application.</p>
                                    <h2>December, 2023</h2>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.secondCircle}></div>
                                <div className={styles.secondArrow}></div>
                                <div className={styles.content}>

                                    <h2>October, 2023</h2>
                                    <p className={styles.Role}>Front end Developer</p>
                                    <p className={styles.Company}>Web Tuned Studio, Lalitpur, Nepal</p>
                                    <p className={styles.description}>Worked for a growing independent IT company . Responsible for client interaction and website development. Getting Client Requirements
                                        Developing UI/UX and frontend for the websites.</p>
                                    <h2>June, 2023</h2>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
                <div className={styles.RightSection}>
                    <div className={styles.TextWithUnderline}>
                        <h2 className={styles.Heading2}>Education</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
