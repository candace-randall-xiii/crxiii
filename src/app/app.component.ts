import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/styles.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
  })

export class AppComponent implements OnInit {
  public appRoute: string = "home";

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       if (element) {
        element.classList.add('sticky');
       }
     } else {
      let element = document.getElementById('navbar');
      if (element) {
        element.classList.remove('sticky'); 
      }
     }
  }

  onAppRouteChange(route: string) {
    this.appRoute = route;
  }
}