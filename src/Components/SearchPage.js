import React from 'react'
import request from 'superagent';
import '../App.css';
import Spinner from '../Spinner';


export default class SearchPage extends React.Component {

    state = {
        pokemon: [],
        query: '',
        loading: false,
      }
 
      componentDidMount = async () => {
        await this.fetchPokemon();
      }
    
      fetchPokemon = async () => {
        console.log('the user clicked search!', this.state.query)
        
        this.setState({ loading: true });
    
       
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);
    
        this.setState({ 
          loading: false,
          pokemon: data.body.results,
        });
      }
    
 
      handleClick = async () => {
        await this.fetchPokemon();
      }
    
      handleQueryChange = async (e) => {
        console.log('the query changed', e.target.value)
        this.setState({ 
          query: e.target.value,
         });
      }
      render() {
    
        return (
          <>
          <label>
            Search
             <input onChange={this.handleQueryChange} />
          </label>
  
          <button onClick={this.handleClick}>Go!</button>
        
          <div>
            {}
            { 
            this.state.loading 
            ? <Spinner />
            : this.state.pokemon.map(poke => 
              <div key={poke.pokemon}>
                <div>
                <img src={poke.url_image} alt="poke" />
                </div>
                {poke.pokemon} : {poke.type_1}
              </div>)
            }
          </div>
         </>
        );
    }
  }