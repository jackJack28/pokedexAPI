import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-scheda-tecnica',
  templateUrl: './scheda-tecnica.component.html',
  styleUrls: ['./scheda-tecnica.component.css']
})
export class SchedaTecnicaComponent implements OnInit{

  constructor(private route: ActivatedRoute, private pokemonApi: PokemonService){}

  dati: any[] = []
  // getPokemon(){
  //   return this.pokemonApi.getPokemon()
  //   .subscribe(response =>{
  //     // this.dati = response;
  //     console.log(response)
  //   })
  // }

  pokemon: any
  ngOnInit(): void {
      // this.pokemonApi.getPokemon()
      // .subscribe((oresponse: any) =>{
      //   oresponse.results.forEach((result: { name: string; }) => {
      //     this.pokemonApi.getPokemons(result.name)
      //     .subscribe((aResponse:any) => {
      //       this.dati.push(aResponse)
      //       console.log(this.dati)
      //     })
      //   });
      // })
      // this.getPokemon();

      this.pokemonApi.getPokemon().subscribe()
      this.route.params.subscribe(params =>{
        this.pokemon = params['name'];
        this.pokemonApi.getPokemons('name')
      })
    }
}

