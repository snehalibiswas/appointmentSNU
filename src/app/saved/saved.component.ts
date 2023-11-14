import { Component } from '@angular/core';

interface Save {
  title: string;
  supervisor: string;
  date: string;
}

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent {

  Saver: Save[] = [
    {title: "Research Assistant", supervisor: "Balamurugan", date: "20-10-23"},
    {title: "Research Supervisor", supervisor: "Anshu Paliwal", date: "20-11-23"}
  ];
}
