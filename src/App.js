import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/resume';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
