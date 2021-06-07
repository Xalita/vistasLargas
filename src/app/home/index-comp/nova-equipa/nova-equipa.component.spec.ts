import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaEquipaComponent } from './nova-equipa.component';

describe('NovaEquipaComponent', () => {
  let component: NovaEquipaComponent;
  let fixture: ComponentFixture<NovaEquipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaEquipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
