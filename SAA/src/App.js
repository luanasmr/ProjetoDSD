import React, {useState} from 'react';

import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './pages/Login';

import Routes from './Routes';

import './App.css';

function App(){

  const [user, setUser] = useState(null);


    if(user === null){
      return (
        <Login>
    
        </Login>
        );
      
    }

 
  return (
    <BrowserRouter>
      <Header />

        <Routes> </ Routes>

      <Footer />

    </BrowserRouter>
    );
}

export default App;