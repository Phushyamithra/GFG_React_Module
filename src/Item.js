import cartIcon from './assets/icons/cart.svg'


const Item = ({data})=>{
    console.log(props);
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
            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={cartIcon} alt="Cart logo" />
            </button>
            
    </div>
    );
}

export default Item;