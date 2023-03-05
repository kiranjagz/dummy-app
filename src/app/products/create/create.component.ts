import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form: FormGroup = new FormGroup({});
  product: Product;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      // email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });
  }

  saveDetails(form: any) {
    this.productsService.saveProduct(form.value).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
