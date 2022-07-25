import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() quantity: number = 1;
  @Input() categoryId: number = 0;
  @Output() childEventRemoveItem = new EventEmitter<number>();
  constructor(public stateService: StateService, public productsService : ProductsService) {}

  ngOnInit(): void {
  }

  public onQuantityChange(event: any): void {
    const operator = event.innerHTML;
    if (this.quantity == 1 && operator == '-') return;
    operator == '+' ? this.quantity++ : this.quantity--;
  }

  public onDeleteItem() {
    this.childEventRemoveItem.emit(this.id);
  }
}
