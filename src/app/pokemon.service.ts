import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon';

const pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=10';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // getPokemon(id: number): Observable<Pokemon[]>{
  //   const url = `${pokemonApi}/${id}`
  //   return this.http.get<Pokemon[]>(url);
  // }

  // getPokemon = async() => {
  //   const response = await fetch(pokemonApi);
  //   const listaPokemon = await response.json();
  // }


  getPokemon(){
    return this.http.get(pokemonApi);
  }

  x = 0
  getPokemonn(){
    this.x += 10
    return this.http.get(pokemonApi+`&offset=${this.x}`);
  }

  getPokemons(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
