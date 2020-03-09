import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ContentTypePickerComponent } from './content-type-picker.component';

describe('ContentTypePickerComponent', () => {
  let component: ContentTypePickerComponent;
  let fixture: ComponentFixture<ContentTypePickerComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTypePickerComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
