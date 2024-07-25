"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as PiIcons from 'react-icons/pi'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { BsFillPersonFill } from 'react-icons/bs'
import NavbarAnimation from './Animation/NavbarAnimation';
import Image from 'next/image'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className={styles.outerNavbar}>
            <div className={styles.innerNavbar}>
                <div className={styles.imageDiv}>
                    <Image src="/MonikaImage.png" style={{ width: "auto", height: "15em" }} width={150} height={150} alt="img1" />
                    <div className={styles.name}>
                        <p>Monika shakya</p>
                    </div>
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.navitem}>
                        <Link href='/'> <BiIcons.BiHome />Home</Link>
                    </div>
                    <div className={styles.navitem}>
                        <Link href='/aboutme' >   <BsFillPersonFill />About Me</Link>
                    </div>

                    <div className={styles.navitem}>

                        <Link href='/resume' >  <BsIcons.BsFillPostcardHeartFill />Resume</Link>
                    </div>
                    <div className={styles.navitem}>

                        <Link href='/portfolio' ><PiIcons.PiSuitcaseSimpleFill />Portfolio</Link>
                    </div>
                    <div className={styles.navitem}>

                        <Link href='/contact' >  <AiIcons.AiOutlineContacts />Contact</Link>
                    </div>
                </div>
                <div className={styles.socialDiv}>
                    <div>
                        <a href='https://www.facebook.com/Monika13shakya/'> <AiIcons.AiFillFacebook /></a>
                        <a href='https://www.linkedin.com/in/monika-shakya-47949b264/'> <AiIcons.AiFillLinkedin /></a>
                        <a href='https://www.instagram.com/mmoniikaa_/'> <AiIcons.AiFillInstagram /></a>
                        <a href='https://wa.me/+9779861352576'> <FaIcons.FaWhatsappSquare /></a>
                    </div>

                    <p>Monika Shakya 2024</p>
                </div>
            </div>
            <div className={styles.TopNavbar}>
                <div className={styles.TopNavItem}>
                    <Link href='/' className={styles.Heading}>Monika Shakya</Link>
                </div>
                <div className={styles.TopNavItem}>
                    <FaIcons.FaBars className={styles.bar} onClick={() => setSidebar(!sidebar)} />
                </div>
            </div>

            <div className={`${sidebar ? `${styles.navmenu} ${styles.active}` : styles.navmenu}`}>
                <ul className={styles.navMenuItems} style={{ scrollBehavior: 'smooth' }}>
                    <li className={styles.navbarToggle} id="Top">
                        <Link href='#' className={styles.menubars} onClick={() => setSidebar(!sidebar)}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <div className={styles.navitem}>
                        <Link href='/aboutme' >   <BsFillPersonFill />About Me</Link>
                    </div>
                    <div className={styles.navitem}>

                        <Link href='/resume' >  <BsIcons.BsFillPostcardHeartFill />Resume</Link>
                    </div>
                    <div className={styles.navitem}>

                        <Link href='/portfolio' ><PiIcons.PiSuitcaseSimpleFill />Portfolio</Link>
                    </div>
                    {/* <div className={styles.navitem}>

                        <Link href='/contact' >  <AiIcons.AiOutlineContacts />Contact</Link>
                    </div> */}


                </ul>
            </div>

        </div >
    )
}

export default Navbar
