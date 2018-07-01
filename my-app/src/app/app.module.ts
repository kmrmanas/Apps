import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';


const appRoutes :Routes = [
  {path:'Javascript', component: JavascriptComponent},
  {path:'Angular', loadChildren: './angular/angular.module#AngularModule'},
  {path:'', redirectTo:'Javascript', pathMatch:'full'},
] 
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }