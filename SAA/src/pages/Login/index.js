import React from 'react';

import Api from '../../Api';

import { AreaLogin } from './styled';

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
        <AreaLogin>
            <h1> Faça login em sua conta</h1>
                <BtnDefaultIcons onClick={actionLoginGoogle}>
                    <GTranslateIcon></GTranslateIcon>

                    <div class="center">Fazer login com o Google </div>

                </BtnDefaultIcons>
        </AreaLogin>
    );
}