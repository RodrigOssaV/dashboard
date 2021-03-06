import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this.authService.getToken();

    let request = req;

    if(token){
      request = req.clone({
        setHeaders: {
          authorization: `${token}`
        }
      });
    }
    return next.handle(request);
  }
}
