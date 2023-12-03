import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@pokemon/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pokemons$;
  constructor(pokemonService: PokemonService) {
    this.pokemons$ = pokemonService.getPokemons();
  }
}
