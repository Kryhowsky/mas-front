import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { LoginAction } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email",
        placeholder: "Enter email address",
        required: true
      }
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Password",
        placeholder: "Enter password",
        type: "password",
        required: true
      }
    }
  ]

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new LoginAction(this.formGroup.value))
  }

}
