import cartIcon from '.././assets/icons/cart.svg'

// click on add to cart action 

const Item = ({ data }) => {

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
      <button className={"cart-add"} >
        <span>Add to Cart</span>
        <img src={cartIcon} alt="Cart logo" />
      </button>
    </div>
  );
}

export default Item;