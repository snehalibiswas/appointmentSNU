import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent {

  @Input() professors: any[] = [
  ];

  constructor() { }

  onNgInit() : void {
    console.log(this.professors);
  }

}

