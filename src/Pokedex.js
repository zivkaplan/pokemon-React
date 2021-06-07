import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h2 className="Pokedex-title win">Winning Hand</h2>;
        } else {
            title = <h2 className="Pokedex-title lose">Losing Hand</h2>;
        }

        return (
            <div className="Pokedex">
                <p>{title}</p>
                <p>Total EXP: {this.props.totalExp}</p>
                <div className="Pokedex-body">
                    {this.props.cards.map((card) => (
                        <PokeCard details={card} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Pokedex;
