import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                {this.props.cards.map((card) => (
                    <PokeCard details={card} />
                ))}
            </div>
        );
    }
}
export default Pokedex;
