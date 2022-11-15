import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRelatoriosComponent } from './vet-relatorios.component';

describe('VetRelatoriosComponent', () => {
  let component: VetRelatoriosComponent;
  let fixture: ComponentFixture<VetRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetRelatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
