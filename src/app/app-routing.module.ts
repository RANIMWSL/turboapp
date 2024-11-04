import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccProduitFiniComponent } from './acc-produit-fini/acc-produit-fini.component';
import { TeamComponent } from './team/team.component';
import {PageComponent} from './page/page.component'

const routes: Routes = [
  {path :'accueil', component :AccueilComponent},
  {path :'accProduit',component: AccProduitFiniComponent},
  {path: 'team' , component :TeamComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AccueilComponent,AccProduitFiniComponent,TeamComponent]

