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
  awards: string="";
  public currentUser: any;
  user: any=[];
  // hashpassword=await bcrypt.hash(this.password, 12);

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
        this.roomno = this.user[0].room_no;
        this.research = this.user[0].research;
        this.workexperience = this.user[0].work;
        this.education = this.user[0].education;
        this.awards=this.user[0].awards;
      });
  }

  Onsubmit(){
    this.UpdateRecords();
    this.getDetails();
  }



  UpdateRecords() {
    let bodyData =
    {
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "role": this.role,
      "roomno":this.roomno,
      "research": this.research,
      "workexperience": this.workexperience,
      "education": this.education,
      "awards": this.awards
    };

    this.http.put("http://localhost:3000/api/users/update" + "/" + this.currentUser, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
    });
    console.log("User updated");
    alert("User Details Updated")
    this.getDetails();
  }

}

