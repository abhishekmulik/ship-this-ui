import { ChevronDown } from 'lucide-react'

function Profile() {
  return (
    <div className='flex items-center gap-2 rounded-2xl bg-white shadow-md p-2 border-[0.5px] border-white-200'>
        <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-5 w-5 rounded-full"
      />
      <span className='text-sm font-bold'>Daniel Rogers</span>
      <span><ChevronDown className='w-4'/></span>
    </div>
  )
}

export default Profile