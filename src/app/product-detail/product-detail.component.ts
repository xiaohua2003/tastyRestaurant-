import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 product!:Product
 products:any
  constructor(private route: ActivatedRoute, private product_service:ProductService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    const idRoute=Number(id)
    //Find the product that correspond with the id provided in the route
    const getProduct=(product:Product)=>product.id===idRoute
    this.product_service.getProducts().subscribe(data=>{this.products=data;this.product= this.products.find(getProduct);console.log(this.product)})
  }
  addCart(value:Product){
    this.product_service.addCart(value)
    alert('product has been added into the cart!')
  }

}
