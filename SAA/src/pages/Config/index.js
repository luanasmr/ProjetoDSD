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
             
                    <h1>Listar</h1>

                    <ul style={{ listStyleType: "none", color: "white" , backgroundcolor: "green"}}
                    >
                        {localizacao.map(local => (

                            <li key={local.idhist}>

                                <p>usuario:   {local.idhist} </p>
                                <p>latitude:  {local.latitude} </p>
                                <p>longitude: {local.longitude} </p>
                                <p>data: {local.data_hora}</p>
                            </li>



                        ))}</ul>
            

            </div>



        );

    }





}
export default Historico;