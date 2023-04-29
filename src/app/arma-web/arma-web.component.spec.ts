import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaWebComponent } from './arma-web.component';

describe('ArmaWebComponent', () => {
  let component: ArmaWebComponent;
  let fixture: ComponentFixture<ArmaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
