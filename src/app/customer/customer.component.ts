import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.GetCustomerData().subscribe(resp => {
      this.customers = resp.data;
    })
  }

  public customers = [];
  public sites = [];
  public assets = [];

  public filterForm: FormGroup = new FormGroup({
      customers: new FormControl(),
      sites: new FormControl(),
      assets: new FormControl()
  });

  public handleCustomerChange(value)
  {
    this.sites = value.sites;
    this.filterForm.patchValue({
      sites: null,
      assets: null
    });
  }

  public handleSiteChange(value)
  {
    this.assets = value.assets;
    this.filterForm.patchValue({
      assets: null
    });
  }

}