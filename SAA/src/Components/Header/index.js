import React from 'react';

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
                    <li>Configurações</li>
                    <li>Sair</li>
                </ul>
            </nav>
        </div>
     
     </AreaHeader>
      );
  }
  
  export default Header;