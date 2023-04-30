import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNoEncontradoComponent } from './componente-no-encontrado.component';

describe('ComponenteNoEncontradoComponent', () => {
    let component: ComponenteNoEncontradoComponent;
    let fixture: ComponentFixture<ComponenteNoEncontradoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComponenteNoEncontradoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponenteNoEncontradoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
