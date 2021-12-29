import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:boolean=false
  subtotal:any
  itemNum!:number
  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
   if(this.items.length!==0){
     this.cart=true
     console.log(this.cart)
   }
   this.subtotal=this.items.reduce((accum, item)=>accum +item.price, 0)
   this.itemNum=this.items.length
  }
  items=this.product_service.getItems()
  

}
