import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.less']
})

export class RefreshButtonComponent implements OnInit, OnDestroy {
  public data: any;
  public subscription: Subscription;

  constructor(
    private apiService: ApiService
  ) {
    this.subscription = this.apiService.getTextToDiagnose().subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
  }

  refreshDataToDiagnose(): void {
    if(this.data){
      this.apiService.sendDataToDiagnose(this.data);
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

}
