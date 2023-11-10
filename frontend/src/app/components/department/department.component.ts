import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  id: number = 0; // Initialize with 0 or another default value
  public deptname: any[] = [];
  public users: any[] = [];

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10); // Parse the parameter as an integer
        console.log(this.id);
      }
      this.getName();
      this.getUsers();
      console.log(this.users)
    });
  }

  ngOnInit(): void {
    
  }

  getName(){
    this.http.get("http://localhost:3000/api/departments/getName" + "/" + this.id)
    .subscribe((resultData: any) => {
      console.log(resultData.data);
      this.deptname = resultData.data;
    });
  }

  getUsers(){
    this.http.get("http://localhost:3000/api/users/getUsers" + "/" + this.id)
    .subscribe((resultData: any) => {
      console.log(resultData.data);
      this.users = resultData.data;
    });
  }

}
