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

  id:string;

  constructor(public service: ActivityService, private route: ActivatedRoute, private router: Router) {
    this.id=this.route.snapshot.queryParams['id'];
  }

  ngOnInit() {
    this.service.getActivity(this.id).subscribe((data: {}) => {
      console.log(data);
      this.activityData = data;
    });
  }

  updateActivity(){
    if(this.activityData.EndTime!=""){
      if(this.activityData.EndTime<this.activityData.StartTime){
        alert("The end time should after the start time");
        return;
      }
    }

    this.service.updateActivity(this.id, this.activityData).subscribe((result) => {
      this.router.navigate(['UI'], {queryParams: {username: this.route.snapshot.queryParams['username']}});
    }, (err) => {
      console.log(err);
    });
  }

}
