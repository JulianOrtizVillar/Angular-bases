import { NgModule } from "@angular/core";
import { ContadorComponent } from "./ComponetsContador/contador.component";

@NgModule({

  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]
})
export class counterModule{}
