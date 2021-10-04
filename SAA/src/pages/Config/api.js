//import React from 'react';
//import { ContainerPage, TitlePage} from '../../Components/Main';
import axios from 'axios';
const  api = axios.create({
    
    
    baseURL:'http://localhost:5000'});

export default api;
