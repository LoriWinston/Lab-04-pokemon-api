  
import React from 'react';

class PokeItem extends React.Component { 
    render() { 
      return ( 
        <div className="picture-boxes">
            <img src={this.props.url_image} alt='images' class="images"/>
            <p>Name: {this.props.pokemon}</p>
            <p>Height: {this.props.height}</p>
            <p>Type 1: {this.props.type_1}</p>
            <p>Type 2: {this.props.type_2}</p>
            <p>Shape: {this.props.shape}</p>
        </div>
      )
    }
  }

  export default PokeItem;