import { useState, useEffect } from 'react';
import '../styles/home.css';
import Bee from '../assets/profile.jpg';
import download from '../assets/download_svg.svg';
import AboutMe from '../components/About-me';
import Projects from '../components/projects';
import cv from '../assets/Brandon-cv-fullstack.pdf';

function Home() {
    const text = "Hi! I'm Brandon Khumalo.";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let typingSpeed = isDeleting ? 100 : 150;

        if (!isDeleting && index === text.length) {
            setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
            return;
        }

        if (isDeleting && index === 0) {
            setTimeout(() => setIsDeleting(false), 500); // pause before typing again
            return;
        }

        const timer = setTimeout(() => {
            setDisplayText(
                isDeleting ? text.substring(0, index - 1) : text.substring(0, index + 1)
            );
            setIndex(prev => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [index, isDeleting]);

    return (
        <div className="homeCont">
            <div className="homeTop">
                <div className="homeheader">
                    Software Developer
                </div>
                <div className="homeheader2">
                    Fullstack Developer
                </div>
                <img src={Bee} alt='My Picture' className='myPicture' />
            </div>

            <div className='introHeader'>
                <div className='myname'>
                    {displayText}
                    <span className="cursor"></span>
                </div>
                <div className='introwidth'>
                    <div className='myintro'>
                        A passionate software developer with love for crafting elegant solutions to complex problems.  
                        Quietly confident, naturally curious, and perpetually working on improving my chops. Great fullstack
                        development isn’t just about writing code—it’s about crafting seamless, intuitive experiences that users 
                        love. Every pixel, every interaction, and every animation tells a story—make it a masterpiece.
                    </div>
                </div>

                <a
                    className='download_cv'
                    href={cv}
                    download="Brandon_Khumalo_Resume.pdf"
                >
                    <img
                        src={download}
                        alt="Download Icon"
                        style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    My Resume
                </a>
            </div>

            <div id="about-me-section">
                <AboutMe />
            </div>
            <div id="projects-section">
                <Projects />
            </div>
        </div>
    );
}

export default Home;
