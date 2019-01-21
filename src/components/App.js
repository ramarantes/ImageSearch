import React from 'react';
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Tick from './Tick';
import Cep from './Cep';


class App extends React.Component {

    state = {
        images:[]
    }
    onSearchSubmit = async term =>{
        const response = await unsplash.get('/search/photos',{
            params:{query:term}
        });
        this.setState({images:response.data.results}); 
    }

    render(){
        return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
            <Tick />
            <Cep cep="01310000" onTesteJaponeiz={() => {alert('feliz');}} debug feliz>feliz</Cep>
        </div>);
    }
};

export default App;

