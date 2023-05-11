import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listeners from './Components/Listeners';
import Users from './Components/Users';
import Loot from './Components/Loot';
import Session from './Components/Sessions';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Listeners theme={theme} setTheme={setTheme} />}  />
        <Route path="/users" element={<Users theme={theme} setTheme={setTheme} />}  />
        <Route path="/loot" element={<Loot theme={theme} setTheme={setTheme} />} />
        <Route path = "/Sessions" element={<Session theme={theme} setTheme={setTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
