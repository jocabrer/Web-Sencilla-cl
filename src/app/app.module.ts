import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { ArmaWebComponent } from './arma-web/arma-web.component';
import { ContactoSolicitudComponent } from './contacto-solicitud/contacto-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponenteNoEncontradoComponent } from './componente-no-encontrado/componente-no-encontrado.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    ArmaWebComponent,
    ContactoSolicitudComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forRoot([
        {path: 'creatuweb', component: ArmaWebComponent},
        {path: 'contacto', component: ContactoSolicitudComponent},
        {path: '', redirectTo: '/creatuweb', pathMatch: 'full'},
        {path: '**', component: ComponenteNoEncontradoComponent}
      ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
