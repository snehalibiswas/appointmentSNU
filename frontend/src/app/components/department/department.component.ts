import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private route: ActivatedRoute){}
  id: string = ""

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id += params.get('id');
    });
  }

}
