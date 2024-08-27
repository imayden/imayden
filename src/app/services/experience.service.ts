import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Experience {
  employer: string;
  title: string;
  duration: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiencesSubject: BehaviorSubject<Experience[]> = new BehaviorSubject<Experience[]>([
    {
      employer: 'string',
      title: 'string',
      duration: 'string',
      description: 'string'
    },
    {
      employer: 'string',
      title: 'string',
      duration: 'string',
      description: 'string'
    },
    {
      employer: 'string',
      title: 'string',
      duration: 'string',
      description: 'string'
    },
  ]);

  constructor() { }

  public experiences$: Observable<Experience[]>=this.experiencesSubject.asObservable();

  updateExperiences(newExperiences: Experience[]): void{
    this.experiencesSubject.next(newExperiences);
  }
}
