import cartIcon from '.././assets/icons/cart.svg'
import {useState} from "react"

// click on add to cart action 

const Item = ({data})=>{

    const [counter,setCounter] = useState(0);

    const descreaseCounterByOne = () => {
      let count= counter-1;
      if(count<0){
        return;
      }
      setCounter(count);
    }

    const increaseCounterByOne = () => {
      let count = counter+1;
      setCounter(count);
    }
    return (

    <div className={"item-card"}>
            <img src={data.thumbnail} className={"img-fluid"} alt="Page shirt item" />
            <div className={"item-card__information"}>
                <div className="pricing">
                    <span>{data.discountedPrice}</span>
                    <small><strike>{data.price}</strike></small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {/* <button className={"cart-add"} onClick={clickOnCart}>
                <span>Add to Cart</span>
                <img src={cartIcon} alt="Cart logo" />
            </button>
             */}
            <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>

    </div>
    );
}

export default Item;