import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { defaultIfEmpty, forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getPokemon(pokemonName: string) {
    const url = this.apiUrl + 'pokemon/' + pokemonName;
    return this.httpClient.get<Pokemon>(url);
  }

  getPokemons() /*: Observable<ReadonlyArray<Pokemon>>*/ {
    const url = this.apiUrl + 'pokemon/';
    return this.httpClient.get<PokemonListResponse>(url); /*.pipe(
      map(({ results }) => results.map(({ name }) => this.getPokemon(name))),
      //mergeMap((pokemons) => forkJoin(pokemons).pipe(defaultIfEmpty([])))
    );*/
  }
}

export interface PokemonListResult {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  results: Array<PokemonListResult>;
}
