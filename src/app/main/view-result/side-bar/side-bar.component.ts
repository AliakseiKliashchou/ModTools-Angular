import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../shared-components/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {

  public subscription: Subscription;
  public data: any;

  constructor( private apiService: ApiService ) {
    this.subscription = this.apiService.getDataToDiagnose().subscribe(data => {
        this.data = data;
    });
  }

  ngOnInit(): void {
  }

}
