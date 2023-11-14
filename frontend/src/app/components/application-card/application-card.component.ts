import { Component } from '@angular/core';

interface Application {
  title: string;
  name: string;
  major: string;
  type: string;
}

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.css']
})
export class ApplicationCardComponent {
  Appli: Application[] = [
    {title: "Web Designer", name: "Snehali Biswas", major: "CSE", type: "student"},
    {title: "UI/UX Designer", name: "Richard Joe", major: "CSE", type: "student"}
  ]
}
