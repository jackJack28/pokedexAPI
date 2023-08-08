import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(private pokemonApi: PokemonService, private http: HttpClient){}
  
  // getPokemon(){
  //   return this.pokemonApi.getPokemon()
  //   .subscribe(response =>{
  //     this.dati = response;
  //     console.log(response)
  //   })
  // }

  url = '10';

  // caricaPokemon(){
    // for (let index = 10; index < 100; index+10) {
    //   this.http.get(this.url+'?limit='+'1'+index)
    // }
    // this.http.get(this.url+"?limit=10")

  //   const nextIndex = this.url + 10;
  //   const nextItems = this.dati.slice(this.url, nextIndex);
  //   this.dati = this.dati.concat(nextItems);
  //   this.url = nextIndex
  // }

caricaPokemon(){
  this.pokemonApi.getPokemonn()
      .subscribe((response: any) =>{
        response.results.forEach((result: { name: string; }) => {
          this.pokemonApi.getPokemons(result.name)
          .subscribe((aResponse:any) => {
            this.dati.push(aResponse)
            // let x = this.dati.slice(aResponse+1) //nextIndex
            // this.dati.concat(x)
            console.log(this.dati)
          })
        });
      })
}

  dati: any[] = []
  ngOnInit(): void {
    this.pokemonApi.getPokemon()
      .subscribe((response: any) =>{
        response.results.forEach((result: { name: string; }) => {
          this.pokemonApi.getPokemons(result.name)
          .subscribe((aResponse:any) => {
            this.dati.push(aResponse)
            console.log(this.dati)
          })
        });
      })

      // this.pokemonApi.getPokemon()
      // .subscribe((response: any) =>{
      //   for (let x in response) { //Il ciclo for non va bene perché si tratta di ciclare un oggetto e non un array di oggetti
          // if(x == response.results){
            // console.log(this.dati = x);
        //     this.dati = x;
        //   }
        //   }
        // })
    }
}
