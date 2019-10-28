import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebookPage } from './singlebook.page';

describe('SinglebookPage', () => {
  let component: SinglebookPage;
  let fixture: ComponentFixture<SinglebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglebookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
