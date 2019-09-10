import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { ErroresComponent } from './errores/errores.component';
@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    ErroresComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
