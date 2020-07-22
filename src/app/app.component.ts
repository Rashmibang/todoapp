import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
]
})
export class AppComponent {
 date=new Date();
 d=this.date.getDate();
 m=this.date.getMonth();
 y=this.date.getFullYear();
 datevalue=this.d +" "+ this.m +" "+this.y;
 days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 day=this.days[this.date.getDay()];

 items=["meditate"];
 foobar ;
 value=[];
itemsdolater=[]
itemscompleted=[]

 additems(){
    this.items.push(this.foobar);
}
trash(param){
    // this.itemTodelete=this.items.indexOf(this.foobar);
  this.items.splice(param,1);
  }

pause(j){
  this.value[j] = this.items.slice(j, j+1);
  this.itemsdolater.push(this.value[j]);
    this.items.splice(j,1);
  }
done(arg){
  this.value[arg] = this.items.slice(arg , arg+1);
  this.itemscompleted.push(this.value[arg]);
    this.items.splice(arg, 1);
}
  reset(){
    this.items=null;
    this.itemscompleted=null;
    this.itemsdolater=null;
  }

}





 
