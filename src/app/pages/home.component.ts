import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <div class="page-container">
    <div class="page-content">
      <br>
      <div class="home-inner" style="margin:15px 20%">
        <div class="row">
          <div class="col-2" style="float:left; margin-right:48px" *ngIf="!isMobile">
            <img width="100%" alt="Flowers" src="../assets/flower-design-left.png">
          </div>
          <div class="col header-cursive" [class.isMobile]="isMobile" style="float:left">
            <div class="text-area-xl mt-3">
              Welcome to CR thirteen <br>
              Whether you are looking for a fashion transformation, personal shopping, or just a few tips, the 
              unique personal styling of CR thirteen is ready to take you on your journey.
            </div>
          </div>
          <div class="col-2" style="float:left; margin-left:48px" *ngIf="!isMobile">
            <img width="100%" alt="Flowers" src="../assets/flower-design-right.png">
          </div>
        </div>
      </div>
      <div class="home-inner" style="margin:50px 10% 10px 10%">
        <!--<div style="width:30%; float:left">
          <img class="img-rounded" width="100%" alt="Fashion" src="../assets/samples/sample1.jpg">
          <img class="img-rounded" width="100%" alt="Fashion" style="margin:50px 70px 0px 50px" src="../assets/samples/sample4.jpg">
        </div>-->
        <div class="text-center w-100">
          <div class="shaded-text-box" [class.isMobile]="isMobile" >{{homeText1}} </div>
          <div style="font-size:32px;font-weight:500" class="shaded-text-box mt-4" [class.isMobile]="isMobile">{{homeText2}} </div>
        </div>
        <!--<div  style="width:30%; float:left;">
          <img class="img-rounded" style="margin:-10px 20px 10px -25px" width="100%" alt="Fashion" src="../assets/samples/sample5.jpg">
          <img class="img-rounded" style="margin:30px 20px 0px -15px" width="100%" alt="Fashion" src="../assets/samples/sample3.jpg">
        </div>-->
      </div>
     </div>
  </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class HomeComponent implements OnInit {
  @Output() routeChange: EventEmitter<string> = new EventEmitter();
  public homeText1 = "Every person has a perfectly unique style - just as every person has a unique personality, body, and spirit. Sometimes you need a hand to realize your own style."
  public homeText2 = "CR thirteen's mission is not to give you a style.  It's to help you find your own."
  public isMobile: boolean;

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
  }

  onRouteChange(newRoute: string) {
    this.routeChange.emit(newRoute);
  }

}
