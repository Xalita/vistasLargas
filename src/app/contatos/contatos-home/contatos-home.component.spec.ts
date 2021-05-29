import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosHomeComponent } from './contatos-home.component';

describe('ContatosHomeComponent', () => {
  let component: ContatosHomeComponent;
  let fixture: ComponentFixture<ContatosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
