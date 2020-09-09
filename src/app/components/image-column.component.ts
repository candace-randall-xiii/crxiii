import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-column',
  template: `
    <div *ngFor="let image of imageList" style="margin:20px">
      <img class="img-rounded-sm" width="95%" alt="Gallery Image" [src]="getFullPath(image)">
    </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class ImageColumnComponent implements OnInit {
  @Input() imageList: Array<string> = [];
  public path = "../assets/gallery/";

  constructor() { }

  ngOnInit() {
  }
  
  getFullPath(imagePath: string) {
    return `${this.path}${imagePath}`;
  }

}
