import { Component } from '@angular/core';

interface Application {
  title: string;
  name: string;
  major: string;
  type: string;
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  Appli: Application[] = [
    {title: "Web Designer", name: "Snehali Biswas", major: "CSE", type: "student"},
    {title: "UI/UX Designer", name: "Richard Joe", major: "CSE", type: "student"}
  ]
}
