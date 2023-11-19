// import { Component } from '@angular/core';

// interface users{
//   research: string,
//   education: string,
//   work: string,
//   awards: string,
// }

// @Component({
//   selector: 'app-dropdown-profile',
//   templateUrl: './dropdown-profile.component.html',
//   styleUrls: ['./dropdown-profile.component.css']
// })


// export class DropdownProfileComponent {
//   users: users = 
//   {research: "Sonia Khetrapaul", education: "CSE", work: "Assistant Prof", awards: "null"}
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'C:/Users/kriti/OneDrive/Desktop/angular/dbms-project/src/app/profile-page/profile-page.service';

console.log("dropdown");

@Component({
  selector: 'app-dropdown-profile',
  templateUrl: './dropdown-profile.component.html',
  styleUrls: ['./dropdown-profile.component.css'],
})
export class DropdownProfileComponent implements OnInit {
  profileDetails: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const username = params['name'];
      this.profileService.getProfileByUsername(username).subscribe(
        (data: any) => {
          this.profileDetails = data;
        },
        (error: any) => {
          console.error('Error fetching profile details:', error);
        }
      );
    });
  }
}
