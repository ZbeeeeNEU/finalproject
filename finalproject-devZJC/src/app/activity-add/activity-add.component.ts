import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent implements OnInit {

  @Input() activityData = { title:'', description: '', StartTime: ' ', EndTime: '', location:'' , username: '', Date:''};

  @Input() date: string;
  @Input() closeWindow;
  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router, private el:ElementRef) { }

  public username:string;
  ngOnInit() {
    this.username=this.route.snapshot.queryParams['username'];
  }

  addActivity() {
    this.activityData.username=this.username;
    this.activityData.Date=this.date;
    if(this.activityData.EndTime!=''){
      if(this.activityData.EndTime<this.activityData.StartTime){
        alert("The end time should after the start time");
        return;
      }
    }

    this.service.addActivity(this.activityData).subscribe((result) => {

    }, (err) => {
      console.log(err);
    });
  }

  cancelCreate(){
   // this.closeWindow();
    this.el.nativeElement.querySelector('.window').style.zIndex='-100';
    this.el.nativeElement.querySelector('.window').style.opacity='100%';
  }

}
