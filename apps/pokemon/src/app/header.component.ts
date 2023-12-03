import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Header component
 */
@Component({
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  selector: 'pokemon-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
