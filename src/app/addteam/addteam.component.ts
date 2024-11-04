import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.scss']
})
export class AddteamComponent {
  accountForm: FormGroup;
  accounts: any[] = [];  // Tableau pour stocker les comptes

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      cin: ['', [Validators.required, Validators.minLength(8)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      sexe: ['', Validators.required],  // Ajout du champ sexe
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      poste: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      this.accounts.push(this.accountForm.value);  // Ajouter les données au tableau
      this.accountForm.reset();  // Réinitialiser le formulaire
    }
  }

  onCancel() {
    this.accountForm.reset();  // Réinitialiser le formulaire
  }
}
