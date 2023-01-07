import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/routes/contactos/contactos.component';
import { GaleriaComponent } from './components/routes/galeria/galeria.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ServiciosComponent } from './components/routes/servicios/servicios.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent,
  },

  {
    path: 'Servicios',
    component: ServiciosComponent,
  },

  {
    path: 'Galeria',
    component: GaleriaComponent,
  },

  {
    path: 'Contacto',
    component: ContactosComponent,
  },

  {
    path: '**',
    redirectTo:'Inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
