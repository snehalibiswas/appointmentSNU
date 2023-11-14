import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id: number = 0; // Initialize with 0 or another default value
  public user: any[] = [];
  public data: any[] = [];
  public currentUser: any;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.currentUser = localStorage.getItem('useremail');
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10); // Parse the parameter as an integer
        console.log(this.id);
      }
      this.getUserProfile();
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.addEvent(form.value.subject, form.value.startTime, form.value.endTime);
      form.resetForm();
    }
    console.log(this.data);
  }

  addEvent(subject: string, startTime: string, endTime: string) {
    const event: Object = {
      title: subject,
      starttime: new Date(startTime),
      endtime: new Date(endTime),
      scheduled_by: this.currentUser,
      scheduled_with: this.user[0].email

    };
    this.http.post("http://localhost:3000/api/meetings/add", event).subscribe((resultData: any) => {   //this.http -> server : sevrer.post -> server.js fill
      console.log(resultData);
      // this.getAllStudent();
    });
    alert("Meeting Registered Successfully")
    // this.data.push(event);
  }

  getUserProfile() {
    this.http.get("http://localhost:3000/api/users/getUserProfile" + "/" + this.id)
      .subscribe((resultData: any) => {
        console.log(resultData.data);
        this.user = resultData.data;
      });
  }
}
