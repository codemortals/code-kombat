import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let uniqueId = 0;

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => InputComponent),
        },
    ],
})
export class InputComponent implements ControlValueAccessor {

    public isDisabled = false;
    public currentValue: string;

    @Input()
    public id = `input-${ ++uniqueId }`;

    @Input()
    public label: string;

    @Input()
    public type: 'text' | 'textarea';

    @Input()
    public name: string;

    private hasChange: (value: string) => void = () => { };
    private isTouched = () => { };

    set value(value: string) {
        this.currentValue = value;
        this.hasChange(this.currentValue);
        this.isTouched();
    }
    get value(): string {
        return this.currentValue;
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.hasChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: string): void {
        this.currentValue = value;
    }

}
