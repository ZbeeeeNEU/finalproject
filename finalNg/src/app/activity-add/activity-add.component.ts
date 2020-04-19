import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent implements OnInit {

  @Input() activityData = { title:'', description: '', StartTime: ' ', EndTime: '', location:'' };

  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addActivity() {
    // if(this.activityData.endTime!=null){
    //   if(this.activityData.endTime<this.activityData.startTime){
    //     alert("The end time should after the start time");
    //     return;
    //   }
    // }

    this.service.addActivity(this.activityData).subscribe((result) => {
      this.router.navigate(['/activity-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
