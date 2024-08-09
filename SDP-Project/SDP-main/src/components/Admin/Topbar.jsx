import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const Topbar = () => {
    
    return (
        <div className='h-[8vh] w-full bg-red-100 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-4'>
                <Avatar>
                    <AvatarImage src="https://i.pinimg.com/236x/10/cc/fb/10ccfb09dee1a6975d90eeef70c9b8bc.jpg" alt="@shadcn" />
                    <AvatarFallback>ToysStore</AvatarFallback>
                </Avatar>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Topbar