import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-singlelist',
  template: `
  <div class="container-wrapper">
    <div class="container-row">
      <h2 class="job-title">Result</h2>
      <div class="link-list" id="jobs">
        <a *ngFor="let job of jobs" href="#">{{ job }}</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
  jobs: string[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      jobs => (this.jobs = jobs,
                console.log(jobs)),
      error => console.log('Error fetching jobs:', error)
    );
  }
}
