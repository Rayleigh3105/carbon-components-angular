import { CheckboxComponent } from "./checkbox.component";
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Output,
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export enum SwitchState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

export class SwitchChange {
	source: SwitchComponent;
	checked: boolean;
}

@Component({
	selector: "cdl-switch",
	template: `
		<div class="switch">
			<label>
				<span  class="label"><ng-content></ng-content></span>
				<input type="checkbox" #inputCheckbox
					[checked]="checked"
					[disabled]="disabled"
					[indeterminate]="indeterminate"
					[name]="name"
					[required]="required"
					[value]="value"
					[attr.aria-label]="ariaLabel"
					[attr.aria-labelledby]="ariaLabelledby"
					[attr.aria-checked]="indeterminate ? 'mixed' : checked"
					(change)="onChange($event)"
					(click)="onClick($event)"
					role="checkbox">
					<span></span>
			</label>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SwitchComponent),
			multi: true
		}
	]
})
export class SwitchComponent extends CheckboxComponent {
}