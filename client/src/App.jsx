import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityArray from './Components/CityArray.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Touristic Cities in Belgium</h1>
      <CityArray />
    </div>
  );
};

export default App;
