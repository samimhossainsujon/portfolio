import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='w-11/12 md:10/12 mx-auto'>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;