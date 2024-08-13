
function Addresses({addressInfo}:any) {
  
  const keys= Object.keys(addressInfo);
  
  return (
    <div className="w-full mb-0">
      {keys.map((key, index) => (
        <div key={index} className="flex items-center space-x-2 mb-1">
          {addressInfo[key].icon}
          <p
            className={`text-xs text-green-700 cursor-pointer`}
          >
            {addressInfo[key].txt}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Addresses;
