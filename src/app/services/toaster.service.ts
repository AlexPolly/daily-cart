import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToasterService) { }

  showSuccess(msg:string){
    this.toastr.showSuccess(msg)
  }
  showError(msg:string){
    this.toastr.showSuccess(msg)
  }
  showWarning(msg:string){
    this.toastr.showSuccess(msg)
  }
}

