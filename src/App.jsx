import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuSideBar from "./components/MenuSideBar";
import Overlay from "./components/Overlay";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onMenuButtonClick={toggleSidebar} />
      <MenuSideBar isOpen={isSidebarOpen} onCloseIconClick={toggleSidebar} />
      <Overlay isOpen={isSidebarOpen} onOverlayClick={toggleSidebar} />
    </>
  );
}

export default App;
