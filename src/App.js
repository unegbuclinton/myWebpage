
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/pages/About";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/Home";
import NavHeader from "./components/pages/Nav";
import WorkPage from "./components/pages/Work";


const App = () => {
  return (

    <>
      <Router>
        <NavHeader />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutPage />} />

        </Routes>
      </Router>
    </>




  )
}

export default App;
