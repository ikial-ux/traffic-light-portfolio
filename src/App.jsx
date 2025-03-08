import TrafficLight from './TrafficLight';
import './App.css';  
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Traffic Light Portfolio";
  }, []);

  return (
    <>
      <TrafficLight />
    </>
  );
}

export default App;
