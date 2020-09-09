import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me-page',
  template: `
  <div class="page-container about-page mt-2">
    <div class="page-content">
    <page-header headerText="About Me" [isMobile]="isMobile"></page-header>
      <div class="container m-5 about text-center w-100" *ngIf="!isMobile; else mobile">
        <div class="row text-center w-100">
          <div class="col-5">
            <img class="ml-5 w-75" src="../../assets/candace-about-me.png">
          </div>
          <div class="col-1">
          </div>
          <div class="col-6 my-2">
            <p>
              {{paragraph1}}  
            </p>
            <p>
              {{paragraph2}}
            </p>
            <p>
              {{paragraph3}}
            </p>
            <ul>
              <li class="my-3">
                Well Respected Personal Stylist/Virtual Stylist
              </li>
              <li class="my-3">
                Worked at Pittsburgh Fashion Week 2019
              </li>
              <li class="my-3">
                Worked the Luna Gala fashion show in Pittsburgh, February 2020
              </li>
              <li class="my-3">
                Soon to be styling at New York Fashion Week, Date to be determined!!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ng-template #mobile>
        <div class="container about isMobile">
          <div class="row mx-4">
            <div class="text-center my-3">
              <p>
                {{paragraph1}}  
              </p>
              <p>
                {{paragraph2}}
              </p>
              <p>
                {{paragraph3}}
              </p>
              <ul>
                <li class="my-3 isMobile">
                  Well Respected Personal Stylist/Virtual Stylist
                </li>
                <li class="my-3 isMobile">
                  Worked at Pittsburgh Fashion Week 2019
                </li>
                <li class="my-3 isMobile">
                  Worked the Luna Gala fashion show in Pittsburgh, February 2020
                </li>
                <li class="my-3 isMobile">
                  Soon to be styling at New York Fashion Week, Date to be determined!!
                </li>
              </ul>
            </div>
          </div>
          <div class="row w-100 text-center">
            <div class="m-2">
              <img class="ml-5 w-75" style="border-radius: 3px" src="../../assets/candace-about-me.png">
            </div>
          </div>
        </div>
      
      </ng-template>
    </div>
  </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class AboutMeComponent implements OnInit {

  isMobile: boolean;
  constructor() { }

  public paragraph1 = "I am Candace Randall, and I am so happy you are here.  I pride myself on the ability to help people discover their truest style, no matter how hidden it might be.  I love working with all kinds of people - all ages, body types, genders, and experience levels.";
  public paragraph2 = "We all have the ability to exude confidence, style, and grace.  You have something within you, that wants to come out - an inner goddess, queen, king, rock star, or fashionista.  I'm not going to give that to you - I'm going to help you find it.  Whether you know it or not, it's already there, begging to come out.";
  public paragraph3 = "I gauge my own success based on the happiness and confidence of my clientele.  I consider style to be much more than clothing.  It's the total package - and if it's done right, you will feel beautiful and comfortable in your own skin, and have a new self-assurance that have you standing up straighter, smiling brighter, and feeling like you've never felt before!";

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
  }

}
