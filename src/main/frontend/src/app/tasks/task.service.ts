
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
// https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
// https://stackoverflow.com/questions/50307628/angular-injectable-decorator-expected-0-arguments-but-got-1
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get('/api/tasks').pipe(map((response: any) => response.json()));
  }
}
