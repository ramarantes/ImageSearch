import React from 'react';
import styled from 'styled-components';

export default class Tick extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: 0};

        //this.startTimer = this.startTimer.bind(this);
    }
    startTimer(){
        setInterval(() => this.setState({time: this.state.time + 1}),1000);
    }


    componentDidMount(){
        this.startTimer();
    }
    render(){
        const Dix = styled.div`
            color: ${props => (props.children % 2) > 0 ? "red" : "blue" }
        `;
        return<Dix>{this.state.time}</Dix>;
    }
}