import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html'
})
export class OddComponent implements OnInit {
  @Input() num: number = 0;

  constructor() {

  }
  ngOnInit(): void {

  }
}
