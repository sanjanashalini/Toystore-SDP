
import React from 'react'
import { BoxRevealDemo } from './Box-Reveal'

import { MagicCardDemo } from './Magic'
import {  MagicCards } from './Magic-copy'
import Footer from '@/components/Shared/Footer'
import FeedbackForm from './Feedbackform'

const Home = () => {
    return (<>
    <br></br>
    <br>
    </br>
        <div className='h-full w-full flex justify-center items-center'>
            <BoxRevealDemo/>
            <MagicCardDemo/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex justify-center items-center ">
            <h1 className="font-semibold text-1xl sm:text-0xl md:text-2xl lg:text-2xl">Play is the highest form of research."  
"Every toy is the beginning of a new adventure."
"Discover the magic of play.</h1>
</div>
<br></br>
<br></br>
<div className="flex justify-center bg-red-600 items-center h-30">
  <h1 className="font-semibold text-1xl sm:text-3xl md:text-4xl lg:text-6xl">WELCOME TO THE TOYS WORLD</h1>
</div>
            <br></br>
            <br></br>
            <div className='h-full w-50 flex-col justify-center items-center'>
            
            <MagicCards/>
 
 
        </div>
        <br></br>
        <FeedbackForm></FeedbackForm>
     
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
        </>
    )
}

export default Home