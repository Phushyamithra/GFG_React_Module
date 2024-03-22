import { useState } from "react"
import Item from "./Item"
import Form from "./Form"

const ProductList = () => {


    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "shirt.png"
    })
    const handleChange = (event) => {
      setItem({
        ...item,
        [event.target.name] : event.target.value
      })
    }
    const submitForm = event => {
        event.preventDefault();
        
        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
        console.log("Data from Form came back "+item);
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <Form item = {item} onInputChange ={handleChange} onFormSubmission = {submitForm}></Form>
            </div>
            <div>
                <div>
                    <Item data={item} />
                </div>
            </div>
        </div>
    )
}

export default ProductList;