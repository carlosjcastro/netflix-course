import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactosComponent } from './contactos/contactos.component';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [
    InicioComponent,
    ServiciosComponent,
    GaleriaComponent,
    ContactosComponent,
    JobsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
