import { useState, useEffect } from "react"
import Item from "./Item"
import axios from 'axios'
const ProductList = () => {


    const [items, setItems] = useState([]);

    useEffect(() => {
        
        async function fetchItems() {
                try {
                const response = await axios.get(`https://react-db-b1fa6-default-rtdb.firebaseio.com/items.json`)
                const data = response.data;
                // Mapping over the keys of the data object retrieved from Firebase
                const transformedData = Object.keys(data).map((key, index) => ({
                    // Using the key as the unique identifier (id) for each item
                    id: key,
                    // Spreading all other properties from the corresponding data[key] object
                    ...data[key]
                }));
                console.log(transformedData);
                // Setting the state with the transformed data
                setItems(transformedData);
            }
            catch (err) {
                console.log("Some error", err);
            }
        }
        fetchItems();
    }, []);
    const updateTitle = async (itemid) => {
      console.log(itemid);
      const title = prompt("Enter new Title");
      await axios.patch(`https://react-db-b1fa6-default-rtdb.firebaseio.com/items/${itemid}.json`,{
        title : title
      });
      let data = [...items];
      let index = data.findIndex(e => e.id === itemid)
      data[index]['title'] = title;
      setItems(data);
    }
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {
                    items.map((item) => {
                        return (<Item key={item.id} data={item} updateTitle={updateTitle} />);
                    })
                }
            </div>
        </div>
    )
}

export default ProductList;