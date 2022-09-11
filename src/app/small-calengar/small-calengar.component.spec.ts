import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCalengarComponent } from './small-calengar.component';

describe('SmallCalengarComponent', () => {
  let component: SmallCalengarComponent;
  let fixture: ComponentFixture<SmallCalengarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCalengarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCalengarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
