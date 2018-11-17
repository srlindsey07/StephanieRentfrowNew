import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    skills: Observable<any>;

    constructor(private http: HttpClient) {
        this.getSkills().subscribe(data => {
            this.skills = data;
        });
    }

    ngOnInit() {
    }

    getSkills(): Observable<any> {
        return this.http.get('assets/data/skills.json');
    }

}
