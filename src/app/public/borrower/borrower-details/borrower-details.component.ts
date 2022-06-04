import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BorrowerDto } from 'src/api/models';
import { ClearBorrowerAction, GetBorrowerByIdAction } from '../state/state/borrower.actions';

@Component({
  selector: 'app-borrower-details',
  templateUrl: './borrower-details.component.html',
  styleUrls: ['./borrower-details.component.sass']
})
export class BorrowerDetailsComponent implements OnInit, OnDestroy {

  borrowerId: number

  @Select(state => state.borrower.borrower)
  borrower$: Observable<BorrowerDto>

  formGroup: FormGroup = new FormGroup({})

  constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.borrowerId = params["id"]

      if (this.borrowerId) {
        this.store.dispatch(new GetBorrowerByIdAction(this.borrowerId))
      }
    })
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearBorrowerAction());
  }

}
