import { Component, Input } from '@angular/core';
import { Pokemon } from '../../services/models/pokemon-model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() pokemon:Pokemon = { name: '', url: ''};

 capitalizeName(name:string):string{
  return name.charAt(0).toUpperCase()+name.slice(1);
 }
}
