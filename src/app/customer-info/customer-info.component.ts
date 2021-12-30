import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 customerForm=this.fb.group({
   name:[''],
   address:this.fb.group({
     street:[''],
     city:[''],
     state:[''],
     zip:['']
   })
 })
 onSubmit(){
   console.log(this.customerForm.value)
   alert(this.customerForm.value.address.city)
 }
 updateProfile(){
   this.customerForm.patchValue({
     name:'yaolin',
     address:{
       street:'66street'
     }
   })
 }

}
