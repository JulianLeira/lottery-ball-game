import { Component} from '@angular/core';
import { BolasService } from '../bolas.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent {
  constructor(private bolasService:BolasService) { }

  get apuestaGanada(): boolean {
        return this.bolasService.apuestaGanada;
      }
  get finApuesta(): boolean {
        return this.bolasService.finApuesta;
      }
  get bolaGanadora():number{
        return this.bolasService.bolaGanadora;

      }
  get premio():number{
        return this.bolasService.premio;
      }

  numOfBalls(n: number): Array<number> {
    return Array(n);
  }
  pickedBalls(bola:any, event:any){
   this.bolasService.pickedBalls(bola,event);
  }
  borrarSeleccion(){
    this.bolasService.borrarSeleccion();
  }
  getResultadoApuesta(){
    return this.bolasService.comprobarVictoria();
  }
  playAgain(){
    this.bolasService.bolaGanadora=0;
    this.bolasService.finApuesta=false;
    this.bolasService.apuestaGanada=false;
  }
  
  
}
