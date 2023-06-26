import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="px-16">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;