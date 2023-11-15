import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public meetings: any=[];
  currentUser: any;

  constructor( private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    console.log(this.currentUser);
    this.get_meeting_scheduled();
  }

  get_meeting_scheduled(){
    console.log("BBB");
    this.http.get("http://localhost:3000/api/users/meetings/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        console.log(resultData.data);
        this.meetings=resultData.data;
      });
      // this.get_meeting_scheduled();
      
  }
}
