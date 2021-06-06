import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                <PokeCard details={this.props.cards[0]} />
                <PokeCard details={this.props.cards[1]} />
                <PokeCard details={this.props.cards[2]} />
                <PokeCard details={this.props.cards[3]} />
            </div>
        );
    }
}
export default Pokedex;
