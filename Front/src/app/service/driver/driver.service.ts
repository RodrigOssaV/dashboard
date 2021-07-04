import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  add_driver(data:any){
    return this.http.post(URIs.api+'/add_driver', data).pipe(
      map((res:any) => {
        return res
      },
      (err:any) => {
        return err
      })
    )
  }

  get_drivers(){
    return this.http.get(URIs.api+'/get_drivers').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    )
  }
  
}
