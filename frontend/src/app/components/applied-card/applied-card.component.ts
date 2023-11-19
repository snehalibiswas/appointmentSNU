import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applied-card',
  templateUrl: './applied-card.component.html',
  styleUrls: ['./applied-card.component.css']
})
export class AppliedCardComponent {
  Apply: any[] = [];
  public currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    this.makeAPICallInterval();
  }

  ngOnInit(): void {
  }

  fetchApplied() {
    this.http.get("http://localhost:3000/api/apply/fetch/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        this.Apply=resultData.data
        console.log(resultData.data);
    
      });
      console.log(this.Apply)
  }

  makeAPICallInterval(): void {
    // Set an interval for API call (e.g., every 5 seconds)
    setInterval(() => {
      this.fetchApplied();
    }, 5000); // Interval in milliseconds (e.g., 5000 ms = 5 seconds)
  }
}
