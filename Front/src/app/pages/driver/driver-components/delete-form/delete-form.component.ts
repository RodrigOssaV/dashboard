import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {

  @Input() deleteDriver: Driver = new Driver;

  deleteRut!: string;

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
    
  }

  delete_Driver(){
    this.deleteRut = this.deleteDriver.rut;
    this.apiDriverService.delete_driver(this.deleteRut).subscribe(
      res => {
        this.launchDeleteModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  launchDeleteModal(){
    const modal = document.querySelector('#deleteDriverModal')!;
    modal.classList.toggle('is-active');
  }

}
