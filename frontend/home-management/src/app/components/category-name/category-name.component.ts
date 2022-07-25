import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-name',
  templateUrl: './category-name.component.html',
  styleUrls: ['./category-name.component.css']
})
export class CategoryNameComponent implements OnInit {
  
  @Input() id : number = 0;
  @Input() name: string = '';

  constructor() { }
  ngOnInit(): void {
  }

}
