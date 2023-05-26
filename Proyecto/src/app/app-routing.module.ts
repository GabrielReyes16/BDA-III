import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./Componentes/home/home.component";
import { BoletasViajeComponent } from "./Componentes/boletas-viaje/boletas-viaje.component";
import { BusesComponent } from "./Componentes/buses/buses.component";
import { ChoferesComponent } from "./Componentes/choferes/choferes.component";
import { ForoComponent } from "./Componentes/foro/foro.component";
import { RutasComponent } from "./Componentes/rutas/rutas.component";
import { UserComponent } from "./Componentes/user/user.component";
import { UsuariosComponent } from "./Componentes/usuarios/usuarios.component";
 const routes: Routes= [
    {path : 'home', component: HomeComponent},
    {path : 'boletas', component: BoletasViajeComponent},
    {path : 'buses', component: BusesComponent},
    {path : 'choferes', component: ChoferesComponent},
    {path : 'foro', component: ForoComponent},
    {path : 'rutas', component: RutasComponent},
    {path : 'user', component: UserComponent},
    {path : 'usuarios', component: UsuariosComponent}
 ];
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }