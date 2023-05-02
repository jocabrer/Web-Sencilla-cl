import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';
import { Console } from 'console';

@Component({
    selector: 'app-arma-web',
    templateUrl: './arma-web.component.html',
    styleUrls: ['./arma-web.component.scss'],
})
export class ArmaWebComponent implements OnInit {
    total = 0;
    products!: Product[];
    armawebform: UntypedFormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private prodServ: ProductService,
        private fb: FormBuilder
    ) {
        this.armawebform = this.fb.group([]);
    }
    ngOnInit(): void {
        this.inicializarFormulario();
    }

    inicializarFormulario() {
        
        this.prodServ.getProducts().subscribe(products => {
            this.products = products;
            
            const productControls = this.products.map(product => ({
                id: product.id,
                control: this.fb.control(false)
            }));
          
            const controlGroup = productControls.reduce((controls: any, { id, control }) => {
                controls[id] = control;
                return controls;
            }, {});
          
            this.armawebform = this.fb.group(controlGroup);
        });
    }
    alertFormValues(formGroup: FormGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }

    sumatotal(event: unknown) {
        // const isChecked=event.checked
        const controles = this.armawebform.getRawValue();

        this.total = 0 ; 
        // Iterar sobre las claves del objeto
        Object.keys(controles).forEach(key => {
            const control = this.armawebform.get(key); // obtener control individual
            if (control?.getRawValue())
            {
                this.products.find(prod => {
                    if (prod.id === +key)
                    {
                        this.total += prod.price;
                    }
                }) ;  
            }
            
            // hacer algo con el control, por ejemplo, validar o actualizar su valor
        });

        
    }
}
