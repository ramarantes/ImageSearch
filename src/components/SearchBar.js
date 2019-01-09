import React from 'react';
import styled from 'styled-components';

class SearchBar extends React.Component {

    constructor(){
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = {term: ''};
    onInputClick()
    {
        console.log('click2');
    }
    onFormSubmit(e){
        e.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    }

    render(){
        const Btn = styled.button`
            background: ${props => props.primary ? "palevioletred" : "white"};
            color: ${props => props.primary ? "white": "palevioletred"};
            font-size: 1em;
            margin 1em;
            padding: 0.25em 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        `;
        var x = "opa";
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Image Search</label>
                <input type="text" value={this.state.term}  onChange={e => this.setState({term:e.target.value})} onClick={this.onInputClick}></input>
                <Btn>Normal</Btn>
                <Btn primary className={x}>Normal</Btn>
                </div>
                </form>    
        </div>);
    }
}

export default SearchBar;