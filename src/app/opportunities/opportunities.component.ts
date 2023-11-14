import { Component } from '@angular/core';

interface Opportunities {
  title: string;
  supervisor: string;
  type: string;
  dep: string;
  hrs: number;
  stipend: number;
}

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent {
  Opport: Opportunities[] = [
    {title: "Research Assistant", supervisor: "Balamurugan", type: "OCJ", dep: "Student Life", hrs: 20, stipend: 8000},
    {title: "Research Supervisor", supervisor: "Anshu Paliwal", type: "OCJ", dep: "Student Life", hrs: 20, stipend: 9000}
  ]
}
