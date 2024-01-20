import { useSelector } from "react-redux";
import TrashSvgIcon from "/src/components/common/svg/TrashSvgIcon.jsx";

const CartPopover = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="absolute -bottom-2 left-1/2 z-50 w-[96%] -translate-x-1/2 translate-y-full overflow-hidden rounded-[10px] bg-white shadow-2xl xl:bottom-0 xl:left-auto xl:right-0 xl:w-[22.5rem] xl:translate-x-16 xl:translate-y-[90%]">
      <p className="border-b border-very-light-gray px-6 pb-[1.6875rem] pt-6 text-[1rem] font-bold">
        Cart
      </p>
      <div className="justify-between px-6 pb-8 pt-6">
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
    </div>
  );
};

const CartItem = ({ product }) => {
  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalPrice = product.finalPrice * product.quantity;

  return (
    <div className="flex items-center">
      <img
        src="/src/assets/images/image-product-1-thumbnail.jpg"
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
        <TrashSvgIcon />
      </div>
    </div>
  );
};

export default CartPopover;
