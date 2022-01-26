import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class BolasService{
    bolasSeleccionadas:any=[];
    bolaGanadora:number=11;
    finApuesta:boolean=false;
    apuestaGanada:boolean=false;
    premio:number=0;
    bolasTotales=[1,2,3,4,5,6,7,8,9,10];
    pickedBalls(bola:any, event:any){
        event.preventDefault();
        if(!this.bolasSeleccionadas.includes(bola) && this.bolasSeleccionadas.length<8){
          this.bolasSeleccionadas.push(bola);
          }
    }
    borrarSeleccion(){
        this.bolasSeleccionadas.length=0;
      }
    obtenerBolas(){
        return this.bolasSeleccionadas;
    }
    obtenerFinApuesta(){
      return this.finApuesta;
    }
    bolasLength(){
     return this.bolasSeleccionadas.length;
    }
    getApuestaGanada(){
      return this.apuestaGanada
    }
    obtenerGanador(){
      this.bolaGanadora = this.bolasTotales[Math.floor(Math.random() * this.bolasTotales.length)];
      return this.bolaGanadora;
    }
    comprobarVictoria(){
      if(this.bolasSeleccionadas.includes(this.bolaGanadora)){
       return true;
      }else{
        return false;
      }
    }
    
}