import React from 'react';
import './style.scss'

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: false,
        }
    }

    showInput = () => {
        this.setState({
            input: !this.state.input
        })
    }


    render() {
        return(
            <div className="block-search">
                <img src={require ('../../assets/lupa.png')} onClick={this.showInput}/>
                {this.state.input == true ? (
                    <input type="text" placeholder="Titulos, gente e genero"/>
                ) : (
                    null
                )}
                <img src={require ('../../assets/sino.png')} className="bell"/>
                <img src={require ('../../assets/usuario02.png')} className="usuario"/>
                <img src={require ('../../assets/seta.png')} className="seta"/>
            </div>
        )
    }
}