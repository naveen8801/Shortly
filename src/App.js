import BoostLink from './Components/BoostLink/BoostLink';
import Footer from './Components/Footer/Footer';
import FrontSection from './Components/FrontSection/FrontSection';
import NavBar from './Components/NavBar/NavBar';
import Statistics from './Components/Statistics/Statistics';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <FrontSection />
              <Statistics />
              <BoostLink />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route exact path="/user" element={<>Test</>} />
      </Routes>
    </>
  );
}

export default App;
