import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.sass']
})
export class ColorComponent implements OnInit {

  @Input() color;

  constructor() {}

  ngOnInit() {
  }

}
