import { useState } from "react"
import Item from "./Item"

const ProductList = () => {


    const [items, setItems] = useState([{
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "shirt.png"
    },
    {
        id: 1,
        title: "White Shirt",
        price: 245,
        discountedPrice: 230,
        thumbnail: "shirt.png",
    },
    {
        id: 2,
        title: "Black Hoodie",
        price: 245,
        discountedPrice: 230,
        thumbnail: "shirt.png",
    },
    {
        id: 3,
        title: "Black Shirt",
        price: 245,
        discountedPrice: 230,
        thumbnail: "shirt.png",
    }]
    );
    

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
               {
                    items.map((item) => {
                      return(<Item key={item.id} data ={item}/>);    
                    })
                }
            </div>
        </div>
    )
}

export default ProductList;