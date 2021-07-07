import { Component, OnInit } from '@angular/core';
import { Supplier } from "../../../../class/supplier";
import { SupplierService } from "../../../../service/supplier/supplier.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newSupplier: Supplier = new Supplier();

  constructor(private apiSupplier: SupplierService) { }

  ngOnInit(): void {
  }

  addSupplier(form:any){
    this.apiSupplier.add_supplier(this.newSupplier).subscribe(
      res => {
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }
  
}
