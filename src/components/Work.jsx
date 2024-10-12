import snake1 from "../images/snake-img.avif";
import workbg from "../videos/work-bg.mp4";
import spotify from "../images/Spotify2.png";
import tic from "../images/tic-tac-toe.jpg";
import { useEffect,useState,useRef } from "react";
const Work = () => {
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
    <section 
    ref={elementRef}
    className={`reveal-element ${isVisible ? 'visible' : ''}`}
    id="skills">
      <div className="heading">
      <h1 className="underline-animation skills-heading">My Work</h1>
      </div>
        <div className="work">
          <div className="img-container">
            <h1>Slither, score, and survive</h1>
            <img src={snake1} alt="" />
            <p><strong>The game of endless hunger—</strong>where every bite inches you closer to greatness!</p>
          </div>
          <div className="img-container">
            <h1>Your soundtrack</h1>
            <img src={spotify} alt="" className="middle"/>
            <p><strong>Every song, every mood—</strong>crafted with code, powered by passion!</p>
          </div>
          <div className="img-container">
            <h1>X’s and O’s, victory flows</h1>
            <img src={tic} alt="" />
            <p><strong>Tactics, timing, triumph—</strong>Tic Tac Toe, where legends are made!</p>
          </div>
        </div>
    </section>
  );
};

export default Work;
