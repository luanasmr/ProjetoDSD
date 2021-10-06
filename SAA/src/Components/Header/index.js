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
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="config">Histórico</Link></li>
                    <li><Link to="../../../">Sair</Link></li>
                </ul>
            </nav>
        </div>
     
     </AreaHeader>
      );
  }
  export default Header;