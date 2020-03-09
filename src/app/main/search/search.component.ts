import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared-components/services/api.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  inputHandler(event: any): void {
    const data: string = event.target.value;
    this.apiService.sendDataToDiagnose(data);
  };

}
