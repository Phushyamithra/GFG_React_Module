import ProductList from "./components/ProductList";
import Header from "./components/Header"
import Subheader from "./components/Subheader"
import { useEffect } from "react";

// consists entire page header body and footer


const App = () => {

  useEffect(() => {
    const res = fetch(`https://react-db-b1fa6-default-rtdb.firebaseio.com/items.json`).
    then(response => response.json()).then(data => {
      console.log(data);  
    })
    .catch(err  => {
      console.log(err);
    })  
  },[])
  return (
    <div className="App">
      {/* header section */}
      <Header />
      {/* subheader section  */}
      <Subheader/>
      {/* body section */}
      <ProductList />
    </div>
  );
};



export default App;