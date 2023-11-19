import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.css']
})
export class ApplicationCardComponent {
  Appli: any[] = [];
  public currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    this.makeAPICallInterval();
    this.fetchApplication();
  }

  ngOnInit(): void {
  }

  fetchApplication() {
    this.http.get("http://localhost:3000/api/application/fetch/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        this.Appli=resultData.data
        console.log(resultData.data);
    
      });
      console.log(this.Appli)
  }

  makeAPICallInterval(): void {
    // Set an interval for API call (e.g., every 5 seconds)
    setInterval(() => {
      this.fetchApplication();
    }, 5000); // Interval in milliseconds (e.g., 5000 ms = 5 seconds)
  }

  approveAppli(opportunityID: number){
    const event: Object = {
      post_id: opportunityID,
      user: this.currentUser
    };
    this.http.post("http://localhost:3000/api/application/approve", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
    });
    alert("Applied Successfully")
  }

  rejectAppli(opportunityID: number){
    const event: Object = {
      post_id: opportunityID,
      user: this.currentUser
    };
    this.http.post("http://localhost:3000/api/application/delete", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
    });
    alert("Deleted Successfully")
  }
  
}
