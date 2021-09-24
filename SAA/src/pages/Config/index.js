import React, { Component } from 'react';
import api from './api';

class Historico extends Component {
    state = {
        localizacao: [],


    }
// método para carregar os livros



   componentDidMount() {
    this.loadHist();
   }

   loadHist = async () => {
    // passando a página por parâmetro
    const response = await api.get(`/users`);

    //console.log(this.props);
    console.log(response);

    const {docs, ...bookInfo} = response.data;
    console.log(bookInfo);

    this.setState({ localizacao: docs });
    }

    render() {
        this.loadHist();
       
        const { localizacao } = this.state;
        console.log(localizacao);
        return (

            <div>
             
                    <h1>Listar</h1>

                    <ul style={{ listStyleType: "none", color: "white" }}>
                        {localizacao.map(local => (

                            <li key={local.id}>

                                <p>usuario:   {local.id} </p>
                                <p>latitude:  {local.latitude} </p>
                                <p>longitude: {local.longitude} </p>
                            </li>



                        ))}</ul>
            

            </div>



        );

    }





}
export default Historico;