import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-saved-card',
  templateUrl: './saved-card.component.html',
  styleUrls: ['./saved-card.component.css']
})
export class SavedCardComponent {
  Saver: any[] = [];
  public currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    this.makeAPICallInterval();
  }

  ngOnInit(): void {
  }


  fetchSaved() {
    this.http.get("http://localhost:3000/api/saves/fetch/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        this.Saver=resultData.data
        console.log(resultData.data);
    
      });
      console.log(this.Saver)
  }

  makeAPICallInterval(): void {
    // Set an interval for API call (e.g., every 5 seconds)
    setInterval(() => {
      this.fetchSaved();
    }, 5000); // Interval in milliseconds (e.g., 5000 ms = 5 seconds)
  }

  applySave(opportunityID: number){
    const event: Object = {
      post_id: opportunityID,
      user: this.currentUser
    };
    this.http.post("http://localhost:3000/api/apply/add", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
    });
    alert("Applied Successfully")
  }

  deleteSave(opportunityID: number){
    const event: Object = {
      post_id: opportunityID,
      user: this.currentUser
    };
    this.http.post("http://localhost:3000/api/saves/delete", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
    });
    alert("Deleted Successfully")
  }
}
