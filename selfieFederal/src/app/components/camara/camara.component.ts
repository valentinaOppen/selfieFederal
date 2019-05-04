import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {
  @Output() imageCapture = new EventEmitter < WebcamImage>();
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;
  
  captureImage = false;
  seconds;
  constructor() { }

  ngOnInit() {
  }
  public triggerSnapshot(): void {
    this.seconds = 3;
    this.trigger.next();
    this.seconds = null;
  }

  public handleImage(webcamImage: WebcamImage): void {
    // console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.imageCapture.emit(webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  sacarFoto() {
    this.captureImage = true;
    // this.captureImage= !true;
  }
  click(e) {
    console.log(e)
    this.captureImage = !true;

  }
}
