import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AccProduitFiniComponent } from "./acc-produit-fini/acc-produit-fini.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AddteamComponent } from "./addteam/addteam.component";
import { AppComponent } from "./app.component";
import { ConnxComponent } from "./connx/connx.component";
import { GSprdComponent } from "./g-sprd/g-sprd.component";

import { PageComponent } from "./page/page.component";
import { PieceDetComponent } from "./piece-det/piece-det.component";
import { TeamComponent } from "./team/team.component";
import { MenuComponent } from "./menu/menu.component";
import { BarreComponent } from "./barre/barre.component";



@NgModule({
  declarations: [
    AppComponent,
    ConnxComponent,
    MenuComponent ,
    AccueilComponent,
    AccProduitFiniComponent,
    GSprdComponent,
    PieceDetComponent,
    TeamComponent,
    AddteamComponent,
    PageComponent,
    BarreComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, // <--- Ajouter FormsModule ici
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
