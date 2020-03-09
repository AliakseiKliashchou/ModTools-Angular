/*This service was created to working with API. There is all functionality we need*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared-components/user.service';

interface DataToDiagnose {
  clientId: number;
  language: string;
  text: string;
  contentType: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private URL: string = environment.apiTestUrl;
  private inputTextSubject = new Subject<any>();
  private dataFromApi = new Subject<any>();
  private dataToDiagnose: DataToDiagnose = {
    clientId: 0,
    language: 'en',
    text: '',
    contentType: 'SHORT_TEXT'
  };


  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    (async () => {
      const user = await this.userService.me();
      this.dataToDiagnose.clientId = user.config.allowedClients;
    })();
  }

  getDataToDiagnose(): Observable<any> {
    return this.dataFromApi.asObservable();
  };

  sendDataToDiagnose(text: string): void {
    this.inputTextSubject.next({ text });
    this.http.post(`${this.URL}classify/text`, this.dataToDiagnose).subscribe( res => {
      this.dataFromApi.next(res);
    });
  };

  clearDataToDiagnose(): void {
    this.inputTextSubject.next();
  };

  getTextToDiagnose(): Observable<any> {
    return this.inputTextSubject.asObservable();
  };

  changeLanguage(selectedLang: string): void {
    this.dataToDiagnose.language = selectedLang;
  };

  changeClientId(newId: number): void {
    this.dataToDiagnose.clientId = newId;
  };

  changeContentType(newContentType: string): void {
    this.dataToDiagnose.contentType = newContentType;
  };
}
