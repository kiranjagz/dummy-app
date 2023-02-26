import { Component } from '@angular/core';
import { Product, ProductsService, Result } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  borderColor: string = "pink";
  isLoading = true;
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'price'];

  constructor(private productsService: ProductsService) {

    this.productsService.getData()
    .subscribe(
      {
        next: (data: any) : void => {
          this.products = data.products;
          console.log(this.products);
          this.isLoading = false;
        },

        error: (err: any) : void => {
          this.isLoading = true;
          console.log(err);
        }
      }
    );
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
