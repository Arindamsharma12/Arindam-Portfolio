import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import audioFile from "../Music/TheLazySong.mp3";
import { useRef } from "react";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import Arindam from "../videos/ArindamBlack.gif";
import song from "../images/TheLazySong.jpg";
import { useState,useEffect } from "react";

const Progressbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Function to check window size and update state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inline style for image based on window size
  const imageStyle = {
    // width: '100%',  // Adjust width to fill container
    height: isMobile ? '250px' : 'auto',  // Set height to 250px when window is less than 600px
    objectFit: 'cover',  // Ensures image retains aspect ratio while filling the height
  };
  return (
    <div className="tech">
      <h1 className="about-head">Tech Stack</h1>
      <div className="tech-stack">
        <div className="stack">
          <SiHtml5 color="orange" style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="stack">
          <FaCss3Alt color="blue" style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="stack">
          <DiJsBadge
            color="yellow"
            style={{ height: "100px", width: "60px" }}
          />
        </div>
        <div className="stack">
          <FaReact color="skyblue" style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="stack">
          <FaPython color="navy" style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="stack">
          <FaJava color="Red" style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="stack">
          <TbBrandCpp style={{ height: "100px", width: "60px" }} />
        </div>
        <div className="Arindam-img">
          <img style={imageStyle} src={Arindam}/>
          <p>This page is full of everything you need to know. it’s a lot of information … Here’s a song from me to you—thanks for taking the time to explore my work:</p>
          <div className="audio">
          <img src={song} alt="" className="music"/>
          <audio controls className="audio-tag">
            <source src={audioFile} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
