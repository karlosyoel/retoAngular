import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../platillo.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.sass']
})
export class PlatillosComponent implements OnInit {

  listaPlatillos = [];
  listaRandPlatillos:any = [];
  buscarP = "";
  platilloSelected:any = [];
  
  loadRandPlatillos():void{
    for(var i=0;i<5;i++){
      this.ingPop.getRandomPlatillo().subscribe((d:[])=>{
        if(d){
          this.listaRandPlatillos?.push(Object.values(d));
        }
      });
    }
  }

  changeEvent():void{
    if(!this.buscarP){
      this.ingPop.findPlatillos("").subscribe((d:[])=>{
        this.listaPlatillos = Object.values(d);
      });
    }
  }

  buscarPlatillo():void{
    if(this.buscarP){
      this.ingPop.findPlatillos(this.buscarP).subscribe((d:[])=>{
        if(d){
          this.listaPlatillos = Object.values(d);
        }
      });
    }
  }
  
  constructor(private ingPop:PlatilloService) { }

  ngOnInit(): void {
    this.changeEvent();
    this.loadRandPlatillos();

    setInterval(() => {
      this.listaRandPlatillos = [];
      this.loadRandPlatillos(); 
    }, 5*60*1000);
  }

}
