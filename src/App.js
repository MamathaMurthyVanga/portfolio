
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
