import ProfileBadge from "../../../../../ui/profile/ProfileBadge";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

const Suppliers = () => {
  const rows = [
    {
      status: (
        <ProfileBadge
          text="TQ"
          bgColor="#008A25"
        />
      ),
      name: "Engineering Co. Ltd",
      goods: "3,459.70",
      freight: "0.00",
      total: "3,459.70",
      currency: "EUR",
      base: "3,811.92",
    },
    {
      status: (
        <ProfileBadge
          text="TQ"
          bgColor="#008A25"
        />
      ),
      name: "Fintec Co. Ltd - Spares",
      goods: <span className="text-red-500 text-sm">4,370.60</span>,
      freight: "0.00",
      total: "4,370.60",
      currency: "EUR",
      base: "4,370.60",
    },
  ];

  return (
    <SummaryLayout title={"Supplier"} tag={rows.length} >
      <div className="overflow-x-auto shadow rounded-lg mt-2">
        <table className="min-w-full text-left text-sm border border-gray-300 rounded-lg">
          <thead className="bg-white-300">
            <tr>
              <th className="py-2 px-4 font-normal">Status</th>
              <th className="py-2 px-4 font-normal">Supplier Name</th>
              <th className="py-2 px-4 font-normal">Goods</th>
              <th className="py-2 px-4 font-normal">Freight</th>
              <th className="py-2 px-4 font-normal">Total</th>
              <th className="py-2 px-4 font-normal">Currency</th>
              <th className="py-2 px-4 font-normal">Base(USD)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="bg-slate-100 border-b last:border-0"
              >
                <td className="py-2 px-4">{row.status}</td>
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.goods}</td>
                <td className="py-2 px-4">{row.freight}</td>
                <td className="py-2 px-4">{row.total}</td>
                <td className="py-2 px-4">{row.currency}</td>
                <td className="py-2 px-4">{row.base}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SummaryLayout>
  );
};

export default Suppliers;
