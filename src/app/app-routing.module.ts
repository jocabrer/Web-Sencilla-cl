import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmaWebComponent } from './arma-web/arma-web.component';
import { ComponenteNoEncontradoComponent } from './componente-no-encontrado/componente-no-encontrado.component';
import { ContactoSolicitudComponent } from './contacto-solicitud/contacto-solicitud.component';

const routes: Routes = [
    { path: 'creatuweb', component: ArmaWebComponent },
    { path: 'contacto', component: ContactoSolicitudComponent },
    { path: '', redirectTo: '/creatuweb', pathMatch: 'full' },
    { path: '**', component: ComponenteNoEncontradoComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
