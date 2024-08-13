import InfoTextBox from "../../../../../ui/infoTextBox/InfoTextBox";
import SummaryLayout from '../../../../../ui/summaryLayout/SummaryLayout';

function Frieght() {
  return (
    <SummaryLayout title="Frieght Details" tag={""}>
      <div className="space-y-4">
        <div className="flex space-x-16">
          <InfoTextBox
            title="No. of pieces"
            subTitle="0"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Weight (in KG)"
            subTitle="0"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Total CBM"
            subTitle="0"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Freight Order"
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="Transport Mode"
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
          <InfoTextBox
            title="AWB/Reference No."
            subTitle="-"
            subTitleCss="text-[12px]  text-black"
          />
        </div>
      </div>
    </SummaryLayout>
  )
}

export default Frieght