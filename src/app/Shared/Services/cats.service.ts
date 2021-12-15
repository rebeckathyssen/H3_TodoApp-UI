import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Cat } from "../Models/cat.model";

@Injectable({ providedIn: "root" })
export class CatsService {
  constructor(public http: HttpClient) {}

  public getCat(): Observable<any> {
    return this.http.get("https://api.thecatapi.com/v1/images/b7b");
  }

  public postVote(vote: Cat): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        "X-Api-Key": "7dd7fe41-9aee-4c0a-b03b-a696275d7e25",
      }),
    };
    return this.http.post("https://api.thecatapi.com/v1/votes", vote, opts);
  }
}
