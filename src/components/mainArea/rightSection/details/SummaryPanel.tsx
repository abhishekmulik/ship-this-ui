import { useState } from "react";
import Summary from "./summary/Summary";

const options = [
  "Summary",
  "Order lines",
  "Suppliers",
  "Analysis",
  "Freight details",
  "Delivery",
  "Invoice",
  "Memos",
  "Notes & attachments",
  "Budgets",
];

const SummaryPanel = () => {
  const [selectedTab, setSelectedTab] = useState(options[0]);

  const handleTabSelection = (newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div className="w-full text-sm mt-4">
        <div className="flex border-b pl-4">
          {options.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-2 text-nowrap  ${
                selectedTab === tab ? "border-b-2 border-green-100 text-green-100 text-bold" : "border-b-2 border-transparent text-white-400"
              }`}
              onClick={() => handleTabSelection(tab)}
              role="navigation"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-255px)] scrollbar-hide p-4">
        <Summary />
      </div>
    </>
  );
};

export default SummaryPanel;
