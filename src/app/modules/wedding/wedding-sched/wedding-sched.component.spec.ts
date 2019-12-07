import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingSchedComponent } from './wedding-sched.component';

describe('WeddingSchedComponent', () => {
  let component: WeddingSchedComponent;
  let fixture: ComponentFixture<WeddingSchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingSchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
