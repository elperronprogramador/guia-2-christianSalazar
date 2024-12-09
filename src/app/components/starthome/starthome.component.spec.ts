import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarthomeComponent } from './starthome.component';

describe('StarthomeComponent', () => {
  let component: StarthomeComponent;
  let fixture: ComponentFixture<StarthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
