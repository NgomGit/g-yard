import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteClosableComponent } from './alerte-closable.component';

describe('AlerteClosableComponent', () => {
  let component: AlerteClosableComponent;
  let fixture: ComponentFixture<AlerteClosableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteClosableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteClosableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
