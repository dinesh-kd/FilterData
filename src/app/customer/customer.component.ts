import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public customers = [{
    "id": 1,
    "name": "Customer 1",
    "sites": [{
      "id": 2,
      "name": "Site 1",
      "assets": [{
        "id": 3,
        "name": "Asset 1"
      }]
    },{
      "id": 4,
      "name": "Site 2",
      "assets": [{
        "id": 5,
        "name": "Asset 2"
      }]
    },{
      "id": 6,
      "name": "Site 3",
      "assets": [{
        "id": 7,
        "name": "Asset 3"
      }]
    }]
  },{
    "id": 8,
    "name": "Customer 2",
    "sites": [{
      "id": 9,
      "name": "Site 4",
      "assets": [{
        "id": 10,
        "name": "Asset 4"
      }]
    },{
      "id": 11,
      "name": "Site 5",
      "assets": [{
        "id": 12,
        "name": "Asset 5"
      }]
    },{
      "id": 13,
      "name": "Site 6",
      "assets": [{
        "id": 14,
        "name": "Asset 6"
      }]
    }]
  },{
    "id": 15,
    "name": "Customer 3",
    "sites": [{
      "id": 16,
      "name": "Site 7",
      "assets": [{
        "id": 17,
        "name": "Asset 7"
      }]
    },{
      "id": 18,
      "name": "Site 8",
      "assets": [{
        "id": 19,
        "name": "Asset 8"
      }]
    },{
      "id": 20,
      "name": "Site 9",
      "assets": [{
        "id": 21,
        "name": "Asset 9"
      }]
    }]
  }
  ];

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
  }

  public handleSiteChange(value)
  {
    this.assets = value.assets;
  }

  public handleAssetChange(value)
  {
    
  }



}