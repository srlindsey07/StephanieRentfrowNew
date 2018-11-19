import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent implements OnInit {
  designs: Observable<any>;

  constructor(private http: HttpClient) {
      this.getDesigns().subscribe(data => {
          this.designs = data;
      });
  }

  ngOnInit() {
  }

  getDesigns(): Observable<any> {
      return this.http.get('assets/data/designportfolio.json');
  }
}
