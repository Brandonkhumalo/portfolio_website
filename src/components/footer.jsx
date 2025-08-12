import '../styles/footer.css';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import tk from '../assets/tiktok.svg';
import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function Footer() {
    return(
        <div>
            <div className="footerContainer">
                <div className="motor">
                    <div>Living, learning, & leveling</div>
                    <div>up one day at a time</div>
                </div>
                <div className="icons">
                    <a href="https://github.com/Brandonkhumalo" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github" className="Sicons1"/>
                    </a>
                    <a href="https://www.facebook.com/people/Brandon-Khumalo/100047518344256/" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" className="Sicons"/>
                    </a>
                    <a href="https://www.instagram.com/brandon_khumalo/" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" className="Sicons"/>
                    </a>
                    <a href="https://www.tiktok.com/@pitchmellowbrandon?_t=ZS-8yoqSitmwug&_r=1" target="_blank" rel="noopener noreferrer">
                        <img src={tk} alt="Tiktok" className="Sicons"/>
                    </a>
                    <a href="www.linkedin.com/in/brandon-khumalo04" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="Linkedin" className="Sicons"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;