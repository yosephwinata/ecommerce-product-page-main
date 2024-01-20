import { createPortal } from "react-dom";
import closeIcon from "../../assets/images/icon-close.svg";
import NavBar from "../common/NavBar";
import Overlay from "/src/components/common/Overlay";

const MenuSideBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay isOpen={isOpen} onOverlayClick={onClose} />
      <div className="fixed left-0 top-0 z-50 h-full w-[15.625rem] bg-white p-[1.5625rem]">
        <img
          src={closeIcon}
          alt="Close icon"
          onClick={onClose}
          className="mb-[3.375rem]"
        />
        <NavBar />
      </div>
    </>,
    document.getElementById("modal"),
  );
};

export default MenuSideBar;
