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
      employer: 'Bitus Labs',
      title: 'Product Manager',
      duration: 'Sep, 2024 - Present',
      description: "Manage product roadmaps, design and develop software and games with a focus on iGaming and video games."
    },
    {
      employer: 'Self-employed',
      title: 'Web Designer & Developer',
      duration: 'Aug, 2022 - Present',
      description: "Design and develop aesthetic websites for individual professionals and business owners, specializing in Angular, React, and WordPress."
    },
    {
      employer: 'Xiaomi',
      title: 'Software Product Manager, MIUI & HyperOS',
      duration: 'Sep, 2021 - Jul, 2022',
      description: "Built websites and system UI features for MIUI / HyperOS, Xiaomi's custom AOSP UI for its smartphones & tablets. Led the design and development of MIUI's showcase site and owned the product HyperOS Dark Theme UI."
    },
    {
      employer: 'Baidu',
      title: 'Product Manager, DU Shop Ecomm',
      duration: 'May, 2021 - Aug, 2021',
      description: "Owned a product that was part of DU Shop's e-comm suites, and led the building of the app features to enhance the buyers' shopping and payment experience in the live room."
    },
    {
      employer: 'Kwai',
      title: 'Software Product Manager, Kwai Shop',
      duration: 'May, 2020 - Apr, 2021',
      description: 'Crafted features for a distribution platform that was part of Kwai Shop, and led design and development on the Kwai Shop Creator Marketplace for enabling efficient cooperation between merchants & creators on Kwai.'
    },
  ]);

  constructor() { }

  public experiences$: Observable<Experience[]>=this.experiencesSubject.asObservable();

  updateExperiences(newExperiences: Experience[]): void{
    this.experiencesSubject.next(newExperiences);
  }
}
