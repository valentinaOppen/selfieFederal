import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFileComponent } from './show-file.component';

describe('ShowFileComponent', () => {
  let component: ShowFileComponent;
  let fixture: ComponentFixture<ShowFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
