import { Component } from '@angular/core';

interface Save {
  title: string;
  supervisor: string;
  date: string;
}

@Component({
  selector: 'app-saved-card',
  templateUrl: './saved-card.component.html',
  styleUrls: ['./saved-card.component.css']
})
export class SavedCardComponent {
  Saver: Save[] = [
    {title: "Research Assistant", supervisor: "Balamurugan", date: "20-10-23"},
    {title: "Research Supervisor", supervisor: "Anshu Paliwal", date: "20-11-23"}
  ];
}
