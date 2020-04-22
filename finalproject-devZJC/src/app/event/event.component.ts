import {Component, OnInit, Input, Output} from '@angular/core';
import {Event} from './../models/event';
import {ActivityService} from "../activity.service";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  events: Event[];
  constructor(private eventService: EventService, private activityService: ActivityService, private route:ActivatedRoute) { }

  getEventsFromServices(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }
  username: string;
  ngOnInit(): void {
    this.username=this.route.snapshot.queryParams['username'];
    this.getEventsFromServices();
  }

  joinEvent(e: Event){
    e.username=this.username;
    this.activityService.addActivity(e).subscribe();
  }
}
