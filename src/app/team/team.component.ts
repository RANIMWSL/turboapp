import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  constructor(private router: Router) {}

  goToteam() {
    this.router.navigate(['/team']);
  }
}
