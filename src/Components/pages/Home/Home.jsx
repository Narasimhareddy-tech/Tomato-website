import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Menu from '../../ExploreMenu/Menu'
import FoodItem from '../../DisplayFood/FoodItem'
import Appdownload from '../../Appdownload/Appdownload'
const Home = () => {
  const [category,setcategory]=useState("All");
  return (
    <div>
        <Header/>
        <Menu category={category} setcategory={setcategory}/>
         <FoodItem category={category} />
         <Appdownload/>
    </div>
  )
}
export default Home;