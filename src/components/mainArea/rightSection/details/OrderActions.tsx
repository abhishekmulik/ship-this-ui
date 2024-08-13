import {
  FilePenLine,
  NotebookText,
  Pointer,
  Printer,
  ReceiptText,
} from "lucide-react";

function OrderActions() {
  const actions = [
    {
      icon: FilePenLine,
      name: "Edit Order Details",
    },
    {
      icon: Printer,
      name: "Print Order Details",
    },
    {
      icon: NotebookText,
      name: "Change Delivery Status",
    },
    {
      icon: ReceiptText,
      name: "Reports",
    },
    {
      icon: Pointer,
      name: "Actions",
    },
  ];
  return (
    <div className="flex px-4 gap-10 py-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center text-sm"
        >
          {action.icon && <span className="mr-1"><action.icon className="stroke-green-800 w-4"/></span>}
          <span className="text-xs font-semibold text-green-800">{action.name}</span>
        </button>
      ))}
    </div>
  );
}

export default OrderActions;
