import React from 'react';
import { GlobalData } from './context/GlobalContext.jsx';
import { SchemeButtonA } from '@atoms/SchemeButons/SchemeButtonA/SchemeButtonA.jsx';
import { Portfolio } from './components/pages/Portfolio/Portfolio.jsx';

const App = () => {

  
  return (
    <GlobalData>
      <SchemeButtonA/>
      <Portfolio/>
    </GlobalData>
  );
};

export default App ;
