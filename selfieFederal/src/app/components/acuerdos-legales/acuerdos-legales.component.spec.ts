import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosLegalesComponent } from './acuerdos-legales.component';

describe('AcuerdosLegalesComponent', () => {
  let component: AcuerdosLegalesComponent;
  let fixture: ComponentFixture<AcuerdosLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdosLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
