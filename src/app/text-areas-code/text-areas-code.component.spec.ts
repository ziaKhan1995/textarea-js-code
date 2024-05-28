/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextAreasCodeComponent } from './text-areas-code.component';

describe('TextAreasCodeComponent', () => {
  let component: TextAreasCodeComponent;
  let fixture: ComponentFixture<TextAreasCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreasCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreasCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
