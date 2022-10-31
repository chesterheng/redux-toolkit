import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";
import { getCartItems } from "./services/cart";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(({ modal }) => modal);
  const { isLoading } = useSelector(({ cart }) => cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </main>
  );
}
export default App;
