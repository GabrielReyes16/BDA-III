import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasViajeComponent } from './boletas-viaje.component';

describe('BoletasViajeComponent', () => {
  let component: BoletasViajeComponent;
  let fixture: ComponentFixture<BoletasViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletasViajeComponent]
    });
    fixture = TestBed.createComponent(BoletasViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
