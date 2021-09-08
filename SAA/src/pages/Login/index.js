import React from 'react';

import Api from '../../Api';

import { AreaLogin } from './styled';
import { AreaMeio } from './styled';



import { BtnDefaultIcons } from '../../Components/Styled';
import GTranslateIcon from '@material-ui/icons/GTranslate';

export default ({onReceiveGoogle}) => {
    const actionLoginGoogle = async () =>{
       let result = await Api.googlelogar();

       if(result){
        onReceiveGoogle(result.user);
       }else {
           alert('Erro');
       }
    }
    return(
      <>
       <AreaMeio> 
       <div className="logo">
                <img src="../../../logo.png"></img>
        </div>
       </AreaMeio>
            <AreaLogin>
           
                <h1> Faça seu Login</h1>
                    <BtnDefaultIcons onClick={actionLoginGoogle}>
                        <GTranslateIcon></GTranslateIcon>

                        <div class="center">Fazer login com o Google </div>

                    </BtnDefaultIcons>
            </AreaLogin>
            
        </>
    );
   

}