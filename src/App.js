import { Fragment } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header'
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </Fragment>
    );
}

export default App;
