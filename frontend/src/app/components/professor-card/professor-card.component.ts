import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professor-card',
  templateUrl: './professor-card.component.html',
  styleUrls: ['./professor-card.component.css']
})
export class ProfessorCardComponent {
  @Input() users: any; // Input data for the professor

  onNgInit() : void {
    console.log(this.users);
  }

}