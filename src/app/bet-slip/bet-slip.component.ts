
import { Component} from '@angular/core';
import { BolasService } from '../bolas.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})

export class BetSlipComponent{
  constructor(private bolasService:BolasService) { }
  placeHolder:number=8;
  bolaGanadora:number=11;
  gana:boolean=false;
  bolas=this.bolasService.obtenerBolas();
  multiplicador=this.bolasService.bolasLength();
  cantidadApostada:number=0;
  apuestaTotal:number=0;

  getApuestaTotal(){
    this.apuestaTotal= this.cantidadApostada*this.bolas.length;
  }


  obtenerBolaGanadora(){
    this.bolaGanadora=this.bolasService.obtenerGanador();
    this.gana=this.bolasService.comprobarVictoria();
    if(this.gana){
      this.bolasService.apuestaGanada=true;
      this.bolasService.premio=1.5*this.apuestaTotal;
    }else{
      this.bolasService.apuestaGanada=false;
    }
    this.bolasService.finApuesta=true;
    this.bolasService.bolasSeleccionadas.length=0;
    this.apuestaTotal=0;
  }
  
}
