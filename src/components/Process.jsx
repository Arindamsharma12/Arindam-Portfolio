import { GiSpy } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
const Process = () => {
  return (
    <div className="process">
      <h1>The Process </h1>
      {/* <span>Behind The Scenes</span> */}
      <div className="process-container">
        <div className="process-box">
          <div className="number active"><GiSpy color="#000" size={30}/></div>
          <span>Spy</span>
          
          <p>Research and analyze the project requirements</p>
        </div>
        <div className="process-box">
          <div className="number active"><FaLightbulb color="#000" size={30}/></div>
          <span>Dream</span>
          
          <p>Plan and ideate different directions.</p>
        </div>
        <div className="process-box">
          <div className="number active"><FaTools color="#000" size={30} margin="100px"/></div>
          <span>Craft</span>
          
          <p>Crafting & doing some sort of magic.</p>
        </div>
        <div className="process-box">
          <div className="number active"><VscDebugConsole size={30} color="#000"/></div>
          <span>Testify</span>
          
          <p>Test, refine, adapt, improve & iterate.</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
