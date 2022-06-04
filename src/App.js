import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './components/pages/About';
import Contact from './components/pages/Contact';
import HomePage from './components/pages/Home';
import NavHeader from './components/pages/Nav';
import WorkPage from './components/pages/Work';

const App = () => {
  return (
    <>
      <Router>
        <NavHeader />
        <HomePage />
        <WorkPage />
        <AboutPage />
        <Contact />
      </Router>
    </>
  );
};

export default App;
