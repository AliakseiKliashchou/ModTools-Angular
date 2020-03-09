import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared-components/services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.less']
})
export class ViewResultComponent implements OnInit {

  public data: any;
  public subscription: Subscription;
  public extendedFirstArray: any[] = [];
  public extendedSecondArray: {value: string, color: string, flagToShow?: boolean}[] = [];
  public mainData: any[] = [];

  constructor(
    private apiService: ApiService
  ) {
    this.subscription = this.apiService.getDataToDiagnose().subscribe(data => {
      if(!Object.is(this.data, data.extended)){
        this.data = data.extended;
        this.mainData = data;
        this.modifyFirstArray(this.data);
        this.modifySecondArray(this.data);
      }
    });
  }

  ngOnInit(): void {
  }

  modifyFirstArray(array: any[]): void {
    for(let i = 0; i < array.length; i++) {
      if(i > 0 && array[i].solution === array[i - 1].solution) {
        this.extendedFirstArray[i - 1] += ` ${array[i].original}`;
      } else this.extendedFirstArray.push(array[i].original);
    }
  };

  modifySecondArray(array: any[]): void {
    for(let i = 0; i < array.length; i++) {
      if(i > 0 && array[i].solution === array[i - 1].solution) {
        this.extendedSecondArray[i - 1].value = array[i].solution;
        this.extendedSecondArray[i - 1].color = 'rgb(163, 165, 132)';
        this.extendedSecondArray[i - 1].flagToShow = true;
      } else if(this.data[i].tokens[this.data[i].tokens.length - 1].text === '{{strong_bully_word}}'){
        this.extendedSecondArray.push({value: array[i].solution, color: 'rgb(190, 42, 42)'});
      } else this.extendedSecondArray.push({value: array[i].solution, color: 'rgb(42, 224, 5)'});
    }
  };
}
