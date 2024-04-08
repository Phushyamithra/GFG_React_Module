import { Fragment, useState } from 'react';
import cartIcon from '.././assets/icons/cart.svg'
import Modal from './UI/Modal.js'
// click on add to cart action 

const Item = ({ data, updateTitle }) => {
  const [counter, setCounter] = useState(0);

  // counter functionality
  const incCounter = () => {
    setCounter(counter + 1);
  }
  const decCounter = () => {
    if (counter > 0)
      setCounter(counter - 1);
    else
      return;
  }

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(previousValue => !previousValue);
  }

  return (
    <>
      <div onClick={handleModal} className={"item-card"}>
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
        {/* <button type="button" onClick={() => updateTitle(data.id)}>Update the title !!</button> */}
        {
          counter == 0 ? (
            <button className={"cart-add"} onClick={incCounter}>
              <span>Add to Cart</span>
              <img src={cartIcon} alt="Cart logo" />
            </button>) : (
            <div className="cart-addon">
              <button onClick={decCounter}>-</button>
              <span>{counter}</span>
              <button onClick={incCounter}>+</button>
            </div>
          )
        }
      </div>
      {showModal && <Modal closeModal={handleModal} />}
    </>
  );
}

export default Item;