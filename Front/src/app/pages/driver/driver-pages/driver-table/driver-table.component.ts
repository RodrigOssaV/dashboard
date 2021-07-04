import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnInit {

  listDrivers:any;
  conductorEdit: Driver = new Driver();

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
    this.apiDriverService.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadDriver();
      }
    })
    this.loadDriver();
  }

  btnEditarConductor(driver: Driver){
    this.conductorEdit = driver;
    /* console.log(this.conductorEdit); */
    const editModal = document.querySelector('#updateDriverModal')!;
    editModal.classList.toggle('is-active');
  }

  loadDriver(){
    this.apiDriverService.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
