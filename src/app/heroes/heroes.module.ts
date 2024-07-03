import { NgModule } from '@angular/core';
import { HeroComponent } from './Hero/hero.component';
import { ListComponent } from './List/list.component';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [HeroComponent,ListComponent],
  declarations: [HeroComponent,ListComponent],
  imports:[CommonModule]
})
export class heroesModule { }
