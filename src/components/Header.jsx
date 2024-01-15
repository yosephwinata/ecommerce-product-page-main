import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import NavBar from "./NavBar";

const Header = ({ onMenuButtonClick }) => {
  return (
    <header className="xl:border-very-light-gray flex items-center px-6 pb-6 pt-[1.1875rem] xl:mx-auto xl:h-28 xl:w-[70rem] xl:border-b xl:px-0 xl:pb-0 xl:pt-0">
      <img
        src={menuIcon}
        alt="Menu icon"
        className="xl:hidden"
        onClick={onMenuButtonClick}
      />
      <img src={logo} alt="Logo" className="ml-4 h-5 xl:ml-0" />
      <div className="hidden xl:flex xl:h-full xl:items-center">
        <NavBar />
      </div>
      <svg
        width="22"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        className="hover:text-black ml-auto cursor-pointer text-dark-grayish-blue"
      >
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
      <img
        src={avatar}
        alt="User avatar"
        className="border-transparent ml-5 w-6 cursor-pointer rounded-full border-2 hover:border-orange xl:ml-[2.875rem] xl:w-[3.125rem]"
      />
    </header>
  );
};

export default Header;
