import shirt from ".././assets/shirt.png";
import Item from "./Item"


const prodList = [
    {
        id: 1,
        thumbnail: shirt,
        price: 499,
        discountedPrice: 360,
        productName: "White Hoodie",
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

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    prodList.map((prod) => <Item data={prod} />)
                }
            </div>

        </div>
    );
};

export default ProductList;