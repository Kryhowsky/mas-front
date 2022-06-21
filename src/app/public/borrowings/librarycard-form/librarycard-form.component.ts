import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { CheckActiveBorrowingsByLibraryCardNumberAction } from '../state/borrowings.actions';

@Component({
  selector: 'app-librarycard-form',
  templateUrl: './librarycard-form.component.html',
  styleUrls: ['./librarycard-form.component.sass']
})
export class LibrarycardFormComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [{
    fieldGroup: [
      {
        key: "libraryCardNumber",
        type: "input",
        templateOptions: {
          label: "Library Card Number",
          placeholder: "Insert library card number",
          type: "number",
          min: 0,
          minLength: 9,
          required: true
        }
      }
    ]
  }]

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new CheckActiveBorrowingsByLibraryCardNumberAction(this.formGroup.value.libraryCardNumber))
  }

}
