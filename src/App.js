import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";

function App() {
  return (
    <main>
      <Navbar />
      <Modal />
      <CartContainer />
    </main>
  );
}
export default App;
