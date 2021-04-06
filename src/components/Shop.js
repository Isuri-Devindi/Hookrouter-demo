import React, {useState,useEffect} from 'react'
import {A} from 'hookrouter'
function Shop() {
    useEffect(()=>{
        fetchItems();
    },[]);

    const [items,setItem] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items);
        setItem(items);
    }
    return (
        <div>
            <h1>PRODUCTS AVAILABLE</h1>
            <div>
                
                {items.map(item =>(
                <h2   key={item.id}>
                    <ul className='item-list'>
                        <li>
                        <A href= {`/shop/${item.id}`}>{item.title}</A> 
                        </li>
                    
                    </ul>
                 
                </h2>
                 ))}
                
               
            </div>
            
        </div>
    );
}

export default Shop