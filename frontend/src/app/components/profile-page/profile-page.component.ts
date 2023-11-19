// // import { Component, Input } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { ActivatedRoute,ParamMap } from '@angular/router';
// // // import { AuthService } from 'src/app/services/auth.service';
// // import { Router, NavigationExtras } from '@angular/router';

// // interface users{
// //   name: string,
// //   department: string,
// //   role: string,
// //   email: string,
// //   room_no: string
// // }

// // @Component({
// //   selector: 'app-profile-page',
// //   templateUrl: './profile-page.component.html',
// //   styleUrls: ['./profile-page.component.css']
// // })
// // export class ProfilePageComponent {
// //   users: users = 
// //     {name: "Sonia Khetrapaul", department: "CSE", role: "Assistant Prof", email: "xyz@gmail.com", room_no: "C219"}
// // }

// // profile.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ProfileService } from './profile-page.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile-page.component.html',
//   styleUrls: ['./profile-page.component.css'],
// })
// export class ProfileComponent implements OnInit {
//   profiles: any[] = [];

//   constructor(private profileService: ProfileService) {}

//   ngOnInit(): void {
//     this.profileService.getProfiles().subscribe(
//       (data) => {
//         this.profiles = data;
//       },
//       (error) => {
//         console.error('Error fetching profiles:', error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile-page.service';
import { DropdownProfileComponent } from '../dropdown-profile/dropdown-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  profile: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const username = params['name'];
      this.profileService.getProfileByUsername(username).subscribe(
        (data: any) => {
          this.profile = data;
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    });
  }
}
