import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html'
})
export class EvenComponent implements OnInit {
  @Input() num: number = 0;

  constructor() {

  }
  ngOnInit(): void {

  }
}
