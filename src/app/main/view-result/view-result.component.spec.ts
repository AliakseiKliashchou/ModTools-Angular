import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ViewResultComponent } from './view-result.component';

describe('ViewResultComponent', () => {
  let component: ViewResultComponent;
  let fixture: ComponentFixture<ViewResultComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResultComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
