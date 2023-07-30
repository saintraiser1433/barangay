import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Official } from '../interface/official';
import { catchError, retry, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OfficialService {
   http = inject(HttpClient);
   toastr = inject(ToastrService);
   baseUrl:string = 'http://localhost:3000/products';
   loadOfficial(){
    return this.http.get<Official[]>(`${this.baseUrl}`);
   }

   addOfficial(data){
    this.http.post<Official>(`${this.baseUrl}`,data)
    .pipe(retry(1),catchError(this.handleError))
    .subscribe(val =>{
      this.toastr.success("Successfully Add Official");
    });
   }

   updateOfficial(id,data){
    this.http.put<Official>(`${this.baseUrl}/${id}`,data)
    .pipe(retry(1),catchError(this.handleError))
    .subscribe(val => {
      this.toastr.success("Successfully Update Official");
    })
   }

   deleteOfficial(id){
    this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(retry(1),catchError(this.handleError))
    .subscribe((val) => {
      this.toastr.success("Successfully Delete Official");
      
    })
   }



   handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.toastr.error(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }



}
