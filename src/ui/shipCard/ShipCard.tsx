import { ShipIcon } from 'lucide-react'

function ShipCard({name}:{name:string}) {
  return (
    <div className='bg-blue-300 rounded-lg gap-2 whitespace-nowrap flex items-center px-2'>
        <span>
        <ShipIcon className="stroke-blue-200 w-4 mr-1" />
      </span>
      <span className="text-blue-200 text-sm">{name}</span>
    </div>
  )
}

export default ShipCard