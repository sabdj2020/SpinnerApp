import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBandComponent } from './join-band.component';

describe('JoinBandComponent', () => {
  let component: JoinBandComponent;
  let fixture: ComponentFixture<JoinBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
