import { Host, Directive, Input } from '@angular/core'
import { NgForOf } from '@angular/common'

@Directive({
  selector: '[ngForTrackByProperty]',
  standalone: true,
})
export class TrackByPropertyDirective {
  private _propertyName = ''

  public constructor(@Host() private readonly _ngFor: NgForOf<any>) {
    this._ngFor.ngForTrackBy = (_: number, item: any) =>
      this._propertyName ? item[this._propertyName] : item
  }

  @Input('ngForTrackByProperty')
  public set propertyName(value: string | null) {
    // We must accept null in case the user code omitted the ": 'somePropName'" part.
    this._propertyName = value ?? ''
  }
}
