import ProductList from "./components/ProductList";
import Header from "./components/Headers/Header"
import Subheader from "./components/Headers/Subheader"

// consists entire page header body and footer


const App = () => {

  
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