import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html'
})
export class MainPersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnas: string[] = ['name', 'lastname', 'surname  ', 'birthday', 'salary', 'position', 'delete'];

  datos: personal[] = [new personal('betjader', 'Ortiz', 'Delgado', '1999-12-12', 100, 'programador'),
    new personal('betjader', 'Ortiz', 'Delgado', '1999-12-12', 100, 'programador'),
  ];

 personalSelect: personal = new personal("","","","",0,"");

  @ViewChild(MatTable) tabla1!: MatTable<personal>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(this.personalSelect);
    this.personalSelect = new personal("","","","",0,"");
    this.tabla1.renderRows();

  }
}


export class personal {
  constructor(public name: string, public lastname: string, public surname: string, public birthday: string, public salary: number, public position: string) {
  }

}
