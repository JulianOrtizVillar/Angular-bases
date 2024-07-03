import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterModule } from './contador/counter.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModule,
    AppRoutingModule,
    heroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
