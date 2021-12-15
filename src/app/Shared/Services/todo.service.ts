import { HttpClient } from "@angular/common/http";
import { Todoitem } from "../Models/todoitem.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TodoService {
  apiClass = "TodoItems";
  constructor(public http: HttpClient) {}

  public List(): Observable<Todoitem[]> {
    return this.http.get<Todoitem[]>(environment.baseUrl + this.apiClass);
  }

  public updateTodoItem(todoitem: Todoitem): Observable<any> {
    return this.http.put(
      environment.baseUrl + this.apiClass + "/" + todoitem.id,
      todoitem
    );
  }

  createTodoItem(todoitem: Todoitem): Observable<any> {
    return this.http.post(environment.baseUrl + this.apiClass, todoitem);
  }
}
