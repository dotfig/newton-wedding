import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPicsComponent } from './wedding-pics.component';

describe('WeddingPicsComponent', () => {
  let component: WeddingPicsComponent;
  let fixture: ComponentFixture<WeddingPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
