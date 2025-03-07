import TrafficLight from './TrafficLight'; // Adjust path if necessary
import './App.css';  // Make sure the path is correct
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Traffic Light Portfolio";
  }, []);
  return (
    <div className="full-screen-center">
        <TrafficLight />  {/* Include the TrafficLight component here */}
    </div>
  );
}

export default App;
