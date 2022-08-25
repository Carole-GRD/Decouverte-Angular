import { Component, OnInit } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // ++++++++++++++++++++++

  // hero = "Windstorm"

  // ++++++++++++++++++++++

  // hero : Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // }

  // ++++++++++++++++++++++

  // selectedHero : Hero | undefined
  // OU BIEN
  selectedHero? : Hero

  heroes : Hero[] = HEROES

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {             // équivalent du "useEffect"
    this.updateHeroes()
  }                           

  onSelect(hero : Hero) {
    console.log(hero);
    this.selectedHero = hero
  }

  onRandomSelect() {
    this.heroService.getRandomHero()
      .subscribe(
        data => {
          console.log(data);
          this.selectedHero = data
        }
      )
  }

  updateHeroes() {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes()
      .subscribe(
        data => {
          this.heroes = data
        }
      )
  }

}
