import React from 'react';
import PokeItem from './PokeItem';

class PokeList extends React.Component { 

    render() { 

      return (
        <ul>
          { this.props.pokemonData.map(booger => 
          <PokeItem
            key={booger._id}
            pokemon={booger.pokemon}
            height={booger.height}
            type_1={booger.type_1}
            type_2={booger.type_2}
            shape={booger.shape}
            url_image={booger.url_image}
        />)}
        </ul>
        )
    }
  }

  export default PokeList;