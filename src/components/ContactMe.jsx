import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import contact from "../images/contact_img.gif";
import { FaGithub } from "react-icons/fa6";
import { useState,useEffect } from "react";

const ContactMe = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  // Function to check window size and update state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 480);
  };

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id="contactUs">
      <div className="head">
        <ul>
        <li><a href="https://www.linkedin.com/in/arindam-sharma-5751a4249/"><FaLinkedin size={isMobile ? 20: 30} color="#673ab7"/></a></li>
            <li><a href="https://www.instagram.com/arindam_sharma30/?igshid=YTQwZjQ0NmI0OA%3D%3D"><FaInstagram size={isMobile ? 20: 30} color="#673ab7"/></a></li>
            <li><a href="https://github.com/Arindamsharma12"><FaGithub size={isMobile ? 20: 30} color="#673ab7"/></a></li>
            <li><a href="https://www.facebook.com/arindam.sharma.33671/"><FaFacebook size={isMobile ? 20: 30} color="#673ab7"/></a></li>
        </ul>
        <div className="contact-head">
          <h1>Contact Me</h1>
          <p>I will help your brand to flourish, your business.</p>
        </div>
      </div>
      <div className="middle-contact">
        <img src={contact} alt="" />
        <span>
          Have something interesting in mind? Drop me a <a href="mailto: techyarindam@gmail.com">mail</a>
        </span>
      </div>
      <div className="footer">
        <h1 className="first">Let’s Make Something</h1>
        <h1>Great Together</h1>
        <span><a href="mailto: techyarindam@gmail.com">techyarindam@gmail.com</a></span>
        <ul>
            <li><a href="https://www.linkedin.com/in/arindam-sharma-5751a4249/"><FaLinkedin size={isMobile ? 20: 30}/></a></li>
            <li><a href="https://www.instagram.com/arindam_sharma30/?igshid=YTQwZjQ0NmI0OA%3D%3D"><FaInstagram size={isMobile ? 20: 30}/></a></li>
            <li><a href="https://github.com/Arindamsharma12"><FaGithub size={isMobile ? 20: 30}/></a></li>
            <li><a href="https://www.facebook.com/arindam.sharma.33671/"><FaFacebook size={isMobile ? 20: 30}/></a></li>
        </ul>
        <p>Copyright © 2024 <a href="" style={{color:'#bfbcbc',textDecoration:'none'}}>arindamdev</a> | All rights reserved</p>
      </div>
      {/* <img src={Arindam} alt="" /> */}
    </section>
  );
};

export default ContactMe;
