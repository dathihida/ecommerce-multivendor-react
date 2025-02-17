import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRM" },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPER" },
  { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
  { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
  { name: "Canceled", description: "by 16 Jul - 18 Jul", value: "CANCELLED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];

const currentStep = 1;

const OrderStepper = ({ orderStatus }: { orderStatus: string }) => {
  const [statusStep, setStatusStep] = useState(orderStatus === "CANCELLED" ? canceledStep : steps);

  useEffect(() => {
    setStatusStep(orderStatus === "CANCELLED" ? canceledStep : steps);
  }, [orderStatus]);

  return (
    <Box className="mx-auto my-10">
      {statusStep.map((item, index) => {
        const isActive = index <= currentStep;
        const isCurrent = item.value === orderStatus;

        return (
          <div key={item.value} className="flex px-4">
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  isActive ? "bg-gray-200 text-teal-500" : "bg-gray-300 text-gray-600"
                }`}
              >
                {isCurrent ? <CheckCircleIcon /> : <FiberManualRecordIcon sx={{ zIndex: -1 }} />}
              </Box>

              {index < statusStep.length - 1 && (
                <div className={`border h-20 w-[2px] ${isActive ? "text-teal-500" : "bg-gray-300 text-gray-600"}`} />
              )}
            </div>
            <div className={`ml-2 w-full`}>
                <div 
                    className={`${item.value === orderStatus ? "bg-primary-colors p-2 text-white font-medium rounded-md translate-y-3": ""} 
                                ${(orderStatus === "CANCELLED" && item.value === orderStatus) ? "bg-red-500":""} w-full`}>
                        <p className={``}>
                            {item.name}
                        </p>
                        <p className={`${item.value === orderStatus ? "text-gray-200" : "text-gray-500"} text-xs`}>
                            {item.description}
                        </p>
                    </div>
            </div>
          </div>
        );
      })}
    </Box>
  );
};

export default OrderStepper;
