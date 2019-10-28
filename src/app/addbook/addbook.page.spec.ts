import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookPage } from './addbook.page';

describe('AddbookPage', () => {
  let component: AddbookPage;
  let fixture: ComponentFixture<AddbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
