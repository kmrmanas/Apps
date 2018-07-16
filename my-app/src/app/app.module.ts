import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


const appRoutes :Routes = [
  {path:'Javascript', component: JavascriptComponent},
  {path:'Angular', loadChildren: './angular/angular.module#AngularModule'},
  {path:'', redirectTo:'Javascript', pathMatch:'full'},
] 
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    DetailContentComponent,
    MyNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  // Diagnostic only: inspect router configuration

 }
