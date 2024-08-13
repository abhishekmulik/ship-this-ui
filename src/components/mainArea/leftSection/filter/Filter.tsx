import Card from '../../../../ui/card/Card'
import Input from '../../../../ui/input/Input'
import Search from '../../../../ui/search/Search'
import { ChevronDown, SearchIcon, Ship } from 'lucide-react'
import FilterOption from '../../../../ui/filterOption/FilterOption'
import SettingsWithNotification from '../../../../ui/settingsWithNotifiaction/SettingsWithNotification'

function Filter() {
    return (
        <Card className='bg-orange-100 shadow-transparent'>
            <div className='flex gap-2'>
                <div className='px-2'>
                    <Search leftIcon={<><Ship className='w-4 stroke-blue-100' /></>} placeholder='My Responsibilities' rightIcon={<><SearchIcon className='w-4 stroke-blue-100' /></>} />
                    <div className='mt-2'>
                    <Input label='Copy id' placeholder='Enter copy id' />
                    </div>
                    
                    <div className='flex gap-4 mt-2'>
                        <FilterOption hasHoverState={true} label='Sort' defaultIcon={<ChevronDown className='w-4' />} hoveredIcon={<SearchIcon className='w-4 stroke-green-200' />} />
                        <FilterOption hasHoverState={true} label='Group By' defaultIcon={<ChevronDown className='w-4' />} hoveredIcon={<SearchIcon className='w-4 stroke-green-200' />} />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='col-span-3'>
                            <Search leftIcon={null} placeholder='Po' rightIcon={<><ChevronDown className='w-4 stroke-blue-100' /></>} />
                        </div>
                        <div className='flex items-center'>
                            <SettingsWithNotification notification={10} />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <Input label='Order no' placeholder='Enter order no' />
                    </div>
                    <div className='flex gap-4 mt-2 justify-end'>
                        <FilterOption hasHoverState={false} label='Clear' />
                        <FilterOption hasHoverState={false} label='Search' />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Filter