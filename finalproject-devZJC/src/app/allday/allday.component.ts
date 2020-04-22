import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-allday',
  templateUrl: './allday.component.html',
  styleUrls: ['./allday.component.scss']
})
export class AlldayComponent implements OnInit {

  activities:any = [];
  public username='';
  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router, private el:ElementRef) { }

  ngOnInit() {
    this.username=this.route.snapshot.queryParams['username'];
  }

  ngAfterViewInit(){
    this.attachActivities();
  }


  attachActivities(){// show data in web page
    this.activities=[];
    this.service.getActivities().subscribe((data: {}) => {
        this.activities=data;
        for(let activity of this.activities){

          if(activity.username!=this.username) continue;
          let startTime: string=activity.StartTime;
          if(startTime==null||startTime==undefined) continue;
          let hour=startTime.split(":")[0];

          let timeDiv=this.el.nativeElement.querySelector("#task"+hour);
          let actDiv=document.createElement("div");
          actDiv.onclick=(()=>{

          });
          //setting the style of the activity
          actDiv.className="singleActivity";
          actDiv.innerHTML=activity.title;
          actDiv.style.backgroundColor="darkslategray";
          actDiv.style.color="white";
          actDiv.style.fontFamily="Century Gothic";
          actDiv.style.margin="10px";
          actDiv.style.padding="5px";
          actDiv.style.borderRadius="10px";
          timeDiv.appendChild(actDiv);
        }

    });
  }

  add() {
    let addComponent=this.el.nativeElement.querySelector('app-activity-add');
    addComponent.style.display='inline';
    //this.router.navigate(['/activity-add']);
  }

}
