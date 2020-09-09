import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-page',
  template: `
  
  <div class="page-container">
    <div class="page-content mt-2">
    <page-header headerText="Gallery" [isMobile]="isMobile"></page-header>
      <div class="flex-inner"></div>
       
      <div class="flex-inner fade-in">
        <div class="text-center" *ngIf="!imageList.length" >
          <img class="coming-soon" [class.isMobile]="isMobile" src="../assets/3622.jpg">
        </div>
        <image-column [imageList]="column1"></image-column>
        <image-column [imageList]="column2"></image-column>
        <image-column [imageList]="column3"></image-column>
      </div>    
    </div>
  </div>
  <div class="credit-footer text-center w-100" *ngIf="!imageList.length">
    <a href="https://www.freepik.com/vectors/background">Background vector created by macrovector - www.freepik.com</a>
  </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class GalleryComponent implements OnInit {
  public imageList = []; //['sample1.jpg','sample2.jpg','sample3.jpg','sample4.jpg', 'sample5.jpg', 'sample6.jpg', 'sample7.jpg'];
  public column1 = [];
  public column2 = [];
  public column3 = [];
  public isMobile: boolean;
  

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
    for (let image of this.imageList) {
      const index = this.imageList.indexOf(image);
      if (this.isDivisibleBy(index + 3, 3)) {
        this.column1.push(image);
      } else if (this.isDivisibleBy(index + 2, 3)) {
        this.column2.push(image);
      } else if (this.isDivisibleBy(index + 1, 3)){
        this.column3.push(image);
      }
    }

  }

  isDivisibleBy(value: number, divisibleBy: number): boolean {
    if (isNaN(value) || isNaN(divisibleBy)) {
      return false;
    }

    return value % divisibleBy === 0;
  }



}
