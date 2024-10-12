import { useEffect, useState,useRef } from "react";
import { FaFacebook,FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Process from "./Process";
import { GiSpy } from "react-icons/gi";
import Notification from "../images/Notification.gif"
import cover from "../images/Arindam.png"

const Hero = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize=()=>setWindowWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return ()=>window.removeEventListener('resize',handleResize)
    },[])

    const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the element as visible when it intersects
          observer.unobserve(elementRef.current); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Start observing the element
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  return (
    <>
    <section 
    ref={elementRef}
    className={`reveal-element ${isVisible ? 'visible' : ''}`}
    id="home">
      {/* <img src="src/images/Notification.gif" alt="" className="Noti" /> */}
      
      <img src={Notification} alt="" className="Noti" />
      <div className="intro">
        <h3>Hello It's Me!</h3>
        <h1>Arindam Sharma </h1>
        <p>
          And I am a <span></span>
        </p>
        <div className="icons">
          <a href="https://github.com/Arindamsharma12" style={{color:"#673ab7"}}><FaGithub size={(window.innerWidth > 1200)?40:30}/></a>
          <a href="https://www.linkedin.com/in/arindam-sharma-5751a4249/" style={{color:"#673ab7"}}><FaLinkedin size={(window.innerWidth > 1200)?40:30}/></a>
          <a href="https://www.instagram.com/arindam_sharma30/?igshid=YTQwZjQ0NmI0OA%3D%3D" style={{color:"#673ab7"}}><FaInstagram size={(window.innerWidth > 1200)?40:30}/></a>
          <a href="https://www.facebook.com/arindam.sharma.33671/" style={{color:"#673ab7"}}><FaFacebook size={(window.innerWidth > 1200)?40:30}/></a>
        </div>
      </div>

      {/* <img src="src/images/cover-photo.png" alt="" className="profile" /> */}
      <img src={cover} alt="" className="profile" />
    </section>
    <Process/> 
    </>
  );
};

export default Hero;
