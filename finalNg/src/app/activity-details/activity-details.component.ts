import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  activity:any;

  constructor(public service:ActivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getActivity(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.activity = data;
    });
  }

  deleteActivity(id) {
    this.service.deleteActivity(id)
      .subscribe(res => {
          this.router.navigate(['activities']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
