import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'httpErrorPipe'
})
export class HttpErrorPipe implements PipeTransform {

    transform(error: any): string {
        switch(error.status){
            case 504: 
                return 'Error conectando al servidor, por favor intente más tarde';
            case 400:
                return 'Error realizando el pedido, por favor intentelo de nuevo';
            default:
                return error.statusText;
        }
    }

}