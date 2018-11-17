import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
    awards: Observable<any>;

    constructor(private http: HttpClient) {
        this.getAwards().subscribe(data => {
            this.awards = data;
        });
    }

    ngOnInit() {
    }

    getAwards(): Observable<any> {
        return this.http.get('assets/data/awards.json');
    }
}
