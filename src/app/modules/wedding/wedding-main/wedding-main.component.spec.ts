import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingMainComponent } from './wedding-main.component';

describe('WeddingMainComponent', () => {
  let component: WeddingMainComponent;
  let fixture: ComponentFixture<WeddingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
