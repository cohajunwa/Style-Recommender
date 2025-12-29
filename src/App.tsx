import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import BuildCloset from './pages/BuildCloset.tsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/build" element={<BuildCloset/>} />
      </Routes>
      
    </Router>   
  )
}

export default App
