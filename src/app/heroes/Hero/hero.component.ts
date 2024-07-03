import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string='ironman';
  public age: number=45;


  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    var descri: string=this.capitalizedName+'-'+this.age;
    return descri;

  }

  public changeHeroInput(newname:string):void{

    this.name=newname;
  }

  public changeAgeInput(newAge:string):void{
    this.age = Number(newAge);
  }

  public changeHero():void{

    this.name='spiderman';
  }

  public changeAge():void{
    this.age = 35;
  }

  public resetForm():void{
    this.age = 45;
    this.name='ironman'
  }

}
