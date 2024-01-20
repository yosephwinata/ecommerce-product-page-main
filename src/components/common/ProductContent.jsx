import { useDispatch } from "react-redux";
import WhiteCartSvgIcon from "./svg/WhiteCartSvgIcon";
import PrimaryButton from "./buttons/PrimaryButton";
import AmountSelector from "./AmountSelector";
import { addItem } from "../../features/cart/cartSlice";
import { useState } from "react";

const ProductContent = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleMinusClick = () => {
    if (quantity === 0) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addItem({ product, quantity }));
  };

  return (
    <div className="p-6 xl:mt-[3.875rem] xl:w-[27.8125rem] xl:p-0">
      <p className="mb-[1.1875rem] text-xs font-bold uppercase tracking-[1.85px] text-orange xl:mb-[1.6875rem] xl:text-[0.8125rem] xl:tracking-[2px]">
        Sneaker Company
      </p>
      <h1 className="mb-[0.9375rem] text-[1.75rem] font-bold leading-8 xl:mb-8 xl:text-[2.75rem] xl:leading-[1.0909]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mb-6 text-[0.9375rem] leading-[1.667rem] text-dark-grayish-blue xl:text-[1rem] xl:leading-[1.625]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-[1.6875rem] flex items-center xl:block">
        <div className="flex items-center xl:mb-[0.625rem]">
          <p className="text-[1.75rem] font-bold">$125.00</p>
          <p className="ml-4 rounded-md bg-pale-orange px-2 py-1 text-[1rem] font-bold text-orange">
            50%
          </p>
        </div>
        <p className="ml-auto text-[1rem] font-bold text-grayish-blue line-through">
          $250.00
        </p>
      </div>
      <div className="xl:flex xl:gap-4">
        <AmountSelector
          className="mb-4 h-14 w-full xl:mb-0 xl:basis-[9.8125rem]"
          quantity={quantity}
          onMinusClick={handleMinusClick}
          onPlusClick={handlePlusClick}
        />
        <PrimaryButton
          className="h-14 w-full xl:w-auto xl:flex-grow"
          onClick={handleAddToCart}
        >
          <WhiteCartSvgIcon />
          <span>Add to cart</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ProductContent;
