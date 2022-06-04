import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginFromLocalStorageAction } from './public/auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'mas-front';

  constructor (private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoginFromLocalStorageAction())
  }
}
