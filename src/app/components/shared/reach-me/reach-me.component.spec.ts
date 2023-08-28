import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReachMeComponent } from './reach-me.component';

describe('ReachMeComponent', () => {
  let component: ReachMeComponent;
  let fixture: ComponentFixture<ReachMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
