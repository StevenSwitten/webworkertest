import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  worker: Worker;

  startWork() {
    this.worker = new Worker('./app.worker', { type: 'module' });
    this.worker.postMessage({});
    fromEvent(this.worker, 'message').subscribe(() => {
      console.log('worker done');
    });
  }

  stopWork() {
    console.log('terminate the worker now');
    this.worker.terminate();
  }
}
