import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    education: Observable<any>;

    constructor(private http: HttpClient) {
        this.getEducation().subscribe(data => {
            this.education = data;
        });
    }

    ngOnInit() {
    }

    getEducation(): Observable<any> {
        return this.http.get('assets/data/education.json');
    }
}
