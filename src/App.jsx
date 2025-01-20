import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';

const App = () => {
  return (
    <Router>
      <RoutesComponent/>
   </Router>
  );
};

export default App;
