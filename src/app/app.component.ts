import {
    AfterViewInit,
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('menubutton') menubutton!: ElementRef;
    @ViewChild('mobileMenu') mobileMenu!: ElementRef; 

    constructor() {}

    ngAfterViewInit() {
        console.log(this.mobileMenu.nativeElement);   
    } 

    /**  
     *yy
     */
    mostrarMenuMobile() {   
        if (this.mobileMenu.nativeElement.style.display === 'block') {
            this.mobileMenu.nativeElement.style.display = 'none'; 
        } else {   
            this.mobileMenu.nativeElement.style.display = 'block' 
        }
    }

    title = 'websencilla-cl';
}
