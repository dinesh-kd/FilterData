export class CustomerModel{
    id:string;
    name:string;
    sites:SitesModel[]
}

export class SitesModel{
    id:string;
    name:string;
    assets:AssetsModel[]
}

export class AssetsModel{
    id:string;
    name:string;
}