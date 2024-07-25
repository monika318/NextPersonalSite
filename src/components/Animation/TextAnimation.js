import React, { useState, useEffect } from 'react';
import styles from '../Home/HeroSection.module.css'

import styled, { keyframes } from 'styled-components';

function calculateAnimationDelay(index) {
    const baseDelay = 0.1; // The base delay in seconds
    return `${baseDelay * index}s`;
}

const TextAnimation = () => {
    const Revenuearray = 'Revenue'.split("");
    const Growarray = 'Growth '.split("");
    const Leadsarray = 'Leads  '.split("");
    const [items, setItems] = useState(Revenuearray);
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setItems((prevItems) => {
                if (count === 0) {
                    setCount(1);
                    return Growarray;
                } else if (count === 1) {
                    setCount(2);
                    return Leadsarray;
                } else {
                    setCount(0);
                    return Revenuearray;
                }
            });
            setPlay(!play);
        }, 4000);
        return () => clearInterval(intervalId);
        // eslint-disable-next-line 
    }, [count]);

    return (
        <AnimatedDiv>
            {items.map((item, index) => {
                return (
                    <span style={{ margin: '2px', animationDelay: calculateAnimationDelay(index + 1) }} className={styles.Flipper} key={index}> {item}</span>
                )
            })}
        </AnimatedDiv>
    );
};

const animation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px) rotateZ(30deg);
        filter: blur(10px);
    }
    25% {
        opacity: 1;
        transform: translateY(0) rotateZ(0deg);
        filter: blur(0px);
    }
    75% {
        opacity: 1;
        transform: translateY(0) rotateZ(0deg);
        filter: blur(0px);
    }
    100% {
        opacity: 0;
        transform: translateY(-100px) rotateZ(30deg);
        filter: blur(10px);
    }
`;

const AnimatedDiv = styled.span`
display:inline-block;
width:500px;
span{
    font-weight:700;
    display:inline-block;
    opacity:0;
    animation-name: ${animation};
    animation-duration: 4s;
    animation-iteration-count:infinite;
    animation-fill-mode:forwards;
    animation-timing-function:cubic-bezier(0.075,0.82,0.165,1);  
}
`;

export default TextAnimation;
