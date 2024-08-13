import { ISearch } from './search.types'

function Search({leftIcon, placeholder, rightIcon}:ISearch) {
  return (
    <div className='bg-orange-200 rounded-3xl py-2 px-4 flex items-center gap-3 w-full'>
       {leftIcon && <span>{leftIcon}</span>}
       <span className='text-black-100 font-base text-sm whitespace-nowrap'>{placeholder}</span>
       {rightIcon && <span>{rightIcon}</span>}
    </div>
  )
}

export default Search