import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from './../../shared-components/services/api.service';

@Component({
  selector: 'app-content-type-picker',
  templateUrl: './content-type-picker.component.html',
  styleUrls: ['./content-type-picker.component.less']
})
export class ContentTypePickerComponent implements OnInit {

  public contentTypes: string[] = [ 'SHORT_TEXT', 'LONG_TEXT', 'USERNAME' ];

  @Input() selectedContentType = this.contentTypes[0];
  @Output() contentTypeChanged = new EventEmitter<string>();


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  onContentTypeChanged(selectedContetntType: string): void {
    this.contentTypeChanged.emit(this.selectedContentType);
    this.apiService.changeContentType(selectedContetntType);
  }

}
