import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  projects: Observable<any>;

  constructor(private http: HttpClient) {
      this.getProjects().subscribe(data => {
          this.projects = data;
      });
  }

  ngOnInit() {
  }

  getProjects(): Observable<any> {
      return this.http.get('assets/data/projects.json');
  }

}
