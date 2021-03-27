import { Component, OnInit } from '@angular/core';
import { InfoCancion } from '../../interfaz/cancion';

import { exit, off } from 'process';
import { map,delay } from 'rxjs/operators';

@Component({
  selector: 'app-laguna',
  templateUrl: './laguna.component.html',
  styleUrls: ['./laguna.component.css']
})
export class LagunaComponent implements OnInit {

  sonidoOn :boolean=false;
  isRana:boolean = false;
  tituloCancion:string="";
  sonidoActual:string="";

  cancion1: any[] = ['brr','fiu','cric-cric','brrah'];
  cancion2: any[] = ['pep','birip','trri-trri','croac'];
  cancion3: any[] = ['bri-bri','plop','cric-cric','brrah'];  
  constructor() { }

  ngOnInit(): void {
  }

  detectSonido(entrada:string,t:string)
  {
    this.sonidoOn=true;
    console.log(entrada);
    
    for (let c1 of this.cancion1){
      if(c1 === entrada)
      {
        return this.tocarCancion(entrada, this.cancion1, "Canción 1");
      }
    }
      for (let c2 of this.cancion2){
        if(c2 === entrada)
        {
          return this.tocarCancion(entrada, this.cancion2, "Canción 2");
        }
      }

      for (let c3 of this.cancion3){
        if(c3 === entrada)
        {
          return this.tocarCancion(entrada, this.cancion3, "Canción 3");
        }
      }
  

  }


  tocarCancion(entrada:string, cancion:any[], titulo:string)
  {        
    var audio = new Audio();
   this.tituloCancion=titulo;
   document.getElementById('sonidosAct').innerHTML = "";
   var tiempo = 1000;
   var comenzar = false;
   cancion.forEach( c => { 
      
      if(entrada == c){
        comenzar = true;
      }

      if(comenzar){
          setTimeout(function(){
           
          const div = document.createElement('div');        
            div.className = 'col-md-3';  
            div.innerHTML = `
            <h2 class="btn btn-success ml-1 fadeIn animated" style="float:left; margin-left:8px;">${c}</h2>
            `;
          document.getElementById('sonidosAct').appendChild(div);          
              
          if(audio.played){
            audio.pause;
          }
                                       
          audio.src = `./assets/sounds/${c}.mp3`;
          audio.play();
          console.log(audio.src);
          
          if(c === "brrah" || c === "croac"){
            console.log("Finaliza la canciòn");
            audio.pause;
            this.isRana= true;
            this.sonidoOn=false;
          }
          }.bind(this),tiempo);            
          tiempo = tiempo + 2500;    
      }            
    });     
  }  
}

