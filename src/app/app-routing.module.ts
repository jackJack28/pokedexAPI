import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Componenti/home/home.component';
import { NotFoundComponent } from './Componenti/not-found/not-found.component';
import { SchedaTecnicaComponent } from './Componenti/scheda-tecnica/scheda-tecnica.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':name', component: SchedaTecnicaComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
