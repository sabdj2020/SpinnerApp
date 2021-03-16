import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandSnapshotComponent } from './band-snapshot.component';

describe('BandSnapshotComponent', () => {
  let component: BandSnapshotComponent;
  let fixture: ComponentFixture<BandSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
