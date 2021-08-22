import React from 'react';
import {Link} from 'react-router-dom';

import {AreaHeader} from './styled';
function Header(){
    return (

     <AreaHeader>
        <div className="container">
            <div className="logo">
                <img src="../../../logo.png"></img>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Inicío</Link></li>
                    <li><Link to="config">Configurações</Link></li>
                    <li><Link to="logout">Sair</Link></li>
                </ul>
            </nav>
        </div>
     
     </AreaHeader>
      );
  }
  
  export default Header;