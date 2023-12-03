import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '@pokemon/api';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true })
  pokemon!: Pokemon;
  @Output()
  addPokemonToCart = new EventEmitter<Pokemon>();

  onClick() {
    this.addPokemonToCart.next(this.pokemon);
  }
}
