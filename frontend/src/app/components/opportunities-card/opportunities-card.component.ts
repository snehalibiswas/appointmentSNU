import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opportunities-card',
  templateUrl: './opportunities-card.component.html',
  styleUrls: ['./opportunities-card.component.css']
})
export class OpportunitiesCardComponent {
  opportunities: any[] = [];
  public currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    this.fetchOpportunities();
  }

  ngOnInit(): void {

  }

  fetchOpportunities() {
    // Fetching opportunities from the backend API
    this.http.get<any[]>('http://localhost:3000/api/opportunities/fetch')
      .subscribe(
        (response) => {
          console.log('Opportunities fetched successfully:', response);
          this.opportunities = response; // Assigning fetched opportunities to the component property
        },
        (error) => {
          console.error('Failed to fetch opportunities:', error);
          // Handle error response here
        }
      );
  }

  savePost(opportunityID: number){
    const event: Object = {
      post_id: opportunityID,
      user: this.currentUser
    };
    this.http.post("http://localhost:3000/api/saves/add", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
    });
    alert("Meeting Registered Successfully")

  }
}
