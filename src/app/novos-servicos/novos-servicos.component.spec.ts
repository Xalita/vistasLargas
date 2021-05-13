import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosServicosComponent } from './novos-servicos.component';

describe('NovosServicosComponent', () => {
  let component: NovosServicosComponent;
  let fixture: ComponentFixture<NovosServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
