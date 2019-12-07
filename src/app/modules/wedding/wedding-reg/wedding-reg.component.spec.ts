import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingRegComponent } from './wedding-reg.component';

describe('WeddingRegComponent', () => {
  let component: WeddingRegComponent;
  let fixture: ComponentFixture<WeddingRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
