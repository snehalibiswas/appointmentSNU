import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { AuthService } from "src/app/services/auth.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isAuthenticated = false;
  public data: any[] = [];
  public deptname!: "";
  public new_route : string = ""

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.getdepartment();
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  

  getdepartment() {
    this.http.get("http://localhost:3000/api/departments/")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.data = resultData.data;
      });
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("useremail");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }

  itemClick(item: any) {
    console.log('Item clicked:', item);
    // console.log('Navigating to:', item.DeptID);
    // this.new_route = "/dept/" + item.DeptID;
    // this.router.navigate([this.new_route]).then(() => {
    //   console.log('Navigation complete');
    // });
  }
  

}
