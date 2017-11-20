import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacsComponent } from './macs.component';

describe('MacsComponent', () => {
  let component: MacsComponent;
  let fixture: ComponentFixture<MacsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
