import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';
import coding from '../assets/coding.svg';
import grad from '../assets/grad.svg';
import tools from '../assets/tools.svg';

function AboutMe() {
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
          I am the CTO and Lead Software Engineer at Tishanyq Digital, leading the development of scalable, high-performance web 
          and mobile applications. I have extensive experience in full-stack development using Java, Android, Django, Python, 
          JavaScript, TypeScript, React, Node.js, SQL, and AWS, with a strong focus on building user-centric and innovative 
          solutions. I oversee both the technical strategy and execution, guiding the team in delivering robust applications, 
          optimizing systems, and implementing cloud-based solutions. I am passionate about driving technology innovation, 
          mentoring teams, and leveraging modern technologies to solve real-world problems while continuously learning and 
          adapting to emerging tools and frameworks.
        </div>
        <br />
        <div className='about-txt'>
          I am eager to contribute to a team where I can apply my skills to develop high-quality applications that improve user
          experiences and streamline business processes. My strong work ethic, quick learning ability, and commitment to writing
          clean, maintainable code make me a valuable asset.
        </div>
      </div>

      {/* NEW SECTION BELOW ABOUT */}
      <div className="container">
        <div className="top-section">
          <div className="card">
            <h2>Education</h2>
            <ul>
              <li className='top-section-texts'>Certificate in Pro Dev Backend <a href="https://savanna.alxafrica.com/certificates/FYJxeN9MHy" target='_blank'>[ALX Africa]</a></li>
            </ul>
          </div>

          <div className="card">
            <h2>Certifications / Short Courses</h2>
            <ul>
              <li className='top-section-texts'>Java Android App Development <a href="http://ude.my/UC-54792f39-1bb2-4b4b-a40b-5ccf044df08" target='_blank'>[Udemy]</a></li>
              <li className='top-section-texts'>AWS Cloud Practitioner dd345bb77dc04f92ac085a3dcf5f31b5 <a href="https://aws.amazon.com/verification" target='_blank'>[AWS]</a></li>
              <li className='top-section-texts'>Scientific computing with python <a href="https://freecodecamp.org/cerification/Brandon_Khumalo/scientific-computing-with-python-v7" target='_blank'>[Freecodecamp]</a></li>
              <li className='top-section-texts'>Google IT Support <a href="#">[Coursera]</a></li>
              <li className='top-section-texts'>Professional Foundations <a href="https://savanna.alxafrica.com/certificates/ZfNnpRe97r" target='_blank'>[ALX Africa]</a></li>
            </ul>
          </div>
        </div>

        <div className="card skills-card">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill top-section-texts">Python</div>
            <div className="skill top-section-texts">Django</div>
            <div className="skill top-section-texts">Websockets</div>
            <div className="skill top-section-texts">Rest Apis</div>
            <div className="skill top-section-texts">Java</div>
            <div className="skill top-section-texts">Retrofit</div>
            <div className="skill top-section-texts">Firebase</div>
            <div className="skill top-section-texts">SQL</div>
            <div className="skill top-section-texts">AWS</div>
            <div className="skill top-section-texts">Docker</div>
            <div className="skill top-section-texts">Git</div>
            <div className="skill top-section-texts">Github</div>
            <div className="skill top-section-texts">Swagger</div>
            <div className="skill top-section-texts">Graddle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
