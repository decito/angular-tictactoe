import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button
      nbButton
      hero
      status="info"
      *ngIf="value === 'X'"
      >{{ value }}
    </button>
    <button
      nbButton
      hero
      status="warning"
      *ngIf="value === 'O'"
      >{{ value }}
    </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 6rem }'
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O'

}
