import cartIcon from '.././assets/icons/cart.svg'
import {useState} from "react"

// click on add to cart action 

const Item = ({data})=>{

    const [cartMessage, setCartMessage] = useState("Product not added to cart yet !! ");
    const clickOnCart = () => {
        setCartMessage("Product added to cart.");
        console.log("Clicked");
    }


    return (
    <div className={"item-card"}>
            <img src={data.thumbnail} cclassName={"img-fluid"} alt="Page shirt item" />
            <div className={"item-card__information"}>
                <div className="pricing">
                    <span>{data.discountedPrice}</span>
                    <small><strike>{data.price}</strike></small>
                </div>
                <div className={"title"}>
                    <h3>{data.productName}</h3>
                </div>
            </div>
            <small className={"cart-message"}>{cartMessage}</small>
            <button className={"cart-add"} onClick={clickOnCart}>
                <span>Add to Cart</span>
                <img src={cartIcon} alt="Cart logo" />
            </button>
            
    </div>
    );
}

export default Item;