import React from 'react'
import CurvedLoop from "./ui/CurvedLoop";

const Loop = () => {
    
  return (
    <div className='z-40'>
    <CurvedLoop 
    marqueeText="Get 20% OFF on all Custom Posters — Limited Time Offer! ✦ Enjoy Free Shipping on orders above Rs. 3000! ✦ Buy 2 Get 1 FREE on Selected Art Prints — Don’t Miss Out! ✦ New Arrivals Just Dropped — Discover the Latest Art! ✦ Turn Your Walls Into Art — Shop Now & Save Big! ✦ Express Your Passion — Design Your Own Poster Now!  ✦"
    speed={3}
    curveAmount={100}
    direction="right"
    interactive={false}
    className="custom-text-style z-30"
    />
    </div>
  )
}

export default Loop
