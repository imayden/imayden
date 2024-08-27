import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  experiences$!: Observable<Experience[]>;

  constructor(private experienceService: ExperienceService){
    this.experiences$ = this.experienceService.experiences$;
  }

  ngOnInit(): void {
      
  }

}
