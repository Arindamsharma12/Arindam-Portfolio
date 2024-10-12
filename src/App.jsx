import Navbar from './components/Navbar'
import HamburgerMenu from './components/HamburgerMenu';
import Hero from './components/Hero'
import About from './components/About';
import Work from './components/Work';
import Artist from './components/Artist';
import Progressbar from './components/Progressbar';
import ContactMe from './components/ContactMe';
import { useState,useEffect,useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [nav,setNav] = useState(window.innerWidth);
    useEffect(()=>{
        const handleNav=()=>setNav(window.innerWidth);
        window.addEventListener('resize',handleNav);
        return ()=>window.removeEventListener('resize',handleNav)
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
    {(nav > 800) ? <Navbar/> : <HamburgerMenu/>}
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <About/>
      <Work/>
      <Artist></Artist>
      <Progressbar></Progressbar>
      <ContactMe></ContactMe>
    </>
  )
}

export default App
