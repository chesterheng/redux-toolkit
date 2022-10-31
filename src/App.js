import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";

function App() {
  const { isOpen } = useSelector(({ modal }) => modal);
  return (
    <main>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </main>
  );
}
export default App;
