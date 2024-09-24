"use client"

import Shop from './shop'
import Card from './card'
import CardProvider from './cardProvider'

export default function Page() {

 
  return (
    <div>
     <h1 className='text-white text-7xl flex '>Context api</h1>
     <CardProvider>
      <Shop/>
   <div className='mt-10'>   <hr/><Card/></div>
   </CardProvider>
    </div>
  )
}
