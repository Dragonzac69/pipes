import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform(value: boolean ): string {
        return ( value ) ? 'vuela' : 'no vuela';
    }

}