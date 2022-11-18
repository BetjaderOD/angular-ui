import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    MainPersonalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PersonalModule {

}
