import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  public counter:number=10;

  increasyBy(type:string): void{
    if (type=='mas') {this.counter=this.counter+1;}
    else if(type=='menos'){
      if(this.counter!=0){this.counter=this.counter-1;}
    }
    else if(type=='reset'){this.counter=10;}
  }
}
