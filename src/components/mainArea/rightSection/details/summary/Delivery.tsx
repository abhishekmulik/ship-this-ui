import InfoTextBox from "../../../../../ui/infoTextBox/InfoTextBox";
import Addresses from "../../../../../ui/address/Addresses";
import { Mail, MapPinCheckInside, Phone, Warehouse } from "lucide-react";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

const Delivery = () => {
  const addressInfo = {
    address:{
        txt: "1st floor, skypark, 8 elliot place, G3 8EP, GBR",
        icon: <MapPinCheckInside className="stroke-green-800 w-4"/>
    },
    telephone: {
        txt: "+44 0 141 305 1300",
        icon: <Phone className="stroke-green-800 w-4"/>
    },
    mail: {
        txt: "reapirs@services.com",
        icon: <Mail className="stroke-green-800 w-4"/>
    },
  };
  return (
      <SummaryLayout  title="Delivery To" tag="" >
      <div className="space-y-4">
        <div className="flex space-x-16">
          <InfoTextBox
            title="Ordered Date"
            subTitle="10 May 2023"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Expected"
            subTitle="02 Jan 2023"
            subTitleCss="text-[12px]  text-red-500"
          />
          <InfoTextBox
            title="Port"
            subTitle="-"
            subTitleCss="text-[12px] text-black"
          />
          <InfoTextBox
            title="Ex Works Days"
            subTitle="15"
            subTitleCss="text-[12px]  text-black"
          />
        </div>
        <div className="flex gap-2 items-center my-4">
        <span><Warehouse className="stroke-blue-400 w-5"/></span>
      <span className="font-medium text-sm text-blue-400">Marine</span>
        </div>
        <div>
          <Addresses addressInfo={addressInfo}/>
        </div>
        </div>
        </SummaryLayout>
  );
};

export default Delivery;
