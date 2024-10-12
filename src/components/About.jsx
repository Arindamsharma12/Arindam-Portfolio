import { useState,useEffect,useRef } from "react";
import chai from "../images/chai-lover.gif";
import video from "../videos/video.mp4";
import { ImQuotesLeft } from "react-icons/im";
const About = () => {

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
  const capabilities = {
    "Web Designing":
      "I have a strong foundation in web design, allowing me to create visually appealing and responsive interfaces. My projects, such as the fully responsive Spotify clone, reflect my attention to user experience and aesthetics. I focus on creating intuitive designs that offer seamless navigation and functionality across different devices.",
    "Web Development":
      "My skills in web development extend beyond just design; I am proficient in full-stack development, particularly using the MERN stack (MongoDB, Express, React, and Node.js). I am capable of building complete web applications from front-end to back-end, ensuring that both the user interface and server-side functionality are well integrated.",
    Programming:
      "I have honed my programming skills through practice and problem-solving. I have solved over 350 LeetCode problems, which has significantly improved my understanding of algorithms, data structures, and logical problem-solving. My experience spans multiple programming languages, allowing me to approach challenges with versatility and efficiency.",
    "Problem Solving":
      "Problem-solving is one of my key strengths. Whether it’s debugging code, optimizing algorithms, or tackling complex projects, I excel at breaking down challenges and finding efficient solutions. My experience in solving algorithmic problems on platforms like LeetCode has further sharpened my critical thinking and problem-solving abilities.",
    Mathematics:
      "Mathematics has always been one of my strongest subjects, and it plays a crucial role in my approach to problem-solving and programming. My mathematical background helps me tackle algorithmic challenges with precision and allows me to work on more advanced topics, such as machine learning.",
  };

  const [capability, setCapability] = useState(capabilities["Web Designing"]);
  const [clickedIndex, setclickedIndex] = useState(0);
  const handleClick = (event, index) => {
    setCapability(capabilities[event.target.innerText]);
    // window.getComputedStyle(event.target).color = "rgb(255,255,255)";
    setclickedIndex(index);
  };

  const items = [
    "Web Designing",
    "Web Development",
    "Programming",
    "Mathematics",
    "Problem Solving",
  ];
  return (
    <section 
    ref={elementRef}
    className={`reveal-element ${isVisible ? 'visible' : ''}`}
    id="about">
      <div className="videoContainer">
        <video autoPlay loop muted playsInline class="bgVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlayDiv">
          <div className="bomber">
            <div className="about-head-div">
            <h1 className="underline-animation about-head">About Me</h1>
            </div>
            <p>
              <strong>Hi, I'm Arindam!</strong> I'm a MERN developer based in
              Delhi, India. My passion for programming started when I received
              my first computer at 10 years old, and I haven't looked back
              since. 10 years later, I'm proud to say that I've learned
              beautiful concepts about computer system and its architecture!
            </p>
            <img src={chai} alt="" className="chai" />
            <div 
            ref={elementRef}
            className={`below-bomber reveal-element ${isVisible ? 'visible' : ''}`}
            >
              <h1 className="underline-animation cap-heading">My Capabilities</h1>
              <div className="below-bomber-content">
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      onClick={(event) => handleClick(event, index)}
                      style={{
                        color: clickedIndex === index ? "white" : "#818181",
                        width: "max-content"
                      }} // Set color conditionally
                    >
                      {item}
                    </li>
                  ))}
                  {/* <li onClick={handleClick}></li>
                  <li onClick={handleClick}></li>
                  <li onClick={handleClick}></li>
                  <li onClick={handleClick}></li> */}
                </ul>
                <div className="capability">
                  {capability}
                  <div className="quote">
                    <h1>
                      <ImQuotesLeft size={20} color="#fff" /> It always seems
                      impossible until it's done
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
