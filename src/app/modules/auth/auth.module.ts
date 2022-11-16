import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './pages/singin/singin.component';
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../types/material-modules";



@NgModule({
  declarations: [
    SinginComponent
  ],
  imports: [
    CommonModule, FormsModule, ...materialModules
  ],
  exports: [SinginComponent]
})
export class AuthModule { }
