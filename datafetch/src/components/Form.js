
const Form = (props) => {

    const handleChange = (e) => {
        props.onInputChange(e);
    }
    return (
        <form onSubmit={props.onFormSubmission}>
            <h2>Item Card Details</h2>
            <div className={"input-field"}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={props.item.title}
                    onChange={handleChange}
                    name="title"
                    required
                />
            </div>
            <div className={"input-field"}>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    value={props.item.price}
                    onChange={handleChange}
                    name="price"
                    required
                />
            </div>
            <div className={"input-field"}>
                <label htmlFor="discountPrice">Discount Price</label>
                <input
                    type="number"
                    placeholder="Enter Discounted Price"
                    value={props.item.discountedPrice}
                    name="discountedPrice"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={"input-field"}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                    type="text"
                    placeholder="Enter Thumbnail name"
                    value={props.item.thumbnail}
                    name="thumbnail"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={"submit-wrap"}>
                <button>Update</button>
            </div>
        </form>
    );
}


export default Form;

