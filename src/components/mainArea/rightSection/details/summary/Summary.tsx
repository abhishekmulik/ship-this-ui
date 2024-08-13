import AuthSupplier from "./AuthSupplier";
import Suppliers from "./Supplier";
import Frieght from "./Frieght";
import Delivery from "./Delivery";
import Received from "./Received";
import InvoicesTable from "./InvoicesTable";
import Feedback from "./Feedback";
import Charts from "./Charts";
import Components from "./Components";

function Summary() {
  return (
    <>
    <div>
    <Components/>
    </div>
      <div className="mt-4">
        <AuthSupplier />
      </div>
      <div className="mt-4">
        <Suppliers />
      </div>
      <div className="mt-4">
        <InvoicesTable />
      </div>
      <div className="mt-4">
        <Charts/>
      </div>
      <div className="mt-4">
        <Frieght />
      </div>
      <div className="mt-4">
        <Delivery />
      </div>
      <div className="mt-4">
        <Received />
      </div>
      <div className="mt-4">
        <Feedback/>
      </div>
    </>
  );
}

export default Summary;
