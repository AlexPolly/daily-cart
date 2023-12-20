import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts:any = []
  constructor  (private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllProductsAPI().subscribe((res:any)=>{
      this.allProducts = res
    })
  }

  addtoWishlist(product:any){
    if(sessionStorage.getItem("token")){
      alert("Proceed to add item to wishlst")
    }else{
      alert("Operation Denied... please login!!!")
    }
  }

  addtocart(product:any){
    if(sessionStorage.getItem("token")){
      alert("Proceed to add item to cart")
    }else{
      alert("Operation Denied... please login!!!")
    }
  }

}
