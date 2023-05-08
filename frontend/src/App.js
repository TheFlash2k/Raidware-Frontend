import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listeners from './Components/Listeners';
import Users from './Components/Users';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Listeners />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
