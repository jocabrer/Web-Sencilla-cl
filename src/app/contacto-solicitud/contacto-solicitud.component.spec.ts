import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSolicitudComponent } from './contacto-solicitud.component';

describe('ContactoSolicitudComponent', () => {
  let component: ContactoSolicitudComponent;
  let fixture: ComponentFixture<ContactoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
