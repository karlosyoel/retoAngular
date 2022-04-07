import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../platillo.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.sass']
})
export class IngredientesComponent implements OnInit {

  ingredientes = [];
  ingredieteSelected?:any;

  constructor(private ingPop:PlatilloService) { }

  ngOnInit(): void {
    this.ingPop.getIngredientesPopulares().subscribe((d:[])=>{
        this.ingredientes = Object.values(d);
    });
  }

}
