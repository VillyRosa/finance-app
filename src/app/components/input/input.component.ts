import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() value: string = '';

}
