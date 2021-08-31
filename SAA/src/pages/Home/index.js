/*import React from 'react';
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

export default Page;*/
import React, { useRef } from "react";
import Demo from "./styled.jsx";

const Map = () => {
    const innerRef = useRef();

    const getLocation = () => {
        innerRef.current && innerRef.current.getLocation();
    };

    return (
        <article style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line no-console*/}
            <Demo onError={(error) => console.log(error)} ref={innerRef} />
            <button
                className="pure-button pure-button-primary"
                onClick={getLocation}
                type="button"
            >
                Consultar aglomeração
            </button>
        </article>
    );
};

export default Map;