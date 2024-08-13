import { ReactNode } from "react";

interface ContactInfo {
    txt: string;
    icon: ReactNode;
  }
  
interface AddressInfoProps {

        address?: ContactInfo;
        telephone?: ContactInfo;
        fax?: ContactInfo;
        mail?: ContactInfo;
        
  }
  
export interface IAddressInfo{
    addressInfo: AddressInfoProps
}
  