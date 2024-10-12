import logo from "../images/logo1.png"
import { useRef,useEffect,useState } from "react";
const Navbar = ()=>{
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
    return <div 
    ref={elementRef}
    // className={{` reveal-element ${isVisible ? 'visible' : ''}`}}
    className={`navbar reveal-element ${isVisible ? 'visible' : ''}`}
>
        <img src={logo} alt="" className="logo"/>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
        </ul>
    </div>
}

export default Navbar