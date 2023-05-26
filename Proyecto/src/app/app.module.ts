import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { UsuariosComponent } from './Componentes/usuarios/usuarios.component';
import { BusesComponent } from './Componentes/buses/buses.component';
import { ChoferesComponent } from './Componentes/choferes/choferes.component';
import { BoletasViajeComponent } from './Componentes/boletas-viaje/boletas-viaje.component';
import { RutasComponent } from './Componentes/rutas/rutas.component';
import { ForoComponent } from './Componentes/foro/foro.component';
import { UserComponent } from './Componentes/user/user.component';
import { AppRoutingModule } from './app-routing.module'; // Importa tu AppRoutingModule personalizado si lo tienes

// Importa tus otros componentes aquí


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsuariosComponent,
    BusesComponent,
    ChoferesComponent,
    BoletasViajeComponent,
    RutasComponent,
    ForoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
