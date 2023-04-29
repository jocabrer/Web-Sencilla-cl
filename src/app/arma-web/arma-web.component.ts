import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';

@Component({
    selector: 'app-arma-web',
    templateUrl: './arma-web.component.html',
    styleUrls: ['./arma-web.component.scss'],
})
export class ArmaWebComponent  implements OnInit{
    
    total: number = 0 ;
    products!: Product[];
    armawebform: UntypedFormGroup;

    constructor(private _formBuilder: FormBuilder, private prodServ: ProductService, private fb: FormBuilder) {
        this.armawebform = this.fb.group([]);
    } 
    ngOnInit(): void {
        this.inicializarFormulario();
    }

    inicializarFormulario()
    {
        this.prodServ.getProducts()
        .subscribe(products => {
             this.products = products;
             const productControls = this.products.reduce((controls: any, product) => {
                controls[product.id] = [false];
                return controls;
            }, {});


            this.armawebform = this.fb.group(productControls);
        });


        
    }
    alertFormValues(formGroup: FormGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }

    sumatotal(event: any)
    { 
        if (event.checked)
        {

        }
        this.total = 1;
        console.log( this.armawebform.controls );
    }
   
}
