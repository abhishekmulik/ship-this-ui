
interface ServiceData {
    type: string;
    date: string;
}
  
interface HeaderDetails {
    orderId: string;
    clientName: string;
    serviceData: ServiceData;
    tagColor: string;
    profileText: string;
    accountCode: string;
    accountHolderName: string;
}   

export interface IHeaderDetails{
    headerDetails: HeaderDetails
}
  