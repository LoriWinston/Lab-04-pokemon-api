import React from 'react'
import '../App.css';
import pokeData from '../Data'
import PokeList from './PokeList';
import Dropdown from './Dropdown';
//import Sort from './Sort';


export default class SearchPage extends React.Component {

    state = {
        pokemonArray: pokeData,
        type_1A: '',
        type_2: '',
        sortBy: '',
        query: '',
        _id:'',
        order: 'ascending'
        
      }
 
  handletype_1AChange = (e) => { this.setState({ type_1A: e.target.value})} 

  handletype_2Change = (e) => { this.setState({ type_2: e.target.value })}

  handleSortChange = (e) => { this.setState({ sortBy: e.target.value })}

  handleInputChange = (e) => { this.setState({ query: e.target.value })}

  handleAscendingChange = (e) => { this.setState({ order: e.target.value })}
  render() {


    if(this.state.sortBy){
       
//SORT
if (this.state.order === 'ascending'){
    this.state.pokemonArray.sort((a,b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
} else {
    this.state.pokemonArray.sort((a,b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
}
    }

      const filteredPoke = this.state.pokemonArray.filter((newPoke) => {
          if(!this.state.query){
              return true;
          }

          if (this.state.query){
              if(newPoke.pokemon.includes(this.state.query)) return true;
          }

        return false; 
      });


      return (
        <>
          <input onChange={this.handleInputChange} placeholder='search bar'/>
          
          <select onChange={this.handleAscendingChange}>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
          <select onChange={this.handleSortChange}>
            <option value="shape">shape</option>
            <option value="pokemon">pokemon</option>
          </select>


           <PokeList filteredPoke={filteredPoke} />
        </>
    );
  }
}
