import ProductList from "./components/ProductList";
import Header from "./components/Header"
// consists entire page header body and footer


const App = () => {
  return (
    <div className="App">
      {/* header section */}
      <Header />
      {/* body section */}
      <ProductList />
    </div>
  );
};



export default App;