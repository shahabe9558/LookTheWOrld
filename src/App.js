import data from './data';
import './App.css';
import { useState } from 'react';
import Tour from './components/Tour';
import Refresh from './components/Refresh';

function App() {
  const[tours, setTours] = useState(data);

  function removeTour(id)
  {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  if(tours.length === 0)
  {
    return <Refresh setTours = {setTours} data = {data}/>
  }
  return (
    <div className="App">
       <Tour tours ={tours} removeId={removeTour}/>
    </div>
  );
}

export default App;
