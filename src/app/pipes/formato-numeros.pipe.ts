import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Manejo de movimientos
 */
@Pipe({ name: 'formatoNumeros' })
export class FormatoNumerosPipe implements PipeTransform {
    

    /**
     * Transforma los campos de las tablas de movimientos, si está seteado un método de conversión lo utiliza para la conversión.
     * @param fieldValue Valor a convertir
     * @param metodo     Método especialista en devolver el valor solicitado..
     */
    transform(fieldValue: any, metodo?: string): any {
        if (!metodo) {
            return fieldValue;
        }
        if (!fieldValue) {
            return '';
        }

        return eval('this.' + metodo + '(\'' + fieldValue + '\')');
    }

    /**
     * Retorna un monto en formato moneda
     * @param monto Monto a mostrar.
     */
    formatoMoneda(monto: number): string {
        // ESTO SE USA PARA LOS CASOS DEL TREENODE ESTÁ AGRUPADO Y NO PASE POR EL PIPE LOS MONTOS
        if (monto.toString() === 'undefined') {
            return '';
        }
        const formatter = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
        });
        return formatter.format(monto);
    }

    /**
     * Retorna una fecha y si es hoy o ayer indica la hora.
     * @param fechas Fecha string a mostrar.
     */
    formatoFecha(fechas: string): string | null {
        const fecha = new Date(fechas);
        const hoy = new Date();
        const ayer = new Date();
        ayer.setDate(ayer.getDate() - 1);

        if (fecha.toLocaleDateString() === hoy.toLocaleDateString()) {
            return `Hoy a las ${fecha
                .getHours()
                .toString()
                .padStart(2)
                .replace(' ', '0')}:${fecha
                .getMinutes()
                .toString()
                .padStart(2)
                .replace(' ', '0')}`;
        }

        if (fecha.toLocaleDateString() === ayer.toLocaleDateString()) {
            return 'Ayer';
        }

        return new DatePipe('en-Us').transform(fecha, 'dd-MM-yyyy');
    }
}

