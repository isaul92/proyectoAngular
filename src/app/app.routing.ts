// importar modulos del router de anguylar
import {AppComponent} from './app.component'
import {ErroresComponent} from './errores/errores.component'
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { from } from 'rxjs';
//Array de rutas

const appRoutes: Routes=[

{path:'ejemplo',component:EjemploComponent},
{path:'**',component:ErroresComponent},

];


export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
