import CartWidget from "./components/common/cartwidget/CartWidget";
import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  const greeting = "Bienvenido";
  return (
    <div>
      <Navbar />
      <CartWidget />
      <ItemListContainer greeting={greeting} />
    </div>
  );
};

export default App;
