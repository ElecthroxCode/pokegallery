import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PokeApiService } from '../../services/poke-api.service';
import { Pokemon } from '../../services/models/pokemon-model';

@Component({
  selector: 'app-gallery',
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
 
  private readonly pokeService = inject(PokeApiService);
  listPokemon:Pokemon[] = [];
  ngOnInit(): void {
   this.pokeService.getPokemon().subscribe(
    {
      next: (res) => {
        this.listPokemon = res.results;
        this.listPokemon.forEach((pokemon) => {
          pokemon.url = this.pokeService.getImgUrl(pokemon.url);
        });
        
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    }
   );
  }
}
