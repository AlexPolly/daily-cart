import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster: ToasterService) { }

  showSuccess(msg:string){
    this.toaster.showSuccess(msg)
  }
  showError(msg:string){
    this.toaster.showSuccess(msg)
  }
  showWarning(msg:string){
    this.toaster.showSuccess(msg)
  }
}
