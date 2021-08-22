import React from 'react';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

import { ContainerPage, TitlePage} from '../../Components/Main';

const Page = () => {
    return(
        <ContainerPage>
            <TitlePage>
                <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
                Seja Bem vindo!
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;