import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useRef,useEffect } from "react";
import logo from "../images/logo1.png";
import { IoMdClose } from "react-icons/io";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div 
    ref={elementRef} 
    className={`hamNav reveal-element ${isVisible ? 'visible' : ''}`}
    >
      {/* <img src="src/images/logo1.png" alt="" className="logo" /> */}
      <img src={logo} alt="" className="logo" />
      <h1>Arindam Sharma</h1>
      <div>
      <button className="btn" type="button" onClick={handleShow}>
        <GiHamburgerMenu color="white" size={30}></GiHamburgerMenu>
      </button>

      <div
       className={`offcanvas offcanvas-start bg-dark ${show ? 'show' : ''}`} tabIndex="-1" style={{ visibility: show ? 'visible' : 'hidden' ,color:
        "white",opacity:0.94
      }}>
        <div className="offcanvas-header" style={{backgroundColor:"black",justifyContent:"space-between"}}> 
          <img src={logo} alt="" className="logo"/>
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Arindam Sharma</h5>
          <button type="button" className="close-btn" onClick={handleClose}><IoMdClose color="white" size={30}/></button>
        </div>
        <div className="offcanvas-body btn-container">
          <button className="nav-btn" onClick={handleClose}><a href="#home">Home</a></button>
          <button className="nav-btn" onClick={handleClose}><a href="#about">About</a></button>
          <button className="nav-btn" onClick={handleClose}><a href="#skills">Skills</a></button>
          <button className="nav-btn" onClick={handleClose}><a href="#contactUs">Contact Us</a></button>
        </div>
      </div>

      {/* Overlay to close offcanvas */}
      {show && <div className="offcanvas-backdrop fade show" onClick={handleClose}></div>}
    </div>
      </div>
  );
};

export default HamburgerMenu;
