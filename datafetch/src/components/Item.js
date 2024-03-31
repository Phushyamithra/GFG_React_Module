import { useState } from 'react';
import cartIcon from '.././assets/icons/cart.svg'

// click on add to cart action 

const Item = ({ data }) => {
  const [counter,setCounter] = useState(0);
  const incCounter= () => {
    setCounter(counter+1);
  }
  const decCounter = () => {
    if(counter>0)
      setCounter(counter-1);
    else 
      return;
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
      {
       counter == 0 ?
        (  <button className={"cart-add"} onClick={incCounter}>
            <span>Add to Cart</span>
           <img src={cartIcon} alt="Cart logo" />
          </button>
        )
        :
        (
          <>
        <button onClick={incCounter}>+</button><span>{counter}</span><button onClick={decCounter}>-</button>
        </>
        )
      }
    </div>
  );
}

export default Item;