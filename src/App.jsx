import TrafficLight from './TrafficLight'; // Adjust path if necessary
import './App.css';  // Make sure the path is correct
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <div className="full-screen-center">
        <TrafficLight />  {/* Include the TrafficLight component here */}
    </div>
  );
}

export default App;
