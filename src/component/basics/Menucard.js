import React from 'react'

export const Menucard = ({menuData}) => {
    return (
        <>
            {menuData.map((curElem)=>{
                const{id,name,category,price} =curElem;

                return(
                    <>
                    <div className="card-container" key={curElem.id}>
            <div className="card">
                <div className="card-body">
                    <span className='card-number'>{id}</span>
                    <span className="cardauthor">{name}</span>
                    <h2 className='card-tittle'>{category}</h2>
                    <span className="price">{price}</span>
                    <span className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex quisquam optio, harum voluptas animi, beatae rem exercitationem sunt repellat, fugiat numquam ipsa.
                    </span>
                    <div><button>Order Now</button></div>
                </div>
            </div>
        </div>
                    </>
                )
            })}
           
        </> 
        
    )
}

export default Menucard;
