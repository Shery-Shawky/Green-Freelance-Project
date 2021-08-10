import React from 'react';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/header/header';
import NavBar from './components/navbar';
import Projects from './components/header/projects';
import Aboutus from './components/aboutus';
import Services from './components/services';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Projects />
      <Aboutus />
      <Services />
      <ContactUs />
      <Clients />
      <Footer />
    </>
  );
};

export default App;
