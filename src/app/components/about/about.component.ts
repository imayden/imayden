import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  currentTime: string = '';

  constructor(private experienceService: ExperienceService,  @Inject(PLATFORM_ID) private platformId: Object){
    this.experiences$ = this.experienceService.experiences$;
  }

  ngOnInit(): void {
      this.myTimeZone();
      if (isPlatformBrowser(this.platformId)) {
        setInterval(() => this.myTimeZone(), 1000);

      }

  }

  myTimeZone():void{
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    this.currentTime = new Intl.DateTimeFormat('en-US', options).format(date);
  }

}
