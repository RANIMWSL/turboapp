import { Component } from '@angular/core';

@Component({
  selector: 'app-connx',
  templateUrl: './connx.component.html',
  styleUrls: ['./connx.component.scss']
})
export class ConnxComponent {
  
    email: string = '';
    password: string = '';
  
    onSubmit() {
      if (this.email && this.password) {
        console.log('Email:', this.email);
        console.log('Mot de Passe:', this.password);
        // Ajouter la logique de connexion ici
      }
    }
  
    onForgotPassword() {
      console.log('Mot de passe oublié ?');
      // Rediriger vers la page de réinitialisation ou afficher une modale
    }
  
}
