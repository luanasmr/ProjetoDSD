import React, { Component } from 'react';
import api from './api';


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
                <center>
                    <h1>Histórico</h1>

                    <table style={{ whidth: "100%", border: "1px solid  white", color: "white" }}
                    >
                        <tr >

                            <th>ID</th>
                            <th>Latitude</th>
                            <th>Longitude</th>

                        </tr>

                        {localizacao.map(local => (


                            <tr key={local.idhist}>

                                <td>{local.idhist} </td>
                                <td>{local.latitude} </td>
                                <td>{local.longitude} </td>
                                <td>{local.data_hora}</td>

                            </tr>



                        ))}</table>

                </center>
            </div>



        );

    }





}
export default Historico;