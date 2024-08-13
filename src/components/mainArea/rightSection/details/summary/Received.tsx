import InfoTextBox from "../../../../../ui/infoTextBox/InfoTextBox";
import Addresses from "../../../../../ui/address/Addresses";
import { Mail, MapPinCheckInside, Phone, Printer,  User2Icon } from "lucide-react";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

const Received = () => {
  const addressInfo = {
    address:{
        txt: "1st floor, skypark, 8 elliot place, G3 8EP, GBR",
        icon: <MapPinCheckInside className="stroke-green-800 w-4"/>
    },
    telephone: {
        txt: "+44 0 141 305 1300",
        icon: <Phone className="stroke-green-800 w-4"/>
    },
    fax: {
        txt: "+44 0 141 305 1300",
        icon: <Printer className="stroke-green-800 w-4"/>
    },
    mail: {
        txt: "reapirs@services.com",
        icon: <Mail className="stroke-green-800 w-4"/>
    },
  };
  return (
  
      <SummaryLayout title="Received At" tag="">
      <div className="space-y-4">
        <div className="flex space-x-16">
          <InfoTextBox
            title="Ordered Date"
            subTitle="12 Jul 2019"
            subTitleCss="text-[12px] font-bold text-black"
          />
          <InfoTextBox
            title="Expected"
            subTitle="14 Aug 2019"
            subTitleCss="text-[12px] font-bold text-red-500"
          />
          <InfoTextBox
            title="Port"
            subTitle="Dover"
            subTitleCss="text-[12px] font-bold text-black"
          />
        </div>
        <div className="flex gap-2 items-center my-4">
        <span><User2Icon className="stroke-blue-400 w-5"/></span>
      <span className="font-medium text-sm text-blue-400">George Vessel berth</span>
        </div>
        <div>
          <Addresses addressInfo={addressInfo}/>
        </div>
        </div>
        </SummaryLayout>
  );
};

export default Received;
