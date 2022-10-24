import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Work from './routes/Work';
import About from './routes/About';
import Contact from './routes/Contact';
import ProjectDetails from './routes/ProjectDetails';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

import './index.css';

function App() {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>

      <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:projectDetails" element={<ProjectDetails />} />
      </Routes>
      
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
