import React, { useState } from 'react';
import "./style.css"
import Menu from './menuApi';
import Menucard from './Menucard';
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curElem)=>{  // " ... " -->  spread operator used to see array in a proper way
return curElem.category;
})
),"All",
]

export const Resturant = () => {

    const [menuData, setmenuData]=useState(Menu);
    const [menuList,setmenuList]=useState(uniqueList)

    const filterItem=(category)=>{
        if(category === "All"){
            setmenuData(Menu);
            return;
        }
            const updatedList =Menu.filter((curElem)=>{
                return curElem.category===category
            })
            setmenuData(updatedList);
    }
    return (
       <>
      <Navbar filterItem={filterItem} menuList={menuList} />
       <Menucard menuData={menuData} />
       </>       
    )
}
export default Resturant;