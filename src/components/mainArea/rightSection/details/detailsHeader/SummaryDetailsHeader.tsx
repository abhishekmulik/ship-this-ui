import ProfileBadge from "../../../../../ui/profile/ProfileBadge";
import InfoTextBox from "../../../../../ui/infoTextBox/InfoTextBox";
import FilterOption from "../../../../../ui/filterOption/FilterOption";
import { IHeaderDetails } from "./details.types";
import ShipCard from "../../../../../ui/shipCard/ShipCard";

const SummaryDetailsHeader = ({headerDetails}:IHeaderDetails) => {
  return (
    <div className="bg-slate-200 overflow-hidden p-4 gap-4">
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-2 flex-1">
          <ProfileBadge
            text={headerDetails.profileText}
            bgColor={headerDetails.tagColor}
          />
          <p className="font-bold text-sm tracking-wide">{headerDetails.orderId}</p>
          <p className="font-bold text-sm tracking-wide">
            {headerDetails.clientName?.toUpperCase()}
          </p>
        </div>
       <ShipCard name="Lorem ipsum"/>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <InfoTextBox
            title="Date Requested"
            subTitle={headerDetails.serviceData.date}
            subTitleCss="font-semibold text-xs text-zinc-950"
          />
          <InfoTextBox
            title="Type"
            subTitle={headerDetails.serviceData.type}
            subTitleCss="font-semibold text-xs text-zinc-950"
          />
          <InfoTextBox
            title="Account Code"
            subTitle={`${headerDetails.accountCode} - ${headerDetails.accountHolderName}`}
            subTitleCss="font-semibold text-xs text-zinc-950"
          />
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <FilterOption hasHoverState={!false} label="Order Summary" labelCss="text-green-400"/>
          <FilterOption hasHoverState={!false} label="Order Progress" labelCss="text-green-400"/>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetailsHeader;
