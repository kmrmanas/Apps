import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
const angularRoutes :Routes = [
  {path:'', component: AngularComponent},
] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(angularRoutes)
  ],
  declarations: [AngularComponent]
})
export class AngularModule { }
