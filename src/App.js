import Item from './Item'
import shirt from './assets/images/shirt.png'


const App= ()=> {
  return (
    <div className="App">
      <Item data ={    {thumbnail : shirt,
        price : 499,
        discountedPrice : 360,
        productName : "White Hoodie"} }/>
    </div>
  );
}

export default App;
