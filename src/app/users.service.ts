import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
  getUsers():Observable<any>
  {
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/users').pipe(
      catchError(err => {
        console.log('error while fetching posts:', err);
        return [];
      })
    );
  }
}
