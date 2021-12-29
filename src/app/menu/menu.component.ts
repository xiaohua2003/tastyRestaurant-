import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 items:any
  constructor(private product_service:ProductService) { }

  ngOnInit(): void {
    this.product_service.getProducts().subscribe(data=>{this.items=data; console.log(this.items)})
  }
  get_items(){
    this.product_service.getProducts().subscribe(data=>{this.items=data; console.log(this.items)})
  }
}
