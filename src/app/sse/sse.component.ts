import { Component, OnInit, NgZone } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Component({
selector:'app-sse',
templateUrl:'./sse.component.html',
styleUrls: ['./sse.component.css']
})
export class SseComponent implements OnInit {
public sse : any;
public record:Observable<any>;
public value:number;
constructor(private zone:NgZone) {
var EventSource=window['EventSource'];
this.sse=new EventSource('http://localhost:3002/api/data');
}

ngOnInit() {
  this.value=0;
this.record=this.getMessages();

}

getMessages():Observable<any> {
return new Observable<any>(observer=> {

this.sse.onmessage=evt=> {
this.zone.run(() =>{
  this.value=Math.round(100.0 * evt.data / 100);
  observer.next(evt.data);

});
};
return () =>this.sse.close();
});

}
}
