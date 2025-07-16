import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stag } from './stag';

describe('Stag', () => {
  let component: Stag;
  let fixture: ComponentFixture<Stag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
