import React from 'react'
import ReactDOM from 'react-dom'
import Cep from './Cep'

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cep />,div);
})