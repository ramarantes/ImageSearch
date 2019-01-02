import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends React.Component {
    onSearchSubmit(term){
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID 2c31d64843d4e5e1bd4163ab101e32996e419f2745b5768da84b3013168d7bff' 
            },
            params:{query:term}
        }).then(result => this.usedata(result));
        
    }

    usedata(results){
        console.log(results.data.results);
    }

    render(){
        return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </div>);
    }
};

export default App;

