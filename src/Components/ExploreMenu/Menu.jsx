import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({category,setcategory}) => {
    const handleitem=(selected)=>{
        if(selected===category){
            setcategory("All");
        }
        else{
            setcategory(selected);
        }

    }
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>handleitem(item.menu_name)}  key={index} className='explore-menu-item-list'>
                        <img className ={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                          </div>
                )
            })}
        </div>
        <hr />
        
        
        </div>
  )
}

export default Menu;