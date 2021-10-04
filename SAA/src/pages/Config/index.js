import React, { Component } from 'react';
import api from './api';
import styled from 'styled-components';
import './st.css';

import moment from 'moment';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Historico extends Component {
    state = {
        localizacao: [],
    }

    componentDidMount() {
        this.loadHist();

    }

    loadHist = async () => {
        // passando a página por parâmetro
        const response = await api.get(`/historico`);

        //console.log(this.props);
        console.log(response);

        this.setState({ localizacao: response.data });
    }

    render() {

        const { localizacao } = this.state;
        console.log(localizacao);
        return (

            <div>

                <center><h1>Histórico</h1></center>
          
            <div id="table">
              
                <center>
                

                    <MDBTable style={{ marginleft: "80px", marginrigth: "80px", whidth: "40%", border: "1px solid  black", color: "black" }}>
                    <MDBTableHead color="black" textWhite>
                        <tr >

                            <th>ID</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Data-Hora</th>

                        </tr>
                        </MDBTableHead>

                        <MDBTableBody>
                        {localizacao.map(local => (


                            <tr scope="col" key={local.idhist}>

                                <td>{local.idhist} </td>
                                <td>{local.latitude} </td>
                                <td>{local.longitude} </td>
                                <td>{moment(local.data_hora ).format('dd/MM/yyyy')}</td>
                               
                            </tr>



                        ))}
                        </MDBTableBody >
                            </ MDBTable>

                </center>
            </div>

            </div>



        );

    }





}
export default Historico;