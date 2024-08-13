import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AmountDetails {
    color: string; 
    value: number;  
  }
  
  interface ObjInterface { 
    amount: AmountDetails;    
    outstanding: AmountDetails; 
    title:string;
  }
  

const SemiCircularChart = (obj:ObjInterface) => {
    const {
        amount: {
          color: amtColor,
          value: amtVal, 
        },
        outstanding: {
          color: outColor,
          value: outVal,
        },
        title
      } = obj;
      
    const amount = amtVal;
    const outstanding = outVal;
  const data = {
    labels: ['Amount', 'Outstanding'],
    datasets: [
      {
        data: [100, 20],
        backgroundColor: [amtColor, outColor], 
        borderWidth: 0,
        cutout: '75%',
        rotation: -90, 
        circumference: 180, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-medium mr-auto mb-4">{title}</h2>
      <div className='border-[0.5px] border-white-200 w-full'></div>
      <div className="relative w-48 h-48">
        <Doughnut data={data} options={options} />
      </div>
      <div className='flex justify-between w-full'>
      <div className="flex flex-col justify-between w-full mt-4">
        <div className="flex items-center">
          <span style={{
            background:amtColor
          }} className="w-3 h-3 rounded-full mr-2"></span>
          <span className="text-gray-700">Amount</span>
        </div>
        <div className="text-gray-900 font-semibold">
          {amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full mt-4">
        <div className="flex items-center">
          <span style={{
            background: outColor
          }} className="w-3 h-3 rounded-full mr-2"></span>
          <span className="text-gray-700">Outstanding</span>
        </div>
        <div className="text-gray-900 font-semibold">
          {outstanding.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SemiCircularChart;
