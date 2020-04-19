import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-allday',
  templateUrl: './allday.component.html',
  styleUrls: ['./allday.component.scss']
})
export class AlldayComponent implements OnInit {
  activities:any = [];

  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router, private el:ElementRef) { }

  ngOnInit() {
    this.getActivities();

  }
  ngAfterViewInit(){
    this.attachActivities();
  }
  getActivities() {
    this.activities = [];
    this.service.getActivities().subscribe((data: {}) => {
      console.log(data);
      this.activities = data;
    });
  }

  attachActivities(){// show data in web page
    this.activities=[];
    this.service.getActivities().subscribe((data: {}) => {
        this.activities=data;
        for(let activity of this.activities){
          let startTime: string=activity.StartTime;
          if(startTime==null||startTime==undefined) continue;
          let hour=startTime.split(":")[0];
          // this.el.nativeElement.querySelector("#task"+hour).innerHTML=activity.title;
          // this.el.nativeElement.querySelector("#task"+hour).onclick= (()=>{
          //   this.router.navigate(['/activity-details/'+activity._id]);
          // });
          let timeDiv=this.el.nativeElement.querySelector("#task"+hour);
          let actDiv=document.createElement("div");
          actDiv.onclick=(()=>{
            this.router.navigate(['/activity-details/'+activity._id]);
          });
          actDiv.className="singleActivity";
          actDiv.innerHTML=activity.title;
          actDiv.style.backgroundColor="blue";
          timeDiv.appendChild(actDiv);
        }

    });
  }

  add() {
    this.router.navigate(['/activity-add']);
  }

}
