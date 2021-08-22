import React from 'react';

import { AreaLogin } from './styled';

import { BtnDefaultIcons } from '../../Components/Styled';
import GTranslateIcon from '@material-ui/icons/GTranslate';
export default () => {

    return(
        <AreaLogin>
            <h1> Faça login em sua conta</h1>
                <BtnDefaultIcons>
                    <GTranslateIcon></GTranslateIcon>

                    <div class="center">Fazer login com o Google</div>

                </BtnDefaultIcons>
        </AreaLogin>
    );
}