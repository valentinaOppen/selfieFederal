import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'show-file',
  templateUrl: './show-file.component.html',
  styleUrls: ['./show-file.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  // host: { ['class']: 'imgsFooterMap' }
})
export class ShowFileComponent implements OnInit {
  @Input() img = true;
  @Input() src;
  @Input() clase;
  constructor() { }

  ngOnInit() {
  }
  muestroVideo(src) {
    const videos = ['x-flv', 'mp4', 'x-mpegURL', 'MP2T', '3gpp', 'quicktime', 'x-msvideo', 'x-ms-wmv'];

    const a = src.split('.');
    const ext = a[a.length - 1];
    // console.log(ext);

    return videos.find(data => data === ext);
  }
}
