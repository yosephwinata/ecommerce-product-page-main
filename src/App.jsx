import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header";
import MenuSideBar from "./components/touch/MenuSideBar";
import Product from "./pages/Product";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onMenuButtonClick={toggleSidebar} />
      <MenuSideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* <Overlay isOpen={isSidebarOpen} onOverlayClick={toggleSidebar} /> */}
      <Product />
    </>
  );
}

export default App;
