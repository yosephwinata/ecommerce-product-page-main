import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TrashSvgIcon from "/src/components/common/svg/TrashSvgIcon.jsx";
import Overlay from "/src/components/common/Overlay";
import { removeItem } from "../../features/cart/cartSlice";
import productThumbnail from "/src/assets/images/image-product-1-thumbnail.jpg";

const CartPopover = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      <Overlay isOpen={isOpen} onOverlayClick={onClose} isTransparent={true} />
      <div
        className={`absolute -bottom-2 left-1/2 z-50 flex w-[96%] -translate-x-1/2 translate-y-full flex-col overflow-hidden rounded-[10px] bg-white shadow-2xl xl:bottom-0 xl:left-auto xl:right-0 xl:w-[22.5rem] xl:translate-x-16 xl:translate-y-[90%] ${!isOpen && "hidden"} ${isCartEmpty && "h-64"}`}
      >
        <p className="border-b border-very-light-gray px-6 pb-[1.6875rem] pt-6 text-[1rem] font-bold">
          Cart
        </p>
        <div
          className={`justify-between px-6 pb-8 pt-6 ${isCartEmpty && "hidden"}`}
        >
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <a
            href="#"
            className="mt-6 block rounded-[10px] bg-orange py-5 text-center text-[1rem] font-bold text-white"
          >
            Checkout
          </a>
        </div>
        <div
          className={`flex h-auto flex-grow items-center justify-center ${!isCartEmpty && "hidden"}`}
        >
          <p className={`text-base font-bold text-dark-grayish-blue`}>
            Your cart is empty.
          </p>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalPrice = product.finalPrice * product.quantity;

  const handleRemoveFromCart = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="flex items-center">
      <img
        src={productThumbnail}
        alt="Product thumbnail"
        className="w-[3.125rem] rounded"
      />
      <div className="ml-4">
        <p className="text-[1rem] text-dark-grayish-blue">{product.name}</p>
        <div>
          <span className="text-[1rem] text-dark-grayish-blue">
            {USDollar.format(product.finalPrice)}{" "}
          </span>
          <span className="text-[1rem] text-dark-grayish-blue">x </span>
          <span className="text-[1rem] text-dark-grayish-blue">
            {product.quantity}{" "}
          </span>
          <span className="text-[1rem] font-bold">
            {USDollar.format(totalPrice)}
          </span>
        </div>
      </div>
      <div className="ml-auto">
        <TrashSvgIcon onClick={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default CartPopover;
