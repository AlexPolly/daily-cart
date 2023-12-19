import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

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
