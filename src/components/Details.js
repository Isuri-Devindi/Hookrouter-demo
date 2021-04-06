import React, {useState,useEffect} from 'react'


function Details({id}) {
    useEffect(()=>{
        fetchItem();
        console.log(id)
    },[]);

    const [item,setItem] = useState({});

    const fetchItem = async () =>{
        const fetchItem =await fetch(`https://fakestoreapi.com/products/${id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    }
    return (
        <div>
            <h1>{item.title}</h1>
            <img src = {item.image}/>
          
        </div>
    );
}

export default Details
