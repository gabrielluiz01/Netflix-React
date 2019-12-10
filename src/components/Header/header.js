import React from 'react';
import Menu from './menu'
import Search from './search'
import './style.scss'
import Poster from './poster';

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="header-block">
                    <Menu/>
                    <Search/>
                </div>
                <Poster/>
            </header>
        )
    }
}