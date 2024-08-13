import Filter from "./filter/Filter";
import OrderWrapper from "./orders/OrderWrapper";

function LeftSection() {
  return (
    <div className="">
      <section>
        <Filter />
      </section>
      <section>
        <OrderWrapper orderNumber={8} />
      </section>
    </div>
  );
}

export default LeftSection;
