import { useState } from "react";
import shirt from ".././assets/shirt.png";
import Item from "./Item"



const ProductList = () => {

    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(499);
    const [discountedPrice,setDiscountedPrice]=useState(0);
    const prodList = [
        {
            id: 1,
            thumbnail: shirt,
            price: price,
            discountedPrice: discountedPrice,
            productName: title,
        },
        {
            id: 2,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "White Shirt",
        },
        {
            id: 3,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Black Hoodie",
        },
        {
            id: 4,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Black Shirt",
        },
        {
            id: 5,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Tshirt",
        },
        {
            id: 6,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Jeans",
        },
        {
            id: 7,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Sweatshirt",
        },
        {
            id: 8,
            thumbnail: shirt,
            price: 245,
            discountedPrice: 230,
            productName: "Converse Shoes",
        }
    ];
    
    const changeTitle = (props) => {
        setTitle(props.target.value);
        // console.log(props);
    }

    const changePrice = (props) => {
      setPrice(props.target.value);
    }
    const changeDiscountedPrice = props => {
        setDiscountedPrice(props.target.value);
    }
    return (
        <div className="product-wrapper">
            <div className="form">
                <form >
                    <h2>Item Card Details</h2>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Enter Title" onChange={changeTitle}/> 
                        <label htmlFor="title">Price</label>
                        <input type="text" placeholder="Enter Price" onChange={changePrice}/>
                        <label htmlFor="title">Discounted Price</label>
                        <input type="text" placeholder="Enter New Price" onChange={changeDiscountedPrice}/>
                    </div>
                </form>

            </div>


            <div>
            <div >
                <Item data={prodList[0]}/>
            </div>
            </div>
        </div>
    );
};

export default ProductList;