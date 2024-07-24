"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './contact.module.css';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        text: useRef(null)
    };

    const [clickedInputs, setClickedInputs] = useState({
        name: false,
        email: false,
        text: false
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: ''
    });

    const handleChange = (event, field) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    };

    const handleClick = (field) => {
        setClickedInputs(prevState => ({
            ...prevState,
            [field]: true
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            Object.keys(inputRefs).forEach(key => {
                if (inputRefs[key].current && !inputRefs[key].current.contains(event.target)) {
                    if (!formData[key].trim()) {
                        setClickedInputs(prevState => ({
                            ...prevState,
                            [key]: false
                        }));
                    }
                }
            });
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [formData]);

    useEffect(() => {
        Object.keys(clickedInputs).forEach(key => {
            if (clickedInputs[key] && inputRefs[key].current) {
                inputRefs[key].current.focus();
            }
        });
        // eslint-disable-next-line
    }, [clickedInputs]);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.contact}>
                <div className={styles.Heading}>
                    <h1>Contact Me.</h1>
                    <FaRegEnvelope />
                </div>
                <div className={styles.Services}>
                    <h2>Let&apos;s Talk</h2>
                </div>
                <div className={styles.form}>
                    <div className={styles.row1}>
                        {['name', 'email'].map(field => (
                            <span key={field} className={styles.inputSpan} onClick={() => handleClick(field)}>
                                <input ref={inputRefs[field]} type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={(event) => handleChange(event, field)} />
                                <motion.label
                                    className={styles.label}
                                    htmlFor={field}
                                    initial={false}
                                    animate={{ top: clickedInputs[field] ? '-90%' : '12%', fontSize: clickedInputs[field] ? '18px' : '20px', left: clickedInputs[field] ? '1%' : '4%', zIndex: clickedInputs[field] ? '0' : '1' }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30, delay: 0.1 }}
                                >
                                    {field === 'name' ? 'Name' : 'Email'}
                                </motion.label>
                            </span>
                        ))}
                    </div>
                    <div className={styles.row2}>
                        <span className={styles.inputSpan} onClick={() => handleClick('text')}>
                            <textarea rows={7} ref={inputRefs['text']} type="text" name='text' value={formData['text']} onChange={(event) => handleChange(event, 'text')} />
                            <motion.label
                                className={styles.label}
                                htmlFor="text"
                                initial={false}
                                animate={{ top: clickedInputs['text'] ? '-20%' : '12%', fontSize: clickedInputs['text'] ? '18px' : '20px', left: clickedInputs['text'] ? '1%' : '4%', zIndex: clickedInputs['text'] ? '0' : '1' }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30, delay: 0.1 }}
                            >
                                How can I help you?
                            </motion.label>
                        </span>
                    </div>
                    <div className={styles.DownloadCV}>
                        Submit
                    </div>
                </div>
                <div className={styles.row3}>
                    <a className={styles.item} href="mailto:monikashakyaofficial@gmail.com">
                        <FaPaperPlane />
                        <span>monikashakyaofficial@gmail.com</span>
                    </a>
                    <a className={styles.item}>
                        <FaMapMarkerAlt />
                        <span>Sydney, NSW, Australia</span>
                    </a>
                    <a className={styles.item} href="tel:+61425181313">
                        <FaPhoneAlt />
                        <span>+61 425 181 313</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
