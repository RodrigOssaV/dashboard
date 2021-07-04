import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() newDriver: Driver = new Driver;

  oldRut = {
    rut: "",
    digito: "" 
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.newDriver);
    /* this.separateRut(); */
  }

  separateRut(){
    var array = this.newDriver.rut.split("-");
    this.oldRut.rut = array[0];
    this.oldRut.digito = array[1];
  }

  updateDriver(form:any){
    
  }

  toggleEditarModal(){
    let modal = document.querySelector('#updateDriverModal')!;
    modal.classList.toggle('is-active');
  }

}
