import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { Analytics } from '../models/analytics';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [AnalyticsService]
})
export class AnalyticsComponent implements OnInit {
  analytics: Analytics[];
  analytic: Analytics;
  constructor(private AnalyticsService: AnalyticsService) { }

  ngOnInit() {
    this.AnalyticsService.getAnalytics()
    .subscribe(analytics => this.analytics = analytics);
  }

}
