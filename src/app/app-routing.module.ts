import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes= []
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],
})
export class AppRoutingModule { }
