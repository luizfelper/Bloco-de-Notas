import CardNota from './CardNota';
import React, { Component } from 'react';

class ListaDeNotas extends Component {

    render() {
        return (
        <ul>
            <li>
                <CardNota/>
            </li>
            <li>
                <CardNota/>
            </li>
            <li>
                <CardNota/>
            </li>
        </ul>
        );
    }

}

export default ListaDeNotas;