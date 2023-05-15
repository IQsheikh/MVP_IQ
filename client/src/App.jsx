import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityArray from './Components/CityArray.jsx'
import CityDetails from './Components/CityDetails.jsx';
import CityDetailsPage from './Components/CityDetailsPage';

//import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
       <Route path="/" element={<CityArray/>} />
       <Route path="/city/:id/:season" element={<CityDetailsPage/>} />
      </Routes>
  );
}

export default App;


/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Touristic Cities in Belgium</h1>
      <CityArray />
    </div>
  );
};

export default App; */



