import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrls: ['./posting-page.component.css']
})
export class PostingPageComponent {
  public apply=0;
  title: string = "";
  supervisor: string = "";
  jobtype: string = "";
  department: string = "";
  hours: string = "";
  stipend: string = "";
  public form=0;
  public currentUser: any;

  // constructor(private http: HttpClient) {
  //   this.currentUser = localStorage.getItem('useremail');
  //   console.log("Constructor");
  // }

  
  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
  }

  applications(){
    this.apply=0;
    console.log(this.apply);
  }
  applied(){
    this.apply=1;
    console.log(this.apply);
  }

  onSubmit(){
    let bodyData =
    {
      "user": this.currentUser,
      "title": this.title,
      "supervisor": this.currentUser,
      "job_type": this.jobtype,
      "department":this.department,
      "hrs": this.hours,
      "stipend": this.stipend,
    };

      this.http.put('http://localhost:3000/api/posts/form', bodyData)
        .subscribe(
          (response) => {
            console.log('Post created successfully:', response);
            alert("Opportunity has been posted")
            // Handle successful post creation response here
          },
          (error) => {
            console.error('Failed to create a post:', error);
            // Handle error response here
          }
        );
    this.form=0;
  }

  addPost(){
    this.form=1;
  }
}
