import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaHomeComponent } from './mapa-home.component';

describe('MapaHomeComponent', () => {
  let component: MapaHomeComponent;
  let fixture: ComponentFixture<MapaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
