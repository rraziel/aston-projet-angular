import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@pokemon/api';
import { CardComponent } from '@pokemon/card';

@Component({
  selector: 'pokemon-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pokemon$;
  constructor(pokemonService: PokemonService) {
    this.pokemon$ = pokemonService.getPokemon('bulbasaur');
  }
}
