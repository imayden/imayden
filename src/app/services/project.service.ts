import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  media: {
    type: 'video' | 'image';
    src: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([

    {
      title: 'MIUI Showcase',
      subtitle: 'Xiaomi, 2021',
      description: 'The showcase site for MIUI 13 (a legacy version of Xiaomi HyperOS), an animated site built with React, deployed on Vercel.',
      link: 'https://miui13.home.miui.com',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/7SIDnTiQGmM?autoplay=1&loop=1&playlist=7SIDnTiQGmM&controls=0&mute=1&vq=hd1080'
      }
    },

    {
      title: 'Redmi Product Showcase',
      subtitle: 'Redmi, 2021',
      description: 'The smartphone product showcase site for Redmi Note 11 Series, an animated site built with React.',
      link: 'https://www.mi.com/global/product/redmi-note-11-pro-plus-5g/',
      media: {
        type: 'video',
        src: "https://www.youtube.com/embed/QJ0E-x93erM?autoplay=1&loop=1&mute=1&controls=0&playlist=QJ0E-x93erM&vq=hd1080"
      }
    },

    {
      title: 'Dark Theme · AOSP UI',
      subtitle: 'HyperOS, 2021',
      description: 'The design & developmeent of the Dark Theme UI for MIUI (legacy version of HyperOS, Xiaomi’s custom AOSP UI).',
      link: 'https://www.mi.com/global/hyperos',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/5MQR4ByVWRE?autoplay=1&loop=1&playlist=5MQR4ByVWRE&controls=0&mute=1'
      }
    },

    // {
    //   title: 'HyperOS · Dark Theme UI',
    //   subtitle: 'HyperOS, 2021',
    //   description: 'The product showcase site for Redmi 11 Series, an animated site built with React.',
    //   link: 'https://www.mi.com/global/product/redmi-note-11-pro-plus-5g/',
    //   media: {
    //     type: 'image',
    //     src: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12-lite/929ca834a3eff100dea8137ae43d6584.png'
    //   }
    // },

    {
      title: 'Distrubution Marketplace',
      subtitle: 'Kwai Shop, 2020',
      description: 'The cross-devices distrubution marketplace of Kwai Shop for creators & merchants to cooperate, built with Angular.',
      link: 'https://www.kwaixiaodian.com/cps',
      media: {
        type: 'image',
        src: 'https://raw.githubusercontent.com/imayden/imayden/main/public/assets/kwaishop-ecomm.png'
      }
    },
  ]);


  constructor() { }

  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  updateProjects(newProjects: Project[]): void {
    this.projectsSubject.next(newProjects);
  }
}
