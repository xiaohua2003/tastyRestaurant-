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
  cartEmpty:boolean=true
  subtotal:any
  itemNum!:number
  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
   if(this.items.length!==0){
     this.cart=true
     this.cartEmpty=false
     console.log(this.cart)
   }
   this.subtotal=this.items.reduce((accum, item)=>accum +item.price, 0)
   this.itemNum=this.items.length
  }
  items=this.product_service.getItems()
  remove(value:Product){
   this.items= this.product_service.removeOne(value)
   this.subtotal=this.items.reduce((accum, item)=>accum +item.price, 0)
   this.itemNum=this.items.length
  }
}
