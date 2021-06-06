import React from 'react';
import Pokedex from './Pokedex';
import './PokeGame.css';

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function selectGroups(pokemons) {
    shuffle(pokemons);

    const group0 = pokemons.splice(4);
    const group1 = pokemons;

    return [group0, group1];
}

const pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

function checkWinner(groups) {
    let sum0 = 0;
    let sum1 = 0;
    groups[0].map((i) => (sum0 += i.base_experience));
    groups[1].map((i) => (sum1 += i.base_experience));
    return [sum0, sum1];
}

class PokeGame extends React.Component {
    render() {
        const groups = selectGroups(pokemons);
        const scores = checkWinner(groups);

        const winnerHeader = <h2 className="title win">Winning Hand</h2>;
        const loserHeader = <h2 className="title lose">Losing Hand</h2>;

        return (
            <div>
                {scores[0] > scores[1] ? winnerHeader : loserHeader}
                <p>Total experience: {scores[0]}</p>
                <Pokedex cards={groups[0]} />
                {scores[0] > scores[1] ? loserHeader : winnerHeader}
                <p>Total experience: {scores[1]}</p>
                <Pokedex cards={groups[1]} />
            </div>
        );
    }
}

export default PokeGame;
