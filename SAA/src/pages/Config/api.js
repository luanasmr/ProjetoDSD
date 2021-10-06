//import React from 'react';
//import { ContainerPage, TitlePage} from '../../Components/Main';
import axios from 'axios';
const  api = axios.create({
    
    
    baseURL:'https://saa-back-end-p.herokuapp.com'});

export default api;
