import { Fragment, useState } from 'react';
import cartIcon from '.././assets/icons/cart.svg'
import Modal from './UI/Modal.js'
// click on add to cart action 

const Item = ({ data, updateTitle }) => {
  const [counter, setCounter] = useState(0);

  // counter functionality
  const incCounter = (event) => {
    event.stopPropagation();
    setCounter(counter + 1);
  }
  const decCounter = (event) => {
    event.stopPropagation();
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
      {showModal && <Modal closeModal={handleModal}>
        <div className="item-card__modal">
          <div className="img-wrap">
            <img className={"img-fluid"} src={data.thumbnail} alt={data.title} />
          </div>
          <div className="meta">
            <h3>{data.title}</h3>
            <div className={"pricing"}>
              <span>₹{data.discountedPrice}</span>
              <small>
                <strike>₹{data.price}</strike>
              </small>
            </div>
            <p>{data.description}</p>
            {
              counter < 1 ?
                <button className={"cart-add card-add__modal"} onClick={incCounter}>
                  <span>Add to Cart</span>
                  <img src={cartIcon} alt="Cart Icon" />
                </button>
                :
                <div className="cart-addon card-addon__modal">
                  <button onClick={decCounter}><span>-</span></button>
                  <span>{counter}</span>
                  <button onClick={incCounter}><span>+</span></button>
                </div>
            }
          </div>
        </div>
      </Modal>}
    </>
  );
}

export default Item;