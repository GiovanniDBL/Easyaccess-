import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDesarrolloComponent } from './reportes-desarrollo.component';

describe('ReportesDesarrolloComponent', () => {
  let component: ReportesDesarrolloComponent;
  let fixture: ComponentFixture<ReportesDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
