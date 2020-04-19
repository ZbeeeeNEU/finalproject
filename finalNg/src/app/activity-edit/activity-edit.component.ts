import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  @Input() activityData: any = { title:'', description: '', StartTime: ' ', EndTime: '', location:'' };


  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getActivity(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.activityData = data;
    });
  }

  updateActivity(){
    if(this.activityData.endTime!=null){
      if(this.activityData.endTime<this.activityData.startTime){
        alert("The end time should after the start time");
        return;
      }
    }

    this.service.updateActivity(this.route.snapshot.params['id'], this.activityData).subscribe((result) => {
      this.router.navigate(['/activity-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
