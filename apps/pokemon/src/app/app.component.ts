import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '@pokemon/card';
import { HeaderComponent } from './header.component';
import { Pokemon } from '@pokemon/api';

@Component({
  standalone: true,
  imports: [HeaderComponent, CardComponent, RouterOutlet],
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon';
  url = 'https://google.com';
  pikachu: Pokemon = {
    height: 39,
    id: 1234,
    name: 'Pikachu',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      front_female: '',
    },
    weight: 123,
  };

  onAddPokemon(pokemon: Pokemon) {
    alert(`ca marche ${pokemon.name}`);
  }
}
