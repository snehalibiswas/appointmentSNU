import { Component } from '@angular/core';

interface Request {
  name: string;
  day: string;
  time: string;
  title: string
}

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  Req: Request[] = [
    {name: "Richard Joe", day: "Wednesday", time: "3:30pm-3:40pm", title: "AI Marks and Doubts"},
    {name: "Snehali Biswas", day: "Thursday", time: "3:30pm-3:40pm", title: "AI Question Paper"},
  ];
}
