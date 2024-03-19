import cartIcon from './assets/icons/cart.svg'
import shirt from './assets/images/shirt.png'


const Item = ()=>{
    return (
    <div className={"item-card"}>
            <img src={shirt} cclassName={"img-fluid"} alt="Page shirt item" />
            <div className={"item-card__information"}>
                <div className="pricing">
                    <span>360</span>
                    <small><strike>499</strike></small>
                </div>
                <div className={"title"}>
                    <h3>Title of the Item</h3>
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