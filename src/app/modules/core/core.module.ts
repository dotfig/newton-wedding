import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarMainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarMainComponent
  ]
})
export class CoreModule { }
