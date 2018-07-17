import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientComponent } from './http-client/http-client.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpInterceptorService } from 'src/app/http-interceptor.service';


const appRoutes :Routes = [
  {path:'Javascript', component: JavascriptComponent},
  {path:'Angular', loadChildren: './angular/angular.module#AngularModule'},
  {path:'', redirectTo:'Javascript', pathMatch:'full'},
  {path:'HttpClient', component: HttpClientComponent},
] 
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    DetailContentComponent,
    MyNavComponent,
    HttpClientComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [{
  provide:HTTP_INTERCEPTORS,
  useClass:HttpInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {  // Diagnostic only: inspect router configuration

 }
