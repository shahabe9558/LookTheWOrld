import data from './data';
import './App.css';
import { useState } from 'react';
import Tour from './components/Tour';

function App() {
  const[tours, setTours] = useState(data);

  function removeTour(id)
  {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  return (
    <div className="App">
       <Tour tours ={tours} removeId={removeTour}/>
    </div>
  );
}

export default App;
