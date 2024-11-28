import React, { useEffect, useState} from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
 
  return (
    <div>
     
 <CategoryList/>
 <BannerProduct/>
    <VerticalCardProduct category={"Phone Covers"} heading={"Phone Covers"}/>
 <VerticalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <VerticalCardProduct category={"watches"} heading={"Popular's Watches"}/>
 <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
    </div>
  )
}

export default Home
