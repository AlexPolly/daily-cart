import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product:any={}
  constructor(private route:ActivatedRoute , private api:ApiService){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id} = res
      // get details pf particular product
      this.getProductDetails(id)
    })
  }
  getProductDetails(id:any){
    this.api.getProductAPI(id).subscribe({
      next:(res:any)=>{
        this.product = res
        console.log(this.product);
      },
      error:(err:any)=>{
        console.log(err.error);
        
      }
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
