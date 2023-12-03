import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '@pokemon/api';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'pokemon-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  pokemon$;
  constructor(activatedRoute: ActivatedRoute, pokemonService: PokemonService) {
    this.pokemon$ = activatedRoute.paramMap.pipe(
      map((listeDesParametres) => listeDesParametres.get('pokemonName')),
      filter(Boolean),
      switchMap((pokemonName) => pokemonService.getPokemon(pokemonName))
    );
  }
}
