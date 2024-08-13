
import { Paperclip } from "lucide-react";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

function InvoicesTable() {
  const rows = [
    {
      attachment: <Paperclip className="text-green-700  rotate-[315deg] w-4" />,
      status: (
        <p className="text-green-700 text-sm font-base">Invoice Paid</p>
      ),
      ref: "PJIN002271-SRIN",
      amount: "34,445.00",
      currency: "USD",
      date: "23 Sep 2019",
      pDate: "30 Jun 2020",
    },
    {
      attachment: <Paperclip className="text-green-700 rotate-[315deg] w-4" />,
      status: (
        <p className="text-green-700 text-sm font-base">Invoice Paid</p>
      ),
      ref: "PJIN002156-SRIN",
      amount: "31,320.00",
      currency: "USD",
      date: "12 Aug 2019",
      pDate: "30 Jun 2020",
    },
  ];

  return (
    <SummaryLayout title={"Invoices"} tag={rows.length}>
      <div className="overflow-x-auto shadow rounded-lg mt-2">
        <table className="min-w-full text-left text-sm border border-gray-300 rounded-lg">
          <thead className="bg-white-300 border-b border-black">
            <tr>
              <th className="py-2 px-4 font-normal">Attachments</th>
              <th className="py-2 px-4 font-normal">Status</th>
              <th className="py-2 px-4 font-normal">Reference</th>
              <th className="py-2 px-4 font-normal">Amount</th>
              <th className="py-2 px-4 font-normal">Currency</th>
              <th className="py-2 px-4 font-normal">Invoice Date</th>
              <th className="py-2 px-4 font-normal">Paid Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="bg-slate-100 border-b last:border-0"
              >
                <td className="py-2 px-4">{row.attachment}</td>
                <td className="py-2 px-4">{row.status}</td>
                <td className="py-2 px-4">{row.ref}</td>
                <td className="py-2 px-4">{row.amount}</td>
                <td className="py-2 px-4">{row.currency}</td>
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4">{row.pDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SummaryLayout>
  );
};

export default InvoicesTable;
