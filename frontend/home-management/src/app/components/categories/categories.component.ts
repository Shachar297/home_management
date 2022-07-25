import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.apiService.getAllCategories();
  }
}
