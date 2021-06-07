import React from 'react';
import './PokeCard.css';

function padInt(id) {
    const idArr = String(id).split('');
    if (idArr.length >= 3) return id;
    while (idArr.length < 3) {
        idArr.unshift('0');
    }
    return idArr.join('');
}
class PokeCard extends React.Component {
    render() {
        const { id, name, type, base_experience: exp } = this.props.details;
        const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padInt(
            id
        )}.png`;

        return (
            <div className="PokeCard">
                <div className="PokeCard--img--div">
                    <img
                        className="PokeCard--img"
                        src={imgUrl}
                        alt={name + ' pokemon'}
                    />
                </div>
                <p className="PokeCard--name">{name}</p>
                <p className="PokeCard--type">Type: {type}</p>
                <p className="PokeCard--exp">EXP: {exp}</p>
            </div>
        );
    }
}
export default PokeCard;
