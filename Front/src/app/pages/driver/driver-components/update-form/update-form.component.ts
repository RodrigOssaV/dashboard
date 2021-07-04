import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() newDriver: Driver = new Driver;

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
  }

  updateDriver(form:any){
    this.apiDriverService.update_driver(this.newDriver.rut, form.value).subscribe(
      res => {
        this.toggleEditarModal();
        /* console.log(res); */
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleEditarModal(){
    let modal = document.querySelector('#updateDriverModal')!;
    modal.classList.toggle('is-active');
  }

}
