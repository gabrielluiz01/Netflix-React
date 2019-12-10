import React from 'react';
import './style.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="block-menu">
                <img src={require ('../../assets/logo.png')}/>
                <nav className="menu">
                    <ul>
                        <li>Início</li>
                        <li>Séries</li>
                        <li>Filmes</li>
                        <li>Adicionados recentementes</li>
                        <li>Minha lista</li>
                    </ul>
                </nav>
            </div>
        )
    }
}