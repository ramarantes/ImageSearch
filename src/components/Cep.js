import React from 'react';
import axios from 'axios';

export default class Cep extends React.Component{
    constructor(props){
		super(props);
        this.state = {cep: "loading..."};
    }
    async componentDidMount(){
        const resultado = await axios.get('http://lojaqagera.racco.com/api/gera/cep/' + this.props.cep);
        // .then(function (response) {
        //     console.log(this);
        //     this.setState({cep: response});
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        console.log(resultado);
		 this.setState({cep:resultado.data.namebairro});
		 
    }

    render(){
        return <div>{this.state.cep} </div>;
    }
}