import { useState } from "react";
import orders from "../../../../data/orders.json";
import SingleOrder from "./SingleOrder";
import Tag from "../../../../ui/comman/Tag";

function OrderWrapper({ orderNumber }: { orderNumber: number }) {
  const [ordersArr,] = useState(orders);
  const [selectedOrderId,] = useState('4907 - 9090');
  return (
    <section className="mt-5">
      <div className="pl-2 flex items-center">
        <span>Orders</span>
        <Tag text={orderNumber}/>
      </div>
      <div>
        <ul className="overflow-scroll max-h-[calc(100vh-295px)] scrollbar-hide">
          {ordersArr?.map((order) => (
            <li
              key={order.id}
              className="my-2 shadow border-none rounded-md outline-none"
            >
              <SingleOrder {...order} selectedOrderId={selectedOrderId} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OrderWrapper;
