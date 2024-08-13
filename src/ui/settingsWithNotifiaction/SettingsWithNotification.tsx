import { SlidersHorizontal } from 'lucide-react'

function SettingsWithNotification({notification}:{notification:number}) {
  return (
    <div className='w-8 h-8 rounded-[50%] bg-black-100 flex justify-center items-center relative'>
    <SlidersHorizontal className='stroke-green-200 w-4'/>
    <div className='bg-green-200 text-[12px] text-black-100 absolute px-2 -right-5 -top-1 w-fit rounded-xl'>{notification}</div>
    </div>
  )
}

export default SettingsWithNotification