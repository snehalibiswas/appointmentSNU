import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public requests: any=[];
  currentUser: any;

  constructor( private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    console.log(this.currentUser);
    this.get_meeting_requests();
  }

  get_meeting_requests(){
    console.log("AAA");
    console.log(this.currentUser.toString());
    this.http.get("http://localhost:3000/api/users/requests/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        console.log(resultData.data);
        this.requests=resultData.data;
      });
      
  }

  approved(meeting_id: any){
    let bodyData =
    {
      "meeting_id": meeting_id,
      "approve": 1
    };
    console.log(meeting_id);
    this.http.put("http://localhost:3000/api/meetings/update/approve" + "/" + meeting_id, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
    });
    console.log("Meeting approved");
    alert("Meeting Approved Successfully")
    this.get_meeting_requests();
  }

  delete(meeting_id: any){
    this.http.delete("http://localhost:3000/api/meetings/delete" + "/" + meeting_id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Meeting Denied")
      this.get_meeting_requests();
    });
  }

}
