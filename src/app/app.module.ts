import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { ArmaWebComponent } from './arma-web/arma-web.component';
import { ContactoSolicitudComponent } from './contacto-solicitud/contacto-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponenteNoEncontradoComponent } from './componente-no-encontrado/componente-no-encontrado.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FormatoNumerosPipe } from './pipes/formato-numeros.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ArmaWebComponent,
        ContactoSolicitudComponent,
        FormatoNumerosPipe,
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatCardModule,
        MatTooltipModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
