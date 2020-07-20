import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sub-app-angular';
  msgToReact ='';
  msgFromReact = ''
  constructor(private window: Window, private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.window.addEventListener("rcvMsg", this.rcvMessage.bind(this));
  }

  sendMsg () {
    const event = new Event('sendMsg');
    event['msg'] = this.msgToReact
    window.dispatchEvent(event);
  }
  rcvMessage (event){
    this.msgFromReact = event.msg;
    this.cd.detectChanges();
  }
  ngOnDestroy() {
    this.window.removeEventListener;
  }
}
