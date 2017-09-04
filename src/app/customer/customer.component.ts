import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import _ from "lodash";

import { AssetsModel,CustomerModel,SitesModel } from './customer.model';
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
      this.gridData =  resp.data;
    })
  }

  public customers:CustomerModel[] = [];
  public sites:SitesModel[] = [];
  public assets:AssetsModel[]= [];
  public gridData: CustomerModel[] | SitesModel[] | AssetsModel[] = [];

  public filterForm: FormGroup = new FormGroup({
      customers: new FormControl(),
      sites: new FormControl(),
      assets: new FormControl()
  });

  public handleCustomerChange(value:CustomerModel): void{
    this.sites = value.sites;
    this.gridData = value.sites;
    this.assets = [];
    this.filterForm.patchValue({
      sites: null,
      assets: null
    });
  }

  public handleSiteChange(value:SitesModel):void {
    this.assets = value.assets;
    this.gridData = value.assets;
    this.filterForm.patchValue({
      assets: null
    });
  }

  public handleSelectGrid(gridCustomer,selection):void {
    let selectedRow = gridCustomer.data[selection.index];
    let isSites = selectedRow.hasOwnProperty("sites");;
    let isAssets = selectedRow.hasOwnProperty("assets");;
    if(isSites){
      this.handleCustomerChange(selectedRow);
      this.filterForm.patchValue({
        customers: selectedRow
      });
    }else if(isAssets){
      this.handleSiteChange(selectedRow);
      this.filterForm.patchValue({
        sites: selectedRow
      });
    }else{
      this.filterForm.patchValue({
        assets: selectedRow
      });
    }
  }

  public resetValue():void {
    this.filterForm.reset();
    this.gridData = this.customers;
    this.sites = [];
    this.assets = [];
  }
}