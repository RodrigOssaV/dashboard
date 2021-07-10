import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  get_loads(){
    return this.http.get(URIs.api+'/get_loads').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }
}
