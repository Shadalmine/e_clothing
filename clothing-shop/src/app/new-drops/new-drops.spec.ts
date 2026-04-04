import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDrops } from './new-drops';

describe('NewDrops', () => {
  let component: NewDrops;
  let fixture: ComponentFixture<NewDrops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDrops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDrops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
