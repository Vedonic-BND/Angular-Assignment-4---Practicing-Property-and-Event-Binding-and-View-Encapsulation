import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent implements OnInit {
  @Output('intFire') intervalFired = new EventEmitter<number>();
  interval: any;
  lastNum = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
