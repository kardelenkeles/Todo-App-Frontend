import {Injectable} from '@angular/core';
import {Bean} from "./welcome-data.service";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
}
