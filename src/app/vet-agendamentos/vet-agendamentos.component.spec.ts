import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAgendamentosComponent } from './vet-agendamentos.component';

describe('VetAgendamentosComponent', () => {
  let component: VetAgendamentosComponent;
  let fixture: ComponentFixture<VetAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetAgendamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
