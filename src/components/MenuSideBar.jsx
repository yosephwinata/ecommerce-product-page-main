import closeIcon from "../assets/images/icon-close.svg";
import NavBar from "./NavBar";

const MenuSideBar = ({ isOpen, onCloseIconClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-[15.625rem] bg-white p-[1.5625rem]">
      <img
        src={closeIcon}
        alt="Close icon"
        onClick={onCloseIconClick}
        className="mb-[3.375rem]"
      />
      <NavBar />
    </div>
  );
};

export default MenuSideBar;
