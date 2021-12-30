import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
itemNum!:number
  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
    this.itemNum=this.items.length
  }
  items=this.product_service.getItems()
}
