import { Component, OnInit } from '@angular/core';
import { Driver } from "../../../../class/driver";
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newDriver: Driver = new Driver();

  newRut = {
    rut: '',
    digito: ''
  }

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
  }

  addDriver(form:any){
    this.newDriver.add_rut = this.newRut.rut+"-"+this.newRut.digito;

    this.apiDriverService.add_driver(this.newDriver).subscribe(
      res => {
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    )
    
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }

}
