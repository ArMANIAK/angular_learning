import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((param: Params) => {
      let id = +param['id'];
      this.product = this.productDataService.getData().filter(product => product.id === id)[0];
    })
  }

}
