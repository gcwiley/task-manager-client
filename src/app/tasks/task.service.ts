import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasksUrl = 'api/tasks';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // inject "HttpClient" into the Task service
  constructor(private http: HttpClient) {}

  // GET: tasks from the server
  getTasks(): Observable


}
