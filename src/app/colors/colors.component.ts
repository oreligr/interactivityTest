import { Component, OnInit } from '@angular/core';
import { ColorService } from './../services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass']
})
export class ColorsComponent implements OnInit {
  colors;
  constructor(private colorService: ColorService) {

    this.getColors();
  }

  ngOnInit() {
  }

  getColors(){
    this.colorService.getColors().subscribe((data) => {
      this.colors = data.colorsArray;
      console.log(this.colors)
    });
  }

  sortAsc(){
    this.colors.sort((a,b) => {
      if(a.colorName > b.colorName){
        return 1;
      }
      if (a.colorName < b.colorName) {
        return -1;
      }
      return 0;
    });
  }
  sortDesc(){
    this.colors.sort((a,b) => {
      if(a.colorName < b.colorName){
        return 1;
      }
      if (a.colorName > b.colorName) {
        return -1;
      }
      return 0;
    });
  }

}
