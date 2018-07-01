import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularComponent } from './angular.component';
const angularRoutes :Routes = [
  {path:'', component: AngularComponent}
] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(angularRoutes)
  ],
  declarations: [AngularComponent]
})
export class AngularModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
