import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    experience: Observable<any>;

    constructor(private http: HttpClient) {
        this.getExperience().subscribe(data => {
            this.experience = data;
        });
    }

    ngOnInit() {
    }

    getExperience(): Observable<any> {
        return this.http.get('assets/data/experience.json');
    }

}
