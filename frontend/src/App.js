import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listeners from './Components/Listeners';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Listeners />} />
      </Routes>
    </Router>
  );
}

export default App;
