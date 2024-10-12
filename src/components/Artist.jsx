import sidhu from "../videos/sidhu.mp4";
import { useRef,useState,useEffect } from "react";
const Artist = () => {
    const videoRef = useRef(null);
    const handlePlayPause = (event) => {
        // Prevent event bubbling to the container
        event.stopPropagation();
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      };

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
    id="artist">
    <div className="video-container" onClick={handlePlayPause}>
      <video ref={videoRef} autoPlay loop playsInline className="bg-video">
        <source src={sidhu} type="video/mp4" />
      </video>
      <div className="sidhu-content">
        <h1>Legend's Section</h1>
      {/* Play/Pause button over the video */}
      </div>
      <button className="playButton" onClick={handlePlayPause}>
        Click to Play/Pause
      </button>
    </div>
    </section>
  );
};

export default Artist;
