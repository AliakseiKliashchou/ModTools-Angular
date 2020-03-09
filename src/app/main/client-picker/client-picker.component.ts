import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from './../../shared-components/services/api.service';

interface Client {
  id:number;
  name:string;
}

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.less']
})
export class ClientPickerComponent implements OnInit {

  @Input() selectedClient = 0;
  @Output() clientChanged = new EventEmitter<number>();

  // TODO: This needs to be externally sourced
  clients: Client[] = [
    { id: 0,  name: 'Community Sift' },
    { id: 60, name: 'Live' },
    { id: 61, name: 'Sandbox' }
  ]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() : void { }

  onClientChanged (selectedClient: string): void {
    this.clientChanged.emit(this.selectedClient);
    const newId = Number(selectedClient.split(':')[1]);
    this.apiService.changeClientId(newId);
  }

}
