import { Component } from '@angular/core';

interface Meeting {
  name: string;
  time: string;
  status: string
  room: string
}

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.css']
})
export class MeetingCardComponent {
  Meet: Meeting[] = [
    {name: "Snehasis Mukherjee", time: "3:30pm-3:40pm", status: "Pending", room: "C309"},
    {name: "Pooja Mallik", time: "3:30pm-3:40pm", status: "Approved", room: "C219J"}
  ];
}
