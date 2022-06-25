import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
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
        <AppContainer id="home">
          <HomePage />
        </AppContainer>
        <AppContainer id="work">
          <WorkPage />
        </AppContainer>
        <AppContainer id="about">
          <AboutPage />
        </AppContainer>
        <AppContainer id="contact">
          <Contact />
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

const AppContainer = styled.div``;
