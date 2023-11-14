import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  isResultLoaded = false;
  isUpdateFormActive = false;
  username: string = "";
  email: string = "";
  password: string = "";
  role = "";
  roomno: string="";
  research: string="";
  education: string="";
  workexperience: string="";
  public currentUser: any;
  user: any=[];

  constructor(private http: HttpClient) {
    this.currentUser = localStorage.getItem('useremail');
    this.getDetails();
    // console.log("Constructor");
  }

  ngOnInit(): void {
    // console.log("init");
  }

  getDetails() {
    this.http.get("http://localhost:3000/api/users/"+this.currentUser.toString())
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.user = resultData.data;

        this.username = this.user[0].name;
        this.email = this.user[0].email;
        this.password = this.user[0].password;
        this.role = this.user[0].role;
        this.roomno = this.user[0].roomno;
        this.research = this.user[0].research;
        this.workexperience = this.user[0].workexperience;
        this.education = this.user[0].education;
      });
  }

}

