import './Footer.css';
import logo from "../../images/logo.png";
import title from '../../images/title.png';



const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        {/* <img src={logo} alt="" /> */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                            aliquid! Lorem ipsum dolor sit amet.
                        </p>
                        {/* <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div> */}
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 9090909090</li>
                            <li>contact@anime.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">
                    Copyright 2025 Anime.com- All Right Reserved
                </p>
            </div>
        </>
    );
};

export default Footer;