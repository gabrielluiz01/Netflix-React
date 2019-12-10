import React from 'react';
import './style.scss'

export default class Poster extends React.Component {
    render() {
        return(
            <div className="poster">
                <div className="poster-block">
                    <img src={require ('../../assets/chica-title.webp')}/>
                    <h1>Assista à temporada 1 agora</h1>
                    <p>A filha de um casal de vampiros decide continuar humana para ficar com seu amor e realizar o sonho de se tornar cantora.</p>
                    <div className="block-buttons">
                        <button>&#9658; Assistir</button>
                        <button>+ Minha lista</button>
                        <button>Mais informações</button>
                    </div>

                </div>
            </div>
        )
    }
}