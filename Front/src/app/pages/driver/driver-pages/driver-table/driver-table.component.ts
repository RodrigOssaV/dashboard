import { Component, OnInit } from '@angular/core';
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnInit {

  listDrivers:any;

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
    this.loadDriver();
  }

  loadDriver(){
    this.apiDriverService.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
        console.log(this.listDrivers);
      },
      err => {
        console.log(err);
      }
    )
  }

}
