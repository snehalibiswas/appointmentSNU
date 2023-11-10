import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departmentName: string = "";
  professors: any[] = [
    {
      name: "Dr. Snehali Doe",
      title: "Professor",
      office: "Science 100",
      phone: "555-555-5555",
      email: "",
      imageUrl: "assets/my-image.png",
      cal: "assets/cal.png"
    },
    {
      name: "Dr. Jane Doe",
      title: "Associate Professor",
      office: "Science 101",
      phone: "555-555-5555",
      email: "",
      imageUrl: "assets/my-image.png",
      cal: "assets/cal.png"
    },
    {
      name: "Dr. James Smith",
      title: "Assistant Professor",
      office: "Science 102",
      phone: "555-555-5555",
      email: "" ,
      imageUrl: "assets/my-image.png",
      cal: "assets/cal.png"
    }
  ];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.departmentName = params['name'];
    });
  }

  onNgInit() : void {
    console.log(this.professors);
  }

}

