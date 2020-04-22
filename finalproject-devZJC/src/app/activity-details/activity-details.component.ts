import {Component, Input, OnInit} from '@angular/core';
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
    console.log("Snap:"+this.route.snapshot.queryParams['id']);
    this.service.getActivity(this.route.snapshot.queryParams['id']).subscribe((data: {}) => {
      console.log(data);
      this.activity = data;
    });
  }


  deleteActivity(id) {
    if(confirm("Are you want to delete this activity?")){
    this.service.deleteActivity(id)
      .subscribe(res => {
          this.router.navigate(['UI'], {queryParams: {username: this.route.snapshot.queryParams['username']}});
        }, (err) => {
          console.log(err);
        }
      );}
  }

  backToHome(){
    this.router.navigate(['UI'], {queryParams: {username: this.route.snapshot.queryParams['username']}});
  }

  ToEdit(){
    this.router.navigate(['edit'], {queryParams: {id: this.route.snapshot.queryParams['id'],
    username: this.route.snapshot.queryParams['username']}});
  }
}
