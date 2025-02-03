import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pokemon, PokemonResponse } from './models/pokemon-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private readonly URL_POKE = 'https://pokeapi.co/api/v2/pokemon/';
  private readonly URL_IMG = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/';
  http = inject(HttpClient);

  getPokemon(limit:number = 20, offset:number = 0):Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`${this.URL_POKE}?limit=${limit}&offset=${offset}`);
  }

  getImgUrl(url:string){
    const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    return `${this.URL_IMG}${id}.svg`;
  }
  
}
