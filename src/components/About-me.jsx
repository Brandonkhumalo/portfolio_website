import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';
import coding from '../assets/coding.svg';
import grad from '../assets/grad.svg';
import tools from '../assets/tools.svg';

function AboutMe() {
  const services = [
    {
      image: coding,
      title: "Languages",
      description: "Python, Django, SQL, Java, JavaScript, React, HTML, CSS",
    },
    {
      image: tools,
      title: "Tools",
      description: "Git & Github, Docker, AWS, Firebase, VS Code, Android Studio",
    },
    {
      image: grad,
      title: "Education",
      description: "Software Development Bootcamp, certified AWS Cloud practitioner, Udemy Mobile Development",
    }
  ];

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const [aboutActive, setAboutActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3 };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setAboutActive(entry.isIntersecting);
      });
    }, options);

    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setServicesActive(entry.isIntersecting);
      });
    }, options);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <div className='abountContainer'>
        <div
            className={`aboutCont slide-left ${aboutActive ? 'active' : ''}`}
            ref={aboutRef}>
            <div className="about">About Me</div>
            <div className='about-txt'>
            I am an entry-level mobile and backend developer with expertise in Java for Android development and Django
            for backend systems. I have been actively building projects  to sharpen my skills.  My top skills include mobile app
            development, backend API integration, and problem-solving. What sets me apart is my ability to build scalable,
            efficient, and user-friendly applications while continuously learning and adapting to new technologies.
            </div>
            <br />
            <div className='about-txt'>
            I am eager to contribute to a team where I can apply my skills to develop high-quality applications that improve user
            experiences and streamline business processes. My strong work ethic, quick learning ability, and commitment to writing
            clean, maintainable code make me a valuable asset.
            </div>
        </div>

        <div
            className={`services-grid-container slide-right ${servicesActive ? 'active' : ''}`}
            ref={servicesRef}>
            <div className="services-grid">
            {services.map((service, index) => (
                <div className="service-card" key={index}>
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                <img className='about-img' src={service.image} alt={service.title} />
                <h3 className="service-card-header">{service.title}</h3>
                <p className="service-card-paragraph">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

export default AboutMe;
