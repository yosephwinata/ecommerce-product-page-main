import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import NavBar from "./NavBar";

const Header = ({ onMenuButtonClick }) => {
  return (
    <header className="flex items-center px-6 pb-6 pt-[1.1875rem] xl:mx-auto xl:w-[70rem] xl:border-b xl:border-grayish-blue xl:px-0 xl:pb-[2.125rem] xl:pt-7">
      <img
        src={menuIcon}
        alt="Menu icon"
        className="xl:hidden"
        onClick={onMenuButtonClick}
      />
      <img src={logo} alt="Logo" className="ml-4 h-5 xl:ml-0" />
      <div className="hidden xl:block">
        <NavBar />
      </div>
      <img src={cartIcon} alt="Shopping cart icon" className="ml-auto" />
      <img
        src={avatar}
        alt="User avatar"
        className="ml-5 w-6 xl:ml-[2.875rem] xl:w-[3.125rem]"
      />
    </header>
  );
};

export default Header;
