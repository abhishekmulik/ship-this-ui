
import { IInput } from './input.types'


function Input({label, placeholder}:IInput) {
  return (
    <div>
      <label htmlFor="name" className="block font-thin text-sm leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          id="name"
          name="name"
          type="text"
          placeholder={placeholder}
          className="peer block focus:outline-none bg-orange-100 w-full border-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 placeholder:font-thin placeholder:px-2"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-100 peer-focus:border-t-2"
        />
      </div>
    </div>
  )
}

export default Input