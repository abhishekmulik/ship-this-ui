import SummaryDetailsHeader from "./detailsHeader/SummaryDetailsHeader";
import OrderActions from "./OrderActions";
import SummaryPanel from "./SummaryPanel";

const SummaryWrapper = () => {
  const headerDetails = {
    orderId: "4907-00019",
    clientName: "hotel/tech work squad gfr",
    serviceData: {
      type: "Services",
      date: "12 Jul 2019",
    },
    tagColor: "#008A25",
    profileText: "RT",
    accountCode: "5830042",
    accountHolderName: "HM PAX ACCOMODATION (LABOUR)",
  };
  return (
    <section className="rounded-xl overflow-hidden">
      <section className="max-h-[calc(100vh-77px)] h-[calc(100vh-77px)]">
        <SummaryDetailsHeader headerDetails={headerDetails}/>
        <hr className="border-gray-300" />
        <OrderActions />
        <hr className="border-gray-300" />
        <SummaryPanel />
      </section>
    </section>
  );
};

export default SummaryWrapper;
