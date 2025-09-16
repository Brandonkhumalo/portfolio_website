import React, { useState, useEffect, useRef } from "react";
import '../styles/about.css';
import '../styles/projects.css';
import TumaGo from '../assets/TumaGo.png';
import BrandonApps from '../assets/BrandonApps.png';
import link from '../assets/link.svg';
import github from '../assets/github.svg';
import oba from '../assets/oba_logo.png';
import Ballot from '../assets/Ballot_BLaze.png';
import Service from '../assets/Service_Lane.png';

const cards = [
    {
        id: 1,
        bgImage: BrandonApps,
        link1: "https://brandonkhumalo.github.io/BrandonApps/#/",
        link2: "https://github.com/Brandonkhumalo/BrandonApps",
        heading: "Company website",
        text1: "A website built for my own company Milltechsoftwares where users can inquire about my software development services.",
        text2: "",
    },
    {
        id: 2,
        bgImage: oba,
        link1: "https://drive.google.com/file/d/17-oZ0GC-xwJLwOY7z75NVdzi04ylLjCB/view?usp=sharing",
        link2: "https://github.com/Brandonkhumalo/OneBankAfrica",
        heading: "Banking App",
        text1: "Secure and user-friendly banking app that enables users to manage their finances seamlessly.",
        text2: "Email: test@gmail.com password: test1234",
    },
    {
        id: 3,
        bgImage: TumaGo,
        link1: "https://github.com/Brandonkhumalo/TumaGo",
        link2: "https://github.com/Brandonkhumalo/Tuma_Go_backend",
        heading: "Package delivering application",
        text1: "Application that enables both drivers to deliver packages and get paid and users to send packages using either a van, motobike or truck.",
        text2: "",
    },
    {
        id: 4,
        bgImage: Ballot,
        link1: "https://efficient-spontaneity-production.up.railway.app/api/docs/",
        link2: "https://github.com/Brandonkhumalo/alx-project-nexus",
        heading: "Ballot Blaze",
        text1: "Backend implementation of an Online Poll System. The system enables real-time voting functionality with optimized database design, scalable APIs.",
        text2: "",
    },
    {
        id: 4,
        bgImage: Service,
        link1: "https://github.com/Brandonkhumalo/ServiceLane",
        link2: "https://github.com/Brandonkhumalo/ServiceLane",
        heading: "Service Lane",
        text1: "Service Lane is a fullstack project that is designed to connect clients with businesses offering local services.",
        text2: "(ONGOING PROJECT). ",
    },
];

function Projects() {
    const [activeCard, setActiveCard] = useState(null);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleCardClick = (id) => {
        // Mobile: toggle overlay
        if (activeCard === id) {
            setActiveCard(null);
        } else {
            setActiveCard(id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // trigger when 10% visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`projectsContainer ${isVisible ? "slideUp" : ""}`}>
            <div className="about">Projects</div>

            <div className="gallery">
                {cards.map((card) => (
                    <div key={card.id} className="card-container">
                    <div
                        className={`card ${activeCard === card.id ? "active" : ""}`}
                        style={{ backgroundImage: `url(${card.bgImage})` }}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="overlay">
                        <a href={card.link1} target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="project demo" />
                        </a>
                        <a href={card.link2} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github link" />
                        </a>
                        </div>
                    </div>

                    {/* Heading and texts below the card */}
                    {card.heading && <h3 className="card-heading">{card.heading}</h3>}
                    {(card.text1 || card.text2) && (
                        <div className="card-texts">
                        {card.text1 && <p>{card.text1}</p>}
                        {card.text2 && <p>{card.text2}</p>}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
