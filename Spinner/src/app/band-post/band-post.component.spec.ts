import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandPostComponent } from './band-post.component';

describe('BandPostComponent', () => {
  let component: BandPostComponent;
  let fixture: ComponentFixture<BandPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
