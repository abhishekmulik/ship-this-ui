import Box from '../comman/Box'
import Header from '../header/Header'
import { ISummaryLayout } from './ISummaryLayout.types'

function SummaryLayout({title, tag, children}:ISummaryLayout) {
  return (
    <Box>
    <div className="p-2">
    <Header title={title} tag={tag} />
    {children}
    </div>
  </Box>
  )
}

export default SummaryLayout