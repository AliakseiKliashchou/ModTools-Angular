import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ClientPickerComponent } from './client-picker.component';

describe('ClientPickerComponent', () => {
  let component: ClientPickerComponent;
  let fixture: ComponentFixture<ClientPickerComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPickerComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
