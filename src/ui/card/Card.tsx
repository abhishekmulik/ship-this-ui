
import { ICard } from './card.types'
import { classNames } from '../../utils/common'

function Card({children, className}:ICard) {
  return (
    <div className={classNames("overflow-hidden rounded-lg bg-white shadow", className)}>
    <div className="px-3 py-2">{children}</div>
  </div>
  )
}

export default Card