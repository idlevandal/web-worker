import { Component } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Tutorial
  // https://medium.com/ngconf/supercharge-your-angular-application-using-web-workers-5e9e423a401d
  // updated tutorial to pass the primeNumberList as an argument

  title = 'web-worker';

  runWorker() {
    const worker = new Worker('./app.worker', { 
        type: 'module' 
    });
    
    // this can be placed after the call to worker.postMessage
    worker.onmessage = ({ data }) => {
        console.log('From Web Worker', data);
    };

    // This is necessary to fire the worker. If NO data to pass: worker.postMessage({});
    worker.postMessage(primeNumberList);
 }
 
 runThread() {
     const arePrimeList = primeNumberList.map((prime) => {
         return isPrimeNumber(prime);
     });
     console.log('From Javascript Thread', arePrimeList);
 }
}

// from angular docs - provdide a fallback
// if (typeof Worker !== 'undefined') {
//   doStuff();
// } else {
//   backupPlan();
// }