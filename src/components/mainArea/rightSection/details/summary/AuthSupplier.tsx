import InfoTextBox from "../../../../../ui/infoTextBox/InfoTextBox";
import StarRatings from "../../../../../ui/star/StarRatings";
import Addresses from "../../../../../ui/address/Addresses";
import { Mail, MapPinCheckInside, Phone, Printer } from "lucide-react";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

const AuthSupplier = () => {
  const addressInfo = {
    address: {
      txt: "1st floor, skypark, 8 elliot place, G3 8EP, GBR",
      icon: <MapPinCheckInside className="stroke-green-800 w-4" />
    },
    telephone: {
      txt: "+44 0 141 305 1300",
      icon: <Phone className="stroke-green-800 w-4" />
    },
    fax: {
      txt: "+44 0 141 305 1300",
      icon: <Printer className="stroke-green-800 w-4" />
    },
    mail: {
      txt: "reapirs@services.com",
      icon: <Mail className="stroke-green-800 w-4" />
    },
  };
  return (
    <SummaryLayout title="Authorized Supplier" tag="Ref: PRJ001963SRIN">
      <div className="space-y-4">
        <div className="flex space-x-16">
          <InfoTextBox
            title="Date Authorized"
            subTitle="12 Jul 2019"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Authorized By"
            subTitle="Jim Darren"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Invoice Chased Date"
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="PO Chased Date"
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="PO Confirmed Date"
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="PO Ref No."
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
        </div>
        <div>
          <p className="text-[13px] text-[#0E4F84]">
            Repairs (Riding Squads / Manpowers)
          </p>
          <StarRatings defaultRating={4} />
        </div>
        <div>
          <Addresses addressInfo={addressInfo} />
        </div>
      </div>
    </SummaryLayout>

  );
};

export default AuthSupplier;
