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
                                    <p className={styles.Company}><a href="https://achsnepal.edu.np/" target="_blank" rel="noopener noreferrer">Asian College of Higher Studies, Lalitpur, Nepal</a></p>

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
                                    <p className={styles.Company}><a href="https://webtunedstudio.com.np/" target="_blank" rel="noopener noreferrer">Web Tuned Studio, Lalitpur, Nepal</a></p>
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
                        <div className={styles.timeline}>
                            <div className={styles.container}>
                                <div className={styles.secondCircle}></div>
                                <div className={styles.secondArrow}></div>
                                <div className={styles.content}>
                                    <h2>Ongoing</h2>
                                    <p className={styles.Role}>Masters of Data Science and Innovation</p>
                                    <p className={styles.Company}>University of Technology Sydney, NSW, Australia</p>
                                    <p className={styles.description}>I am commencing my Master&apos;s degree in 2024 as a tech and data enthusiast, aiming to enhance my knowledge and gain hands-on experience in the field.</p>
                                    <h2>August, 2024</h2>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.secondCircle}></div>
                                <div className={styles.secondArrow}></div>
                                <div className={styles.content}>
                                    <h2>August, 2023</h2>
                                    <p className={styles.Role}>Bachelor in Computer Engineering</p>
                                    <p className={styles.Company}>National College of Engineering, TU, Nepal</p>
                                    <p className={styles.description}>I have completed my Bachelor&apos;s degree with an impressive percentage of 81.82%. During my academic journey, I actively participated in numerous club activities and engaged in various tech competitions, which enriched my educational experience and honed my skills.</p>
                                    <h2>2018</h2>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.secondCircle}></div>
                                <div className={styles.secondArrow}></div>
                                <div className={styles.content}>
                                    <h2>2018</h2>
                                    <p className={styles.Role}>Higher Secondary Education</p>
                                    <p className={styles.Company}>United Academy, TU, Nepal</p>
                                    <p className={styles.description}>I completed my high school education with a GPA of 3.6, driven by a strong enthusiasm and motivation to pursue a career in information technology.</p>
                                    <h2>2016</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page
